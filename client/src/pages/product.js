import { useState } from "react";
import storage from "./firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { TextField, TextareaAutosize, Button, CircularProgress } from "@mui/material";
import { createProduct } from "../apis/product.api.js";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import BasicTable from "../components/Table/product.table.js";
import ProductTable from "../components/Table/product.table.js";

function Product() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedDate, handleDateChange] = useState(new Date());
    const [preview, setPreview] = useState('');
    const [newId, setNewId] = useState();

    const resetForm = () => {
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setFile("");
        setPercent(0);
        setIsLoading(false);
        handleDateChange(new Date());
        setPreview("");
    }



    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !description || !price || !quantity || !file) {
            alert("Please fill all the fields and upload an image first!");
            return;
        }

        setIsLoading(true);

        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => {
                console.log(err);
                setIsLoading(false);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                    const productData = {
                        name,
                        description,
                        price,
                        quantity,
                        image: url,
                        Date: selectedDate,
                    };
                    console.log(productData);
                    try {
                        const res = await createProduct(productData)
                        setIsLoading(false);
                        console.log(res.data.data);
                        alert(res.data.message)
                        setNewId(res.data.data._id)
                        resetForm();
                    } catch (error) {
                        console.log(error);
                    }
                });
            }
        );
    };


    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <TextareaAutosize
                    id="description"
                    label="Description"
                    placeholder="Description"
                    maxRows="10"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <TextField
                    id="price"
                    label="Price"
                    type="number"
                    variant="outlined"
                    margin="normal"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                <TextField
                    id="quantity"
                    label="Quantity"
                    type="number"
                    variant="outlined"
                    margin="normal"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="quantity"
                    label="Quantity"
                    value={selectedDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                    required
                />
                <input
                    type="file"
                    id="file"
                    onChange={handleImageChange}
                    accept="/image/*"
                    required
                />

                {preview && <img src={preview} alt="Preview" style={{ maxWidth: "200px", marginTop: "10px" }} />}

                <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
                    Add Product
                </Button>
                <p>{percent} "% done"</p>
                {isLoading && <CircularProgress size={24} />}
            </form>

            <ProductTable id={newId} />

        </div>
    );
};


export default Product;
