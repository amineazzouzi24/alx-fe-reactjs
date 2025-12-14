import { createRoot } from "react-dom/client";
import App from "./App.jsx";  // التأكد من استيراد App.jsx بشكل صحيح
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
