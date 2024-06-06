import { useContext } from "react";
import { Context } from "../contexts/Context";

export const Button = () => {
    const { state, dispatch } = useContext(Context);

    const handleClick = () => {
        if (state.theme.theme === "light") {
            return dispatch({ type: "CHANGE_THEME", payload: "dark" });
        }

        return dispatch({ type: "CHANGE_THEME", payload: "light" });
    };

    return (
        <>
            <h2
                style={{ background: state.theme.theme === "light" ? "yellow" : "red" }}
            >
                O tema é: {state.theme.theme}
            </h2>
            <button onClick={handleClick}>Mudar tema</button>
        </>
    );
};
