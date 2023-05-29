// 
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(firstName, lastName, level, plan, role, email, country, phone) {
  return { firstName, lastName, level, plan, role, email, country, phone };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ListOfUsers({ allUsers }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className='bg-sky-300'>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="center">Apellido</TableCell>
            <TableCell align="center">Nivel</TableCell>
            <TableCell align="center">Plan</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((row) => (
            <TableRow
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.level}</TableCell>
              <TableCell align="center">{row.plan}</TableCell>
              <TableCell align="center">{row.role}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.country}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}