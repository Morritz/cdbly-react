import { Paper, TableContainer } from "@mui/material";
import { useQuery } from "../stores/queryStore";
import { CustomTable } from "./CustomTable";
import { FilterIdInput } from "./FilterIdInput";

const CustomTableWrapper = () => {
  return (
    <TableContainer component={Paper}>
      <FilterIdInput />
      <CustomTable />
    </TableContainer>
  );
};

export { CustomTableWrapper };
