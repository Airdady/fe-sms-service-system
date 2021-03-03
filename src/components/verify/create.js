import React, { useMemo } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
var uuid = require("uuid");
const currencies = [
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
];

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [currency, setCurrency] = React.useState("4");
  const [token, setToken] = React.useState("");

  useMemo(() => {
    setToken(`VM-${uuid.v4().replace('-','').replace('-','')}`)
  },[]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleClickOpen}
      >
        ADD NEW KEYS
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Profile</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount">Profile Name</InputLabel>
            <Input id="standard-adornment-amount" />
          </FormControl>
          <TextField
            fullWidth
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue={token}
            style={{ marginTop: "1rem" }}
          />
          <TextField
            id="standard-select-currency"
            select
            fullWidth
            label="Select"
            value={currency}
            helperText="the length of the code"
            style={{ marginTop: "1rem" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            SAVE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
