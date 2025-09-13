import React from "react";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}
