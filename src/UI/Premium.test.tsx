import { render, screen } from "@testing-library/react";
import { Premium } from "./Premium";

test("render Premium", () => {
	render(<Premium onClickHandler={() => {}} />);
	const premiumDiv = screen.getByTestId("premiumDiv");
	expect(premiumDiv).toBeInTheDocument();
});
