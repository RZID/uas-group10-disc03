import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./assets/css/index.css";
import classNames from "classnames";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      className={classNames(
        "bg-gray-900",
        "bg-size-[100px_100px]",
        "bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]",
        "flex",
        "flex-col"
      )}
    >
      <App />
    </div>
  </StrictMode>
);
