import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import { Main } from "./main";
import { Search } from "./search";
import { Navbar } from "./navbar";
import { Channel } from "./channel";
import { VideoDetails } from "./video-details";

export const App = () => {
    return (
        <Box>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/channel/:id" element={<Channel />} />
                <Route path="/video/:id" element={<VideoDetails />} />
                <Route path="/search/:id" element={<Search />} />
            </Routes>
        </Box>
    );
};
