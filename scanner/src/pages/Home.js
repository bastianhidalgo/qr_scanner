import { Button, Typography} from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiQrcodeScan } from '@mdi/js';
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>

            <Typography style={{margin:30}} variant="h2">
            Scanner React QR Code
            </Typography>
                    <Link to="/qr_scanner">
                    <Button variant="contained" size="sm" color="primary">
                        <Icon
                        style={{padding:10}}
                        path={mdiQrcodeScan}
                        title="QR Scanner"
                        size={10}
                        color="white"
                        />
                    </Button>
                    </Link>
        </div>
    );
    }
    export default Home;