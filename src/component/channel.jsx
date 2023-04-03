import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../service/api.servise";
import { ChannelCard } from "./channel-card";
import { Videos } from "./videos";

export const Channel = () => {
    const [channelDetail, setChannelDetail] = useState([]);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    console.log(videos);
    useEffect(() => {
        const getData = async () => {
            try {
                const dataChannelVideo = await ApiService.fetching(
                    `channels?part=snippet&id=${id}`
                );
                console.log(dataChannelVideo);
                setChannelDetail(dataChannelVideo.items[0]);
                const dataVideos = await ApiService.fetching(
                    `search?channelId=${id}&part=snippet%2Cid&order=date`
                );
                setVideos(dataVideos?.items);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [id]);

    return (
        <Box minHeight={"90vh"} mt={"1vh"}>
            <Box>
                <Box
                    width={"100%"}
                    height={"200px"}
                    sx={{
                        backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <ChannelCard video={channelDetail} marginTop={"-280px"} />
            </Box>
            <Box>
                <Videos videos={videos} />
            </Box>
        </Box>
    );
};
