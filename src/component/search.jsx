import { useState, useEffect } from "react";
import { ApiService } from "../service/api.servise";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { color } from "../constants/color";
import { Videos } from "./videos";

export const Search = () => {
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(
                    `search?part=snippet&q=${id}`
                );
                setVideos(data.items);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [id]);

    return (
        <Box p={2} sx={{ height: "90vh" }}>
            <Container maxWidth={"90%"}>
                <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
                    Search results fro{" "}
                    <span style={{ color: color.secondary }}>{id}</span> videos
                </Typography>
                <Videos videos={videos} />
            </Container>
        </Box>
    );
};
