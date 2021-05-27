import React from "react";
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2)
            },
        },
    }),
);

const Paginator = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={10} color="primary" />
        </div>
    );
}

export default Paginator



