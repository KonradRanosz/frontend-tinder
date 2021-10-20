import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("render button", () => {
	render(<Button icon={<i></i>} text={"text"} onClickHandler={() => {}} />);
	const button = screen.getByTestId("button");
	expect(button).toBeInTheDocument();
});
