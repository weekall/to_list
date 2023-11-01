import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import List from "./components/list/List";
import Navigation from "./components/navigation/Navigation";

export default function App() {
  const [list, setList] = useState([
    {
      title: "walk with dog",
      description: "walk with dog",
      priority: "1"
    },
    {
      title: "walk with dog",
      description: "walk with dog",
      priority: "2"
    },
    {
      title: "walk with dog",
      description: "walk with dog",
      priority: "3"
    }
  ]);
  return (
    <React.Fragment>
      <Navigation data={list} />
      
    </React.Fragment>
  );
}