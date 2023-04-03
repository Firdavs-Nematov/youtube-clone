import { IconButton, Paper } from "@mui/material";
import { color } from "../constants/color";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchPanel = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (value) {
            navigate(`/search/${value}`);
            setValue("");
        }
    };

    return (
        <Paper
            component={"form"}
            onSubmit={submitHandler}
            sx={{
                width: { xs: "200px", sm: "280px", md: "350px" },
                border: `1px solid ${color.secondary}`,
                px: 2,
                py: 1,
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <input
                type="search"
                placeholder="Search..."
                className="search-input"
                style={{ width: "90%" }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <IconButton type="submit">
                <Search />
            </IconButton>
        </Paper>
    );
};
