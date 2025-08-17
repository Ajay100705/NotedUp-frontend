// // src/main.tsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import { NotesProvider } from "./context/NotesContext";
// import { UserProvider } from "./context/UserContext";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <UserProvider>
//       <NotesProvider>
//         <App />
//       </NotesProvider>
//     </UserProvider>
//   </React.StrictMode>
// );

// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
