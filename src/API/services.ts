import axios from "axios";
import { Imovie } from "../types/types";
import { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://movietinder.nemezisff.ct8.pl";

export const getAllMoviesHttp = async () => {
	try {
		const r: AxiosResponse<Imovie[]> = await axios.get("/recommendations");
		return r.data;
	} catch {
		console.log("error");
		return [];
	}
};
export const putAcceptIdMovie = async (id: string) => {
	try {
		const r: AxiosResponse<Imovie[]> = await axios.put(
			`/recommendations/${id}/accept`
		);
		return r.data;
	} catch {
		console.log("error");
	}
};
export const putRejectIdMovie = async (id: string) => {
	try {
		const r: AxiosResponse<Imovie[]> = await axios.put(
			`/recommendations/${id}/reject`
		);
		return r.data;
	} catch {
		console.log("error");
	}
};
