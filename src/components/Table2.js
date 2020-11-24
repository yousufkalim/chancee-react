import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#4DA1FF',
    color: theme.palette.common.white,
    whiteSpace: 'nowrap',
  },
  body: {
    fontSize: 14,
    whiteSpace: 'nowrap',
    backgroundColor: '#FFF',
  },
}))(TableCell);

const Search = (props) => {
  const classes = useStyles();

  return (
    <TableContainer stickyHeader className={classes.table}>
      <Table>
        <TableHead>
          <TableRow>
            {props.headers.map((i) => (
              <StyledTableCell key={i} align="center">
                {i}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.values.map((row) => (
            <TableRow key={row}>
              {row.map((i) => (
                <StyledTableCell key={i} align="center">
                  {i}
                </StyledTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Search;
