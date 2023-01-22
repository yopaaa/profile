import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Root from "./components/Root";

function App() {
  return (
     <BrowserRouter>
     <Routes>
       <Route path="/" element={ <Root />} />
       <Route path="*" element={ <Error />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
