import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// File import
import "./App.css";

import Home from '../src/pages/Home'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/blog/*" element={<BlogApp />} /> */}
                    {/* <Route path="/users/*" element={<UserApp />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
