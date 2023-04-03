import {
    Avatar,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from "@mui/material";
import { color } from "../constants/color";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const VideoCard = ({ video }) => {
    return (
        <Card
            sx={{
                width: { xs: "100%", sm: "360px", md: "320px" },
                boxShadow: "none",
                my: "5px",
            }}
        >
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{
                        width: { xs: "100%", sm: "360px", md: "320px" },
                        height: "180px",
                    }}
                />
            </Link>
            <CardContent
                sx={{
                    background: color.primary,
                    height: "200px",
                    position: "relative",
                }}
            >
                <>
                    <Typography my="5px" sx={{ opasity: 0.4 }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ opasity: 0.6 }}>
                        {video?.snippet?.description.slice(0, 80)}
                    </Typography>
                </>
                <Link to={`/channel/${video?.snippet?.channelId}`}>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        position={"absolute"}
                        gap={"5px"}
                        bottom={"10px"}
                    >
                        <Avatar src={video?.snippet?.thumbnails?.high?.url} />
                        <Typography variant="subtitle2" color={"gray"}>
                            {video?.snippet?.channelTitle}
                            <CheckCircle
                                sx={{
                                    fontSize: "12px",
                                    color: "gray",
                                    marginLeft: "10px",
                                }}
                            />
                        </Typography>
                    </Stack>
                </Link>
            </CardContent>
        </Card>
    );
};
