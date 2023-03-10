import React, { useState} from 'react'
import {Button,Fab, TextareaAutosize,} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
const { getRut } = require('./util');


function QRscanner() {

    const [qrscan, setQrscan] = useState('QR no encontrado');
    const handleScan = data => {
        if (data) {
            setQrscan(getRut(data))
            console.log(getRut(data));

        }
    }
    const handleError = err => {
    console.error(err)
    }

    
return (
    <div>
            <Link to="/">
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
            </Link>
            <span>QR Scanner</span>
            <center>
            <div style={{marginTop:30}}>
                <QrScan
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
</div>
            </center>


            <TextareaAutosize
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                rowsMax={4}
                defaultValue={qrscan}
                value= {qrscan}
                />
        <Button href={qrscan} variant="contained" size="sm" color="primary" style={{marginBottom:100, marginLeft:50}}>
        ir al link </Button>

</div>
);


        }

export default QRscanner;
