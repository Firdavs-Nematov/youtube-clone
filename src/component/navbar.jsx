import { Stack } from "@mui/material";
import { logo } from "../constants";
import { SearchPanel } from "./search-panel";
import { Link } from "react-router-dom";
import { color } from "../constants/color";

export const Navbar = () => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={2}
            sx={{
                position: "sticky",
                top: 0,
                zIndex: 999,
                background: color.primary,
            }}
        >
            <Link to={"/"}>
                <img src={logo} alt="logo" height={50} />
            </Link>
            <SearchPanel />
        </Stack>
    );
};
