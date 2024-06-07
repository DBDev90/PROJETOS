import styles from "./Button.module.css";
import AddIcon from "../../assets/add.svg?react";

type ButtonProps = {
    onClick: () => void;
}

export const Button = ({ onClick }: ButtonProps) => {
    return (
        <div className={styles.container}>
            <button onClick={onClick}>Criar <AddIcon /></button>
        </div>
    );
}