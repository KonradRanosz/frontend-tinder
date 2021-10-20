import { rest } from "msw";
import dataJSON from "./data.json";

export const handlers = [
	rest.get(
		"http://movietinder.nemezisff.ct8.pl/recommendations",
		(req, res, ctx) => {
			return res(ctx.status(200), ctx.json(dataJSON));
		}
	),
	rest.put(
		"http://movietinder.nemezisff.ct8.pl/recommendations/il9np630/accept",
		(req, res, ctx) => {
			return res(ctx.status(200), ctx.json("accept"));
		}
	),
	rest.put(
		"http://movietinder.nemezisff.ct8.pl/recommendations/il9np630/reject",
		(req, res, ctx) => {
			return res(ctx.status(200), ctx.json("reject"));
		}
	),
];
