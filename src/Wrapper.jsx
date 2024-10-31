import { useState } from "react";
import App from "./App";

export function Wrapper() {
  const [numCliques, setNumCliques] = useState(0)

    return (
        <>
        <App name="Arthur" age={10} numCliques={numCliques} setNumCliques={setNumCliques}/>
        <App name="Arthur" age={10} numCliques={numCliques} setNumCliques={setNumCliques}/>
        </>
    )
}