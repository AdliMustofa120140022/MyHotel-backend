import axiosInstance from "../api/interceptor";

const loginAuth = async (params) => {
    try {
        const { username, password } = params;
        const result = await axiosInstance.post(`/api/login`, { username, password });
        if (result.status !== 200) {
            return false;
        }
        localStorage.setItem("id", result.data.id);
        return result.data;
    } catch (error) {
        return false;
    }
};

const serviceAuth = {
    loginAuth,
};

export default serviceAuth;
