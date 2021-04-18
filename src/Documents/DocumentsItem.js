import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description';
import DeleteIcon from '@material-ui/icons/Delete';

export default function DocumentsItem(props) {
    const handleOpen = () => {
        props.modalStore.setOpenModal({
            open: true,
            fileName: props.document.fileName,
            fileId: props.document.id,
        });
    };

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <DescriptionIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={props.document.fileName}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={handleOpen}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
