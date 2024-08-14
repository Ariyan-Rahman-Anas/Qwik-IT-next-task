import axios from "axios";

const BASE_URL = "http://localhost:5001";

// Function to fetch data
export const getData = async (endPoint) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endPoint}`, { withCredentials: true });
        return response?.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

// Function to post data
export const postData = async (endPoint, data) => {
    try {
        const response = await axios.post(`${BASE_URL}/${endPoint}`, data, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        console.log(response?.data, "post successful");
        return response?.data;
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
};

// Function to delete data
export const deleteData = async (endPoint, id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${endPoint}/${id}`, { withCredentials: true });
        return response?.data; // Return response data if needed
    } catch (error) {
        console.error("Error deleting data:", error);
        throw error;
    }
};