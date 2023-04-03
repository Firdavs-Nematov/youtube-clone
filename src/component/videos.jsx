import { Box, Stack } from "@mui/material";
import { VideoCard } from "./video-card";
import { ChannelCard } from "./channel-card";
import { Loader } from "./loader";

export const Videos = ({ videos }) => {
    if (!videos.length) return <Loader />;
    return (
        <Stack
            width={"100%"}
            direction={"row"}
            gap={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
        >
            {videos.map((item) => (
                <Box key={item.id.videoId}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard video={item} />}
                </Box>
            ))}
        </Stack>
    );
};
