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
import { IApiResponse } from "../interfaces/ApiResponse";

const API_URL = "https://reqres.in/api/products";
const ITEMS_PER_PAGE = 5;

const CustomTable = () => {
  const [page, setPage] = useUrl("page", "1");
  const { data, error } = useSWR<IApiResponse>(
    `${API_URL}?per_page=${ITEMS_PER_PAGE}&page=${page}`,
    fetcher
  );

  return (
    <>
      {data && (
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
              {data.data.map((item) => {
                return (
                  <TableRow
                    sx={{
                      backgroundColor: item.color,
                    }}
                    key={item.id}
                  >
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.year}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={data.total}
                  page={data.page - 1}
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
      )}
    </>
  );
};

export { CustomTable };
