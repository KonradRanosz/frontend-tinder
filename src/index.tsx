import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { MainContextProvider } from "./context/mainContext";

ReactDOM.render(
	<MainContextProvider>
		<App />
	</MainContextProvider>,
	document.getElementById("root")
);
