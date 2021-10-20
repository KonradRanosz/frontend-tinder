import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { App } from "./App";
// import dataJSON from "./__mocks__/data.json";

test("render logo", () => {
	render(<App />);
	const logo = screen.getByText(/Movie Tinder App/i);
	expect(logo).toBeInTheDocument();
});

test("render spinner", () => {
	render(<App />);
	const spinner = screen.getByTestId("spinner");
	expect(spinner).toBeInTheDocument();
});
