import {
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
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
import { IApiResponseById } from "../interfaces/ApiResponseById";
import { ensureArray } from "../utils/ensureArray";
import { useQuery } from "../stores/queryStore";

const API_URL = "https://reqres.in/api/products";
const ITEMS_PER_PAGE = 5;

const CustomTable = () => {
  const { values, replaceState } = useQuery();
  const { data, error } =
    values.id != 0
      ? useSWR<IApiResponseById>(`${API_URL}?id=${values.id}`, fetcher)
      : useSWR<IApiResponse>(
          `${API_URL}?per_page=${ITEMS_PER_PAGE}&page=${values.page}`,
          fetcher
        );

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    replaceState((values) => void (values.page = page + 1));
  };

  useEffect(() => {
    if (data && "total_pages" in data) {
      const totalPages = data.total_pages;
      if (values.page > totalPages) {
        replaceState((values) => void (values.page = totalPages));
      }
    }
  }, [data]);

  const renderTableBody = () => {
    if (data)
      if ("data" in data) {
        return ensureArray(data.data).map((item) => {
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
        });
      } else {
        return (
          <TableRow>
            <TableCell colSpan={3}>
              <InfoCard message={"There are no results for your query."} />
            </TableCell>
          </TableRow>
        );
      }
    if (error)
      return (
        <TableRow>
          <TableCell colSpan={3}>
            <InfoCard message={"Failed to fetch data."} />
          </TableCell>
        </TableRow>
      );
  };

  const renderTableFooter = () => {
    if (data && "page" in data)
      return (
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
      );
  };

  if (!data)
    return (
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
    );
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>id</TableHeadCell>
          <TableHeadCell>name</TableHeadCell>
          <TableHeadCell>year</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>{renderTableBody()}</TableBody>
      {renderTableFooter()}
    </Table>
  );
};

export { CustomTable };
