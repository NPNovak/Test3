import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    cell: {
        fontWeight: 'bold',
        cursor: 'pointer'
    }
});

export default function Commentary(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.cell}>Почта</TableCell>
                            <TableCell className={classes.cell}>Сообщение</TableCell>
                            <TableCell className={classes.cell}>Страна</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.commentsStore.comments.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell>{row.message}</TableCell>
                                <TableCell>{row.country}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}
