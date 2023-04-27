import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteProduct, getMyProducts, updateProduct } from '../../apis/product.api';
import { Button } from '@mui/material';

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ProductTable(props) {
    const [products, setProducts] = useState([]);
    let newProductId = props.id

    useEffect(() => {
        getProducts()

    }, [newProductId])


    const getProducts = async () => {
        try {
            const res = await getMyProducts()
            setProducts(res.data.data)
        } catch (error) { }
    }


    const deleteMyProduct = async (id) => {
        try {
            const res = await deleteProduct(id)
            getProducts()
        } catch (error) { }
    }






    return (
        <div  >
            <TableContainer component={Paper} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Table style={{
                    backgroundColor: 'darkgray',
                    color: '#ffffff',
                    maxWidth: 100, maxHeight: 10
                }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">View</TableCell>
                            <TableCell align="left">Update</TableCell>
                            <TableCell align="left">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            < TableRow
                                key={row._id}
                            >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell component="th" scope="row">{row.price}</TableCell>
                                <TableCell component="th" scope="row">{row.quantity}</TableCell>
                                <TableCell component="th" scope="row">{row.Date}</TableCell>
                                <TableCell component="th" scope="row">
                                    <Button variant="contained" color="primary" type="submit">
                                        View
                                    </Button>
                                </TableCell>      <TableCell component="th" scope="row">
                                    <Button variant="contained" color="primary" type="submit">
                                        Update
                                    </Button>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <Button variant="contained" color="primary" type="submit" onClick={() => deleteMyProduct(row._id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
}
