import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    url: BASE_URL,
    params: {
        maxResults: "50",
    },
    headers: {
        "X-RapidAPI-Key": "9245d62a1bmshf8a50fec844e7d5p1f6e09jsn116c92ebff0b",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export const ApiService = {
    async fetching(url) {
        const responce = await axios.get(`${BASE_URL}/${url}`, options);
        return responce.data;
    },
};
