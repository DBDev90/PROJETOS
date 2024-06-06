import { useContext } from "react";
import { Context } from "../contexts/Context";

export const AuthCard = () => {
    const { state: { user: { user } }, dispatch } = useContext(Context);

    const handleSignIn = () =>
        dispatch({ type: "SIGNIN", payload: { user: { id: 1, name: "Douglas" } } });
    const handleSignOut = () => dispatch({ type: "SIGNOUT" });

    return (
        <>
            {user ? (
                <>
                    <div>
                        ID: {user.id}
                        <br />
                        NOME: {user.name}
                    </div>

                    <button onClick={handleSignOut}>Fazer logout</button>
                </>
            ) : (
                <>
                    <button onClick={handleSignIn}>Fazer login</button>
                </>
            )}
        </>
    );
};
