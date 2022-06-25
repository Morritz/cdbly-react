import { Stack, TextField } from "@mui/material";
import { useQuery } from "../stores/queryStore";

const FilterIdInput = () => {
  const { values, replaceState } = useQuery();
  return (
    <Stack alignItems="center">
      <TextField
        label="Search by id"
        value={values.id || ""}
        inputProps={{
          inputMode: "numeric",
          pattern: "^$|^[0-9]*$",
          min: 0,
          onInput: (e) => {
            if (e.currentTarget.validity.valid)
              replaceState(
                (values) => void (values.id = Number(e.currentTarget.value))
              );
          },
        }}
        sx={{
          marginY: 2,
          width: "95%",
        }}
      />
    </Stack>
  );
};

export { FilterIdInput };
