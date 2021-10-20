import { render, screen } from "@testing-library/react";
import { getAllMoviesHttp } from "./services";

// check mock
test("render services", async () => {
	const data = await getAllMoviesHttp();
	console.log("data", data);
	expect(data).toBeTruthy();
});
