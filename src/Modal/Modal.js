import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button} from "@material-ui/core";
import {observer} from "mobx-react";

function getModalStyle() {
    const top = 35;
    const left = 35;

    return {
        top: `${top}%`,
        left: `${left}%`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const SimpleModal = observer((props) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const handleClose = () => {
        props.modalStore.setOpenModal({
            open: false,
            fileName: '',
            fileId: 0,
        });
    };

    function deleteDocument(id) {
        props.documentsStore.filterDocuments(id);
        handleClose();
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Удаление документа</h2>
            <p id="simple-modal-description">
                Вы действительно хотите удалить {props.modalStore.modalState.fileName}?
            </p>
            <Button variant="contained" color="secondary" onClick={() => deleteDocument(props.modalStore.modalState.fileId)}>
                Да
            </Button>
            <Button variant="contained" color="primary" onClick={handleClose}>
                Нет
            </Button>
        </div>
    );

    return (
        <div>
            <Modal
                open={props.modalStore.modalState.open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
});

export default SimpleModal;
