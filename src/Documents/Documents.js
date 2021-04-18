import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DocumentsList from "./DocumentsList";
import {documentsStoreFunc} from "../stores/documentStore";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

const styles = {
    wrapper: {
        margin: '0 auto',
    }
}

const documentsStore = documentsStoreFunc();

export default function Documents() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2} >
                <Grid item style={styles.wrapper}>
                    <DocumentsList classes={classes} documentsStore={documentsStore}/>
                </Grid>
            </Grid>
        </div>
    );
}
