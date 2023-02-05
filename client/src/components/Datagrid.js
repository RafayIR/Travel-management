import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'TravelBy',
        headerName: 'Traveling by',
        editable: true,
        width: 160,
        editable: true,
    },
];

var rows = [
    { id: 1, lastName: 'Ali', firstName: 'Faraz', age: 35, TravelBy: 'By plane' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, TravelBy: 'By Train' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, TravelBy: 'By Bike' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, TravelBy: 'By Bus' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 61, TravelBy: 'By plane' },
    { id: 6, lastName: 'Ali', firstName: 'Ahmed', age: 40, TravelBy: 'By Train' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, TravelBy: 'By Car' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, TravelBy: 'By ship' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, TravelBy: 'By Car' },
];


function Datagrid() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {


        axios.get('http://localhost:8080/users/dashboard', { withCredentials: true }).then((resp) => {
            setData(resp.data)
        }).catch((error) => {
            console.log(error)
            console.log("unauthenticated")
            navigate('/')
        })
    }, [])



    return (
        <>
            <Box sx={{ width: '80%', mr: 'auto', ml: 'auto', mt: 4 }}>
                <h3 >{query.get('email')}</h3>
            </Box>

            <Box sx={{ width: '80%', mr: 'auto', ml: 'auto', mt: 4 }}>
                <h3> Travel details</h3>
            </Box>
            <Box sx={{ height: 400, width: '80%', mr: 'auto', ml: 'auto', mt: 4 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </>
    )
}

export default Datagrid