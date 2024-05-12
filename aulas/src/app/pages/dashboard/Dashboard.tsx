import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";
import { ITarefa, TarefasService } from "../../shared/services/api/tarefas/TarefasService";
import { ApiException } from "../../shared/services/api/ErrorException";

export const Dashboard = () => {
    const counterRef = useRef({ counter: 0 });
    const { nomeUsuario, logout } = useUsuarioLogado();

    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(() => {
        TarefasService.getAll()
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(result);
                }
            })
    }, [])

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            if (lista.some((listItem) => listItem.title === value)) return;

            TarefasService.create({ title: value, isCompleted: false })
                .then((result) => {
                    if (result instanceof ApiException) {
                        alert(result.message);
                    } else {
                        setLista((oldLista) => {
                            return [
                                ...oldLista,
                                result
                            ];
                        });
                    }
                })
        }
    }, [lista]);

    const handleToggleComplete = useCallback((id: number) => {
        const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);

        if (!tarefaToUpdate) return

        TarefasService.updateById(id, {
            ...tarefaToUpdate,
            isCompleted: !tarefaToUpdate.isCompleted
        })
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(oldLista => {
                        return oldLista.map((oldListItem) => {
                            if (oldListItem.id === id) return result;
                            return oldListItem;
                        })
                    })
                }
            })
    }, [lista]);

    const handleDelete = useCallback((id: number) => {
        TarefasService.deleteById(id)
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(oldLista => {
                        return oldLista.filter(oldListaItem => oldListaItem.id !== id);
                    });
                }
            })
    }, [])

    return (
        <>
            <p>Dashboard</p>

            <p>Olá, {nomeUsuario}</p>

            <p>Contador: {counterRef.current.counter}</p>

            <button onClick={() => { counterRef.current.counter++ }}>Somar</button>
            <button onClick={() => { console.log(counterRef.current.counter) }}>Log</button>
            <button onClick={logout}>Logout</button>

            <Link to="/entrar">Login</Link>

            <div>
                <p>Lista</p>

                <input type="text" onKeyDown={handleInputKeyDown} />

                <p>{lista.filter((ListItem) => ListItem.isCompleted).length}</p>

                <ul>
                    {lista.map((listItem) => {
                        return <li key={listItem.id}>
                            <input
                                type="checkbox"
                                checked={listItem.isCompleted}
                                onChange={() => { handleToggleComplete(listItem.id) }}
                            />
                            {listItem.title}

                            <button onClick={() => handleDelete(listItem.id)}>Apagar</button>
                        </li>
                    })}
                </ul>
            </div>
        </>

    );
}