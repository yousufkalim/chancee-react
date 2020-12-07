import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    minWidth: 700,
  },
  table: {
    '& .MuiTableHead-root': {
      overflow: 'hidden',
      borderRadius: 10,
      '& .MuiTableRow-root': {
        backgroundColor: '#4DA1FF',
        '& .MuiTableCell-head': {
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          color: theme.palette.common.white,
        },
      },
    },
    '& .MuiTableBody-root': {
      overflow: 'hidden',
      borderRadius: 10,
      '& .MuiTableRow-root': {
        backgroundColor: '#FFF',
        '& .MuiTableCell-body': {
          fontSize: 16,
          fontWeight: 600,
          whiteSpace: 'nowrap',
        },
      },
    },
  },
}));

const Search = (props) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {props.headers.map((i) => (
              <TableCell key={i} align="center">
                {i}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.values.length === 0 ? (
            <TableRow>
              <TableCell align="center" colspan={props.headers.length}>
                We come up empty!
              </TableCell>
            </TableRow>
          ) : (
            props.values.map((row) => (
              <TableRow key={row}>
                {row.map((i) => (
                  <TableCell key={i} align="center">
                    {i}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Search;
