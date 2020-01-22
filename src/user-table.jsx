import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const UserTable = ({users}) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell >Fullname</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user) =>
                            (<TableRow key={user.username}>
                                <TableCell component="th" scope="row">
                                    {user.username}
                                </TableCell>
                                <TableCell>{user.fullname}</TableCell>
                            </TableRow>)
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;