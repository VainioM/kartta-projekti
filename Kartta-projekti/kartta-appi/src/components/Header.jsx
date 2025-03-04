import React from "react";
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box, makeStyles } from '@material-ui/core'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import '../styles/Header.js'


const Header = () => {
    return(
        <AppBar position="static">
            <Toolbar className={makeStyles.toolbar}>
                <Typography variant="h5" className={makeStyles.title}>
                    Reissukumppani-sovellus
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={makeStyles.title}>
                        Tutustu uusiin paikkoihin
                    </Typography>
                    <Autocomplete>
                        <div className={makeStyles.search}>
                            <div className={makeStyles.SearchIcon}>
                                <AccessAlarmIcon />
                            </div>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;