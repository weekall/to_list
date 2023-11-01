import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import List from "../list/List.js";
import Create from "../create/Create.js";
import NavBar from "../navbar/NavBar.js";

function Navigation({data}){
    return(
      <>
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={<List data={data} />} />
                <Route path="/create" element={<Create/>} />
            </Routes>
        </BrowserRouter>
      </>
    )
}
export default Navigation;