import { render, screen } from "@testing-library/react";
import { TitleHeader } from "./TitleHeader";

test("render titleHeader", () => {
	render(<TitleHeader title="string" summary="string" rating="string" />);
	const titleHeaderDiv = screen.getByTestId("titleHeaderDiv");
	expect(titleHeaderDiv).toBeInTheDocument();
});
