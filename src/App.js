import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { Feed } from "@mui/icons-material";
import ChannelDetail from "./components/ChannelDetail";
import VideoDetail from "./components/VideoDetail";
import SearchFeed from "./components/SearchFeed";
import React from "react";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backGroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
