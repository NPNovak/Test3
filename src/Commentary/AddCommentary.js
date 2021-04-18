import React from 'react';
import {Button, MenuItem, Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useHistory} from "react-router-dom";
import { errorStoreFunc} from "../stores/errorStore";
import {countryStoreFunc} from "../stores/countryStore";
import {emailStoreFunc} from "../stores/emailStore";
import {messageStoreFunc} from "../stores/messageStore";
import { observer } from 'mobx-react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const countries = [
    {
        value: 'Russia',
        label: 'Russia',
    },
    {
        value: 'USA',
        label: 'USA',
    },
];

const errorsStore = errorStoreFunc();
const countryStore = countryStoreFunc();
const emailStore = emailStoreFunc(errorsStore);
const messageStore = messageStoreFunc();

const AddCommentary = observer((props) => {
    const classes = useStyles();
    let history = useHistory();

    function submitForm(event) {
        event.preventDefault();
        props.commentsStore.setComments(emailStore.email,messageStore.message,countryStore.country);
        history.push("/commentary");
    }

    return (
        <Paper elevation={3}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={submitForm}>
                <TextField
                    id="standard-basic"
                    label="E-mail"
                    error={errorsStore.error ? true : false}
                    helperText={errorsStore.error ? 'Заполните поле' : ' '}
                    value={emailStore.email}
                    onChange={(event) => emailStore.handleEmailChange(event)}
                />
                <TextField
                    id="standard-textarea"
                    label="Сообщение"
                    placeholder="Placeholder"
                    multiline
                    value={messageStore.message}
                    onChange={(event) => messageStore.handleMessageChange(event)}
                />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Укажите свою страну"
                    value={countryStore.country}
                    onChange={(event) => countryStore.handleCountryChange(event)}
                >
                    {countries.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Button variant="contained" color="primary"  type="submit" disabled={errorsStore.error ? true : false}>
                    Добавить
                </Button>
            </form>
        </Paper>
    );
});

export default AddCommentary;
