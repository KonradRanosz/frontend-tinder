import React, { useCallback, useEffect, useState } from "react";
import { Imovie } from "../types/types";
import {
	getAllMoviesHttp,
	putAcceptIdMovie,
	putRejectIdMovie,
} from "../API/services";

type mineContextType = {
	movie: Imovie | null;
	theEnd: boolean;
	loading: boolean;
	rejectHandlers: (id: string) => void;
	acceptHandlers: (id: string) => void;
	likeHandler: (id: string) => void;
	premiumHandler: () => void;
};

export const mainContext = React.createContext<mineContextType>({
	movie: null,
	theEnd: false,
	loading: true,
	rejectHandlers: () => {},
	acceptHandlers: () => {},
	likeHandler: () => {},
	premiumHandler: () => {},
});

type PropsType = {};

export const MainContextProvider: React.FC<PropsType> = (props) => {
	const [movieList, setMovieList] = useState<Imovie[]>([]);
	const [movie, setMovie] = useState<Imovie | null>(null);
	const [movieCounter, setMovieCounter] = useState<number>(0);
	const [theEnd, setTheEnd] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	const getAllMoviesHandler = useCallback(async () => {
		setLoading(true);
		const responseMovieList: Imovie[] | [] = await getAllMoviesHttp();
		setMovieList(responseMovieList);
		setMovie(responseMovieList[0]);
		setLoading(false);
	}, []);

	useEffect(() => {
		getAllMoviesHandler();
	}, [getAllMoviesHandler]);

	const rejectHandlers = async (id: string) => {
		putRejectIdMovie(id);

		if (movieList.length - 1 > movieCounter) {
			setMovie(movieList[movieCounter + 1]);
			setMovieCounter(movieCounter + 1);
		} else {
			setMovieCounter(0);
			setMovie(null);
			setTheEnd(true);
		}
	};

	const acceptHandlers = async (id: string) => {
		putAcceptIdMovie(id);
		if (movieList.length - 1 > movieCounter) {
			setMovie(movieList[movieCounter + 1]);
			setMovieCounter(movieCounter + 1);
		} else {
			setMovieCounter(0);
			setMovie(null);
			setTheEnd(true);
		}
	};

	const likeHandler = async (id: string) => {
		console.log("like ♥️", id);
	};

	const premiumHandler = () => {
		setTheEnd(false);
		getAllMoviesHandler();
	};

	return (
		<mainContext.Provider
			value={{
				movie,
				theEnd,
				loading,
				rejectHandlers,
				acceptHandlers,
				likeHandler,
				premiumHandler,
			}}
		>
			{props.children}
		</mainContext.Provider>
	);
};
