import React, { useContext } from "react";
import styles from "./styles.module.css";
import {
	AiOutlineCheckCircle,
	AiOutlineCloseCircle,
	AiOutlineHeart,
} from "react-icons/ai";
import { Button } from "./UI/Button";
import { TitleHeader } from "./UI/TitleHeader";
import { Premium } from "./UI/Premium";
import { ImgMovie } from "./UI/ImgMovie";
import { mainContext } from "./context/mainContext";
import { ImSpinner9 } from "react-icons/im";

export const App: React.FC = () => {
	const {
		movie,
		theEnd,
		loading,
		rejectHandlers,
		acceptHandlers,
		premiumHandler,
		likeHandler,
	} = useContext(mainContext);

	return (
		<>
			<h4 className={styles.logo}>Movie Tinder App</h4>
			{loading && (
				<>
					<span className={styles.spin} data-testid="spinner">
						<ImSpinner9 size="4em" />
					</span>
					<span className={styles.spin}>
						<ImSpinner9 size="4em" />
					</span>
				</>
			)}
			{movie && !theEnd && (
				<div key={movie.id} className={styles.card}>
					<TitleHeader
						title={movie.title}
						summary={movie.summary}
						rating={movie.rating}
					/>
					<ImgMovie title={movie.title} src={movie.imageURL} />
					<div className={styles.flex}>
						<Button
							onClickHandler={() => rejectHandlers(movie.id)}
							icon={
								<AiOutlineCloseCircle
									size={"3em"}
									color={"F87171"}
								/>
							}
							text={"REJECT"}
						/>
						<Button
							onClickHandler={() => likeHandler(movie.id)}
							icon={<AiOutlineHeart size={"2em"} color={"A78BFA"} />}
							text={"LIKE"}
						/>
						<Button
							onClickHandler={() => acceptHandlers(movie.id)}
							icon={
								<AiOutlineCheckCircle
									size={"3em"}
									color={"34D399"}
								/>
							}
							text={"ACCEPT"}
						/>
					</div>
				</div>
			)}
			{theEnd && <Premium onClickHandler={premiumHandler} />}
		</>
	);
};
