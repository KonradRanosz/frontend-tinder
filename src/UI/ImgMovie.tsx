import React, { useContext, useState } from "react";
import styles from "../styles.module.css";
import { useSwipeable } from "react-swipeable";
import { mainContext } from "../context/mainContext";

type PropsType = {
	src: string;
	title: string;
};

export const ImgMovie: React.FC<PropsType> = (props) => {
	const { src, title } = props;

	const { movie, rejectHandlers, acceptHandlers } = useContext(mainContext);

	const [accept, setAccept] = useState<boolean>(false);
	const [reject, setReject] = useState<boolean>(false);

	const handlers = useSwipeable({
		onSwipedLeft: () => {
			setReject(true);
			setTimeout(() => movie && rejectHandlers(movie.id), 200);
		},
		onSwipedRight: () => {
			setAccept(true);
			setTimeout(() => movie && acceptHandlers(movie.id), 200);
		},
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
		delta: 60,
	});

	return (
		<div
			{...handlers}
			className={`
				${styles.swipeParent} 
				${reject ? styles.reject : null} 
				${accept ? styles.accept : null}
			`}
			data-testid={"img"}
		>
			<div></div>
			<img src={src} alt={title} className={styles.image} />
		</div>
	);
};
