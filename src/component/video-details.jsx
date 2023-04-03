import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../service/api.servise";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import {
    CheckCircle,
    Comment,
    FavoriteOutlined,
    Tag,
    Visibility,
} from "@mui/icons-material";
import renderHTML from "react-render-html";
import { Loader } from "./loader";
import { Videos } from "./videos";

export const VideoDetails = () => {
    const { id } = useParams();
    const [videoDetails, setVideoDetails] = useState(null);
    const [relatedVideo, setRelatedVideo] = useState([]);

    console.log(videoDetails);
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(
                    `videos?part=snippet,statistics&id=${id}`
                );
                const relatedData = await ApiService.fetching(
                    `search?part=snippet&relatedToVideoId=${id}&type=${id}`
                );
                setVideoDetails(data.items[0]);
                setRelatedVideo(relatedData.items);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [id]);

    if (!videoDetails?.snippet) return <Loader />;

    // const {
    //     snippet: {
    //         title,
    //         channelId,
    //         channelTitle,
    //         description,
    //         tags,
    //         thumbnails,
    //     },
    //     statistics: { viewCount, likeCount, commentCount },
    // } = videoDetails;

    return (
        <Box minHeight={"90vh"} mb={10} px={"10px"}>
            <Box
                display={"flex"}
                sx={{ flexDirection: { sm: "column", md: "row" } }}
            >
                <Box width={{ sm: "100%", md: "75%" }}>
                    <ReactPlayer
                        url={`https://www/youtube.com/watch?v=${id}`}
                        className="react-player"
                        controls
                    />
                    {videoDetails?.snippet?.tags
                        ?.slice(0, 5)
                        .map((item, idx) => (
                            <Chip
                                label={item}
                                key={idx}
                                sx={{
                                    marginTop: "10px",
                                    cursor: "pointer",
                                    ml: "10px",
                                }}
                                deleteIcon={<Tag />}
                                onDelete={() => {}}
                                variant="outlined"
                            />
                        ))}
                    <Typography variant="h5" sx={{ margin: "10px" }}>
                        {" "}
                        {videoDetails?.snippet?.title}
                    </Typography>
                    <Typography variant="p" sx={{ margin: "0 0 5px 5px" }}>
                        {renderHTML(videoDetails?.snippet?.description)}
                    </Typography>
                    <Stack
                        direction={"row"}
                        gap="20px"
                        alignItems={"center"}
                        my={"25px"}
                    >
                        <Stack direction={"row"} alignItems={"center"}>
                            <Visibility />
                            {parseInt(
                                videoDetails?.statistics?.viewCount
                            ).toLocaleString()}{" "}
                            view
                        </Stack>
                        <Stack direction={"row"} alignItems={"center"}>
                            <FavoriteOutlined />
                            {parseInt(
                                videoDetails?.statistics?.likeCount
                            ).toLocaleString()}{" "}
                            likes
                        </Stack>
                        <Stack direction={"row"} alignItems={"center"}>
                            <Comment />
                            {parseInt(
                                videoDetails?.statistics?.commentCount
                            ).toLocaleString()}{" "}
                            comment
                        </Stack>
                    </Stack>
                    <Link
                        to={`/channel/${videoDetails?.snippet?.channelId}`}
                        style={{ textDecoration: "none" }}
                    >
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"20px"}
                        >
                            <Avatar
                                src={
                                    videoDetails?.snippet?.thumbnails?.high?.url
                                }
                                alt={videoDetails?.snippet?.channelTitle}
                            />
                            <Typography variant="subtitle2" color={"grey"}>
                                {" "}
                                {videoDetails?.snippet?.channelTitle}
                            </Typography>
                            <CheckCircle fontSize="12px" color={"grey"} />
                        </Stack>
                    </Link>
                </Box>
                <Box
                    width={{
                        sm: "100%",
                        md: "25%",
                        overflowY: "scroll",
                        overflowX: "none",
                    }}
                    maxHeight={"100vh"}
                    px={2}
                    alignItems={"center"}
                >
                    <Videos videos={relatedVideo} />
                </Box>
            </Box>
        </Box>
    );
};
