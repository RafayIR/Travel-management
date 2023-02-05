export const columns = [
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

export const rows = [
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