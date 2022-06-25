import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { TableHeadCell } from "./TableHeadCell";

import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { useUrl } from "../utils/hooks/useUrl";

const API_URL = "https://reqres.in/api/products";
const ITEMS_PER_PAGE = 5;

const CustomTable = () => {
  const [page, setPage] = useUrl("page", "0");
  const { data, error } = useSWR(
    `${API_URL}?per_page=${ITEMS_PER_PAGE}&page=${page}`,
    fetcher
  );
  console.log(data);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>id</TableHeadCell>
            <TableHeadCell>name</TableHeadCell>
            <TableHeadCell>year</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>name</TableCell>
            <TableCell>year</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={0}
              page={0}
              onPageChange={() => {
                return;
              }}
              rowsPerPageOptions={[-1]}
              rowsPerPage={5}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export { CustomTable };
