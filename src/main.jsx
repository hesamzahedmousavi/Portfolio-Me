import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

if (import.meta.env.MODE === "development") {
  import("react-dom").then((ReactDOM) => {
    ReactDOM.__REACT_DEVTOOLS_GLOBAL_HOOK__?.inject?.({});
  });
}

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
