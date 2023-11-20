import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import List from "./components/list/List";
import Navigation from "./components/navigation/Navigation";
import Dz from "./dz";
export default function App() {
  
  return (
    <React.Fragment>
      <List />
      <Dz />
    </React.Fragment>
  );
}