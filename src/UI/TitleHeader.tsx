import React, { useContext } from "react";
import styles from "../styles.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { mainContext } from "../context/mainContext";

type PropsType = {
	title: string;
	summary: string;
	rating: string;
};

export const TitleHeader: React.FC<PropsType> = (props) => {
	const { movie } = useContext(mainContext);

	return (
		<div className={styles.titleHeader} data-testid={"titleHeaderDiv"}>
			<h3>{movie?.title}</h3>
			<p>{movie?.summary}</p>
			<p>
				<AiOutlineStar />
				<small>
					<b> {movie?.rating}</b>{" "}
				</small>
			</p>
		</div>
	);
};
