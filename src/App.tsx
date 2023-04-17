import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/SidebarNavigation/SidebarNavigation";
import TopSnackBar from "./components/TopSnackBar/TopSnackBar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <TopSnackBar />
        <div className="mainHolder">
          <div className="inner">
            <Header />
            <div className="contentHolder">
              <div className="sidebarNavigation">
                <Sidebar />
              </div>
              <div className="mainContent">
                <Routes>
                  <Route path="/" element={<Home cath="home" />} />
                  <Route path="/home" element={<Home cath="home" />} />
                  <Route path="/general" element={<Home cath="general" />} />
                  <Route path="/business" element={<Home cath="business" />} />
                  <Route path="/health" element={<Home cath="health" />} />
                  <Route path="/science" element={<Home cath="science" />} />
                  <Route path="/sports" element={<Home cath="sports" />} />
                  <Route
                    path="/favorites"
                    element={<Home cath="favorites" />}
                  />
                  <Route
                    path="/technology"
                    element={<Home cath="technology" />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </SearchProvider>
    </>
  );
}

export default App;
