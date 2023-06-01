// 
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';

function createData(firstName, lastName, level, plan, role, email, country, phone) {
  return { firstName, lastName, level, plan, role, email, country, phone };
}

export default function ListOfUsers({ allUsers }) {

  const router = useRouter()
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
              className='hover:bg-gray-400 cursor-pointer'
              onClick={() => router.push(`StudentDetail/${row.id}`)}
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