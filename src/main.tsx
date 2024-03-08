import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ProjectWrapper } from "./ProjectWrapper.tsx";
import { Hangman } from "./projects/hangman/Hangman.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route
          path="project-tracker"
          element={
            <ProjectWrapper
              name="Project 1"
              component={<div>Test project 1</div>}
            />
          }
        />
        <Route
          path="hangman"
          element={<ProjectWrapper name="Hangman" component={<Hangman />} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
