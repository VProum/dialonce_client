import axios from "axios";

const service = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

function errorHandler(error) {
    if (error.response.data) {
        console.log(error.response && error.response.data);
        throw error;
    }
    throw error;
}

export default {
    service,

    sendUrl(url) {
        return service
            .post("/api/longurl", url)
            .then((res) => res.data)
            .catch(errorHandler);
    },

    getUrl(url) {
        return service
            .get("/api/shorturl/" + url)
            .then((res) => res.data)
            .catch(errorHandler);
    },
};