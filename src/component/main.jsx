import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { color } from "../constants/color";
import { Category } from "./category";
import { ApiService } from "../service/api.servise";
import { Videos } from "./videos";

export const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);
    const renameCategory = (category) => setSelectedCategory(category);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(
                    `search?part=snippet&q=${selectedCategory}`
                );
                setVideos(data.items);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [selectedCategory]);

    return (
        <Stack>
            <Category
                renameCategory={renameCategory}
                selectedCategory={selectedCategory}
            />
            <Box>
                <Container sx={{ py: 2 }}>
                    <Typography sx={{ fontSize: 35 }} variant="p">
                        <span style={{ fontWeight: "bolder" }}>
                            {selectedCategory}
                        </span>{" "}
                        <span style={{ color: color.secondary }}>videos</span>
                    </Typography>
                    <Videos videos={videos} />
                </Container>
            </Box>
        </Stack>
    );
};
