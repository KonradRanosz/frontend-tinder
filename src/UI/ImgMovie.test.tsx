import { render, screen } from "@testing-library/react";
import { ImgMovie } from "./ImgMovie";

test("render img", () => {
	render(<ImgMovie src="text" title="text" />);
	const imgComp = screen.getByTestId("img");
	expect(imgComp).toBeInTheDocument();
});
