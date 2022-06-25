import { TableCell, TableCellProps } from "@mui/material";

const TableHeadCell = (props: TableCellProps) => (
  <TableCell sx={{ fontWeight: "bold" }}>{props.children}</TableCell>
);

export { TableHeadCell };
