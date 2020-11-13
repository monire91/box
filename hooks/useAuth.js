import useSWR from "swr";
const baseUrl = "https://api2.subkhoone.com/";

export const useAuth = (path, fetcher) => {
    if (!path) {
        throw new Error("Path is required")
    }

    const url = baseUrl + path;

    const {data: data, error} = useSWR(url, fetcher);

    return {data, error}
};
