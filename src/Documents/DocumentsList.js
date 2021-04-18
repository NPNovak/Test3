import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import DocumentsItem from "./DocumentsItem";
import {Button} from "@material-ui/core";
import SimpleModal from "../Modal/Modal";
import {observer} from "mobx-react";
import {showMessageStoreFunc} from "../stores/showMessageStore";
import {modalStoreFunc} from "../stores/modalStore";

const showMessageStore = showMessageStoreFunc();
const modalStore = modalStoreFunc();

const DocumentsList = observer((props) => {
    const styles = {
        div: {
            display: 'flex',
        },
        invisible: {
            display: 'none',
        },
        visible: {
            display: 'block'
        }
    }

    function uploadFile(files) {
        if(files[0].type === 'application/pdf' || files[0].type === 'image/jpg'){
            if(files[0].name){
                props.documentsStore.addDocuments(files[0]);
                showMessageStore.setShowMessage("success");
            }
        }else{
            showMessageStore.setShowMessage("failure");
        }
        setTimeout(() => showMessageStore.setShowMessage(""), 2000);
    }

    function clearFileList() {
        props.documentsStore.clearDocuments();
    }

    return (
        <React.Fragment>
            <SimpleModal modalStore={modalStore} documentsStore={props.documentsStore} />
            <Typography variant="h6" className={props.classes.title}>
                Список документов
            </Typography>
            <div style={styles.div}>
                <input
                    accept="image/jpg,application/pdf"
                    style={styles.invisible}
                    id="contained-button-file"
                    type="file"
                    onChange={(event) => uploadFile(event.target.files)}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Загрузить документ
                    </Button>
                </label>
                <Button variant="contained" color="secondary" onClick={clearFileList}>
                    Очистить список
                </Button>
            </div>

            <div style={showMessageStore.showMessage === 'success' ? styles.visible : styles.invisible}> Файл успешно добавлен</div>
            <div style={showMessageStore.showMessage === 'failure' ? styles.visible : styles.invisible}> Можно загружать только файлы формата: pdf,jpg!</div>

            <div className={props.classes.demo}>
                <List>
                    {props.documentsStore.documents.map((document) => {
                        return <DocumentsItem document={document} key={document.id} modalStore={modalStore}/>;
                    })}
                </List>
            </div>
        </React.Fragment>
    );
});

export default DocumentsList;
