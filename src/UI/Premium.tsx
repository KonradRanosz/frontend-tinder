import React from "react";
import styles from "../styles.module.css";
import { AiOutlineDollar } from "react-icons/ai";

type PropsType = { onClickHandler: () => void };

export const Premium: React.FC<PropsType> = (props) => {
	const { onClickHandler } = props;

	return (
		<div className={styles.premium} data-testid="premiumDiv">
			<AiOutlineDollar size="3em" />
			<h2>Become a premium member!</h2>
			<p>only $99</p>
			<button onClick={onClickHandler}>Buy premium! </button>
		</div>
	);
};
