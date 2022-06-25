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
import { useEffect } from "react";
import { InfoCard } from "./InfoCard";
import { FilterIdInput } from "./FilterIdInput";

const API_URL = "https://reqres.in/api/products";
const ITEMS_PER_PAGE = 5;

const CustomTable = () => {
  const [page, setPage] = useUrl("page", 1);
  const { data, error } = useSWR<IApiResponse>(
    `${API_URL}?per_page=${ITEMS_PER_PAGE}&page=${page}`,
    fetcher
  );

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (data) {
      const totalPages = data.total_pages;
      if (page > totalPages) {
        setPage(totalPages);
      }
    }
  }, [data]);

  if (data)
    return (
      <TableContainer component={Paper}>
        <FilterIdInput />
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
                onPageChange={handlePageChange}
                rowsPerPageOptions={[-1]}
                rowsPerPage={5}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    );

  if (error) return <InfoCard />;
};

export { CustomTable };
