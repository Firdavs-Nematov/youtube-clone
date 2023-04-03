import { Stack } from "@mui/material";
import { category } from "../constants";
import { color } from "../constants/color";

export const Category = ({ renameCategory, selectedCategory }) => {
    return (
        <Stack sx={{ height: "auto", overflowX: "scroll" }} direction={"row"}>
            {category.map((item) => (
                <button
                    key={item.name}
                    className="category-btn"
                    onClick={() => renameCategory(item.name)}
                    style={{
                        background:
                            item.name === selectedCategory && color.secondary,
                        color:
                            item.name === selectedCategory &&
                            color.categoryTextColor,
                    }}
                >
                    {item.icon} {item.name}
                </button>
            ))}
        </Stack>
    );
};
