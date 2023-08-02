// import React from 'react'
// import Genratedata from './component/genrateData'
// import { BrowserRouter as Router, Route, Link, Routes, Outlet, createBrowserRouter } from 'react-router-dom';
// import Challan from './component/challan';

//   const router  = createBrowserRouter([
//     {path:'/' , element:<Genratedata/>},
//     {path:'/challan' , element:<Challan/>}
//   ])


// export default router

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Genratedata from './component/genrateData'
import Challan from './component/challan';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Genratedata />} />
        <Route path="/challan" element={<Challan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;