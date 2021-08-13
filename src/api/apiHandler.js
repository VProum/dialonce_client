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
            .post("/api/saveurl", url)
            .then((res) => res.data)
            .catch(errorHandler);
    },

    getUrls() {
        return service
            .get("/api/url")
            .then((res) => res.data)
            .catch(errorHandler);
    },

    deleteUrl(id) {
        return service
            .delete("/api/url/" + id)
            .then((res) => res.data)
            .catch(errorHandler);
    },
};