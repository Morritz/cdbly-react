import { TextField } from "@mui/material";
import { useTableStore } from "../stores/tableStore";

const FilterIdInput = () => {
  const [idInput, setIdInput] = useTableStore((state) => [
    state.idInput,
    state.setIdInput,
  ]);
  return (
    <TextField
      label="Search by id"
      value={idInput}
      inputProps={{
        inputMode: "numeric",
        pattern: "^$|^[0-9]*$",
        min: 0,
        onInput: (e) => {
          if (e.currentTarget.validity.valid)
            setIdInput(Number(e.currentTarget.value));
        },
      }}
      fullWidth
      margin="dense"
    />
  );
};

export { FilterIdInput };
