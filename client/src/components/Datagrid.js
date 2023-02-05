import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { columns, rows } from './data'

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
            navigate('/')
        })
    }, [])


    return (
        <>
            <Box sx={{ width: '80%', mr: 'auto', ml: 'auto', mt: 4 }}>
                <h2 >{query.get('email')}</h2>
            </Box>

            <Box sx={{ width: '80%', mr: 'auto', ml: 'auto', mt: 4 }}>
                <h3> Travel details</h3>
            </Box>

            <Box sx={{ width: '80%', display: 'flex', flexWrap: 'wrap', mr: 'auto', ml: 'auto', mt: 4 }}>
                {
                    data.map((d, i) => {
                        return (
                            <Card key={d._id} sx={{ width: 275, mb: 5, mr: 2 }} >
                                <CardContent >
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {d.name}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {d.travelMeans}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }
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