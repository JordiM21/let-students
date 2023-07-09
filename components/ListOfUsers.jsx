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

function createData(firstName, role, lastName, level, plan, asignedTutor, email, country, phone) {
  return { firstName, lastName, role, level, plan, asignedTutor, email, country, phone };
}

export default function ListOfUsers({ allUsers }) {

  const router = useRouter()
  return (
    <TableContainer sx={{ maxHeight: 360 }} component={Paper}>
      <Table sx={{ height: "100px" }} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell id='bluebg' >Nombre</TableCell>
            <TableCell id='bluebg' align="center">Apellido</TableCell>
            <TableCell id='bluebg' align="center">Role</TableCell>
            <TableCell id='bluebg' align="center">Nivel</TableCell>
            <TableCell id='bluebg' align="center">Plan</TableCell>
            <TableCell id='bluebg' align="center">asignedTutor</TableCell>
            <TableCell id='bluebg' align="center">Email</TableCell>
            <TableCell id='bluebg' align="center">Country</TableCell>
            <TableCell id='bluebg' align="center">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((row) => (
            <TableRow
              className={`hover:bg-white cursor-pointer ${row.role == "Admin" ? "bg-gray-400" : "bg-gray-200"}`}
              onClick={() => router.push(`StudentDetail/${row.id}`)}
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.role}</TableCell>
              <TableCell align="center">{row.level}</TableCell>
              <TableCell align="center">{row.plan}</TableCell>
              <TableCell align="center">{row.asignedTutor}</TableCell>
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