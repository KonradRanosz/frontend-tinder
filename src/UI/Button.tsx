import React from "react";
import styles from "../styles.module.css";

type PropsType = {
	icon: JSX.Element;
	text: string;
	onClickHandler: () => void;
};

export const Button: React.FC<PropsType> = (props) => {
	const { icon, text, onClickHandler } = props;

	return (
		<button
			onClick={onClickHandler}
			className={styles.button}
			data-testid="button"
		>
			{icon}
			<span className={styles.textUnder}> {text} </span>
		</button>
	);
};
