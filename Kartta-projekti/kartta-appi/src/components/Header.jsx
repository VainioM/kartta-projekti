import React from "react";
import { Autocomplete, AutoComplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Header = () => {
    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Reissukumppani-sovellus
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Tutustu uusiin paikkoihin
                    </Typography>
                    <Autocomplete>
                        <div className={classes.search}>
                            <div className={classes.SearchIcon}>
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