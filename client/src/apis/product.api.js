import axios from "axios";
import { getUserToken } from "./user.api";

export const createProduct = async (newProduct) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_SERVER}/product/create`, newProduct,
            {
                headers: {
                    ...getUserToken()
                }
            })
        return result
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (id, updatedData) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_SERVER}/product/update/${id}`, updatedData,
            {
                headers: {
                    ...getUserToken()
                }
            })
        return result
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (id) => {
    try {
        const result = await axios.delete(`${process.env.REACT_APP_SERVER}/product/delete/${id}`,
            {
                headers: {
                    ...getUserToken()
                }
            })
        return result
    } catch (error) {
        console.log(error);
    }
}

export const getProduct = async (id) => {
    try {
        const result = await axios.get(`${process.env.REACT_APP_SERVER}/product/${id}`,
            {
                headers: {
                    ...getUserToken()
                }
            })
        return result
    } catch (error) {
        console.log(error);
    }
}

export const getMyProducts = async () => {
    try {
        const result = await axios.get(`${process.env.REACT_APP_SERVER}/product/get-my-all`,
            {
                headers: {
                    ...getUserToken()
                }
            })
        return result
    } catch (error) {
        console.log(error);
    }
}

export const getAllProducts = async () => {
    try {
        const result = await axios.get(`${process.env.REACT_APP_SERVER}/product/get-all`)
        return result
    } catch (error) {
        console.log(error);
    }
}
