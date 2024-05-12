import { useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";


export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const emailLength = useMemo(() => {
        return email.length;
    }, [email.length]);

    // useEffect(() => {
    //     console.log(email)
    // }, [email]);

    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(senha);
    }, [email, senha]);

    return (
        <>
            <form>
                <p>Quantidade de caracteres no e-mail: {emailLength}</p>

                <InputLogin
                    label="E-mail"
                    value={email}
                    onchange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />
                <InputLogin
                    label="Senha"
                    type="password"
                    value={senha}
                    ref={inputPasswordRef}
                    onchange={newValue => setSenha(newValue)}
                />

                <ButtonLogin
                    type="button"
                    onClick={handleEntrar}
                >
                Entrar
                </ButtonLogin>
                
                <ButtonLogin
                    type="button"
                    onClick={handleEntrar}
                >
                Cadastrar
                </ButtonLogin>
            </form>
        </>
    );
}