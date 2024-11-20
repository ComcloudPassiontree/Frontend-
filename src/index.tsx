import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import H1 from "./ui/components/typography/headings/h1";
import H2 from "./ui/components/typography/headings/h2";
import H3 from "./ui/components/typography/headings/h3";
import H4 from "./ui/components/typography/headings/h4";
import Paragraph1 from "./ui/components/typography/paragraphs/p1";
import Paragraph2 from "./ui/components/typography/paragraphs/p2";
import Caption from "./ui/components/typography/caption";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
