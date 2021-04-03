import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { Grid, Box, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Api from "../../service";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .paypal-button-color-gold": {
      width: "100%",
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow:
        "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
      backgroundColor: "#e0e0e0",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Checkout = () => {
  const classes = useStyles();
  const [amount, setAmount] = useState(0);

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: amount,
            },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  function handleChange({ target: { value } }) {
    setAmount(value);
  }

  const handleApprove = (data) => {
    const newData = { amount, payerId: data.payerID, orderId: data.orderID };
    Api.capturePayment(newData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <Container
      className={classes.root}
      component="main"
      maxWidth="xs"
      style={{ height: "100%", marginTop: "5rem" }}
    >
      <Paper>
        <Box display="flex" flexDirection="column" p={5}>
          <Grid item xs={12}>
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </Grid>
          <Box mt={3}>
            <PayPalScriptProvider options={{ "client-id": "test" }}>
              <PayPalButtons
                createOrder={createOrder}
                onApprove={handleApprove}
                forceReRender={amount}
                disabled={amount < 1 ? true : false}
              />
            </PayPalScriptProvider>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Checkout;
