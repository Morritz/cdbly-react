import { TextField } from "@mui/material";

const FilterIdInput = () => {
  return (
    <TextField
      placeholder="Search by id"
      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      sx={{ width: "100%", padding: 2 }}
    />
  );
};

export { FilterIdInput };
