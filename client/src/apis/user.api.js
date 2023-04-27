import axios from "axios";

export const registerUser = async (newUser) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_SERVER}/user/register`, newUser)
        return result
    } catch (error) {
        console.log(error);
    }
}
export const loginUser = async (user) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_SERVER}/user/login`, user)
        return result
    } catch (error) {
        console.log(error);
    }
}

export const getUserToken = () => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
        return { 'Authorization': `Bearer ${userToken}` };
    } else {
        return {};
    }
};