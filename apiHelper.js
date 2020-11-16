import axios from "axios";

export default function APIHelper(request) {
    const options = {
        method: request.method,
        headers: request.headers,
        data: request.data,
        url: request.url,
    };
    return axios(options);
}
