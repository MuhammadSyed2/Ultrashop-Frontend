import './profile.module.css'
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';








export default function Profile(){
    document.body.style.background = "white"
    const data = {
        columnDefs: [
            {headerName: "User Name", field: "user"},
            {headerName: "Email", field: "email"},
            {headerName: "Address", field: "address"}

        ],
        rowData: [
            {user: "Sobhani", email: "sobhani@gmail.com", address: 'Motijheel'},
            {user: "Anas", email: "anas@gmail.com", address: 'Kuril'},
            {user: "Mubin", email: "mubin@gmail.com", address: 'Mirpur'}
        ]
    }
    return(

        <div className="ag-theme-alpine"
        style={{
            height:'300px',
            width: '605px',
            justifyContent:'center',
            marginLeft:'30%',
            marginTop:'5%'
           
        }}>
            
        <AgGridReact
					columnDefs={data.columnDefs} 
					rowData={data.rowData}>
         </AgGridReact>
        </div>
    );
}