import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";
import { TableHeadCell } from "./TableHeadCell";

const CustomTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableHeadCell>id</TableHeadCell>
          <TableHeadCell>name</TableHeadCell>
          <TableHeadCell>year</TableHeadCell>
        </TableHead>
        <TableBody>
          <TableCell>id</TableCell>
          <TableCell>name</TableCell>
          <TableCell>year</TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { CustomTable };
