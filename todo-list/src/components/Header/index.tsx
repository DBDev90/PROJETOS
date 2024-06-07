import { useContext, useState } from "react"
import { TodoContext } from "../../contexts/TodoContext";
import style from "./Header.module.css"
import { Input } from "../Input";
import { Button } from "../Button";

export const Header = () => {
    const [inputValue, setInputValue] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleNewTask = () => {
        if (!inputValue) return alert("Digite um título para a nova tarefa");

        dispatch({ type: "ADD", payload: { title: inputValue, isDone: false } });
        setInputValue("");
    };

    return (
        <div className={style.container}>
            <div className={style.brandContainer}>
                <img src="/brand.png" alt="GRF Todo List" />
            </div>

            <div className={style.newTaskContainer}>
                <div className={style.newTaskInput}>
                    <Input value={inputValue} onChange={e => setInputValue(e.target.value)} />
                </div>
                <Button onClick={handleNewTask} />
            </div>
        </div>
    );
}