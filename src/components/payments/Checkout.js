import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';
import {
  Grid,
  Box,
  Container,
  Paper,
  Card,
  CardContent,
  Typography,
  Divider,
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Api from '../../service';
import InputBase from '@material-ui/core/InputBase';
import Stripe from './stripe';
import Amount from './Amount';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .paypal-powered-by': {
      display: 'none',
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    '& .paypal-button-color-gold': {
      width: '100%',
      backgroundColor: '#e0e0e0',
    },
  },
  PaypalContainer: {
    '& .paypal-powered-by': {
      display: 'none !important',
    },
  },
  cLabel: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '1rem',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  margin: {
    display: 'flex',
    marginTop: '2rem',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
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
    console.log(data, actions);
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

  const handleChange = ({ target: { value } }) => {
    setAmount(value);
  };

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
      maxWidth="lg"
      style={{ height: '100%' }}
    >
      <Box>
        <Typography variant="h5">Wallet Recharge</Typography>
        <Typography variant="p">
          Top up your wallet for more sms credit
        </Typography>
      </Box>
      <Box my={3}>
        <Divider />
      </Box>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Box display="flex" flexDirection="column" mb={1}>
            <Typography variant="display2" gutterBottom>
              Amount to add
            </Typography>
            <Typography variant="caption">Enter amount to Recharge</Typography>
          </Box>
          <Box mb={4}>
            <FormControl
              fullWidth
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </Box>
          <Grid container spacing={3}>
            <Box display="flex" ml={1} flexDirection="column" mb={1}>
              <Typography variant="display2" gutterBottom>
                Billing Address
              </Typography>
              <Typography variant="caption">
                Enter your billing address
              </Typography>
            </Box>
            <Grid item md={12}>
              <FormControl fullWidth>
                <InputLabel shrink htmlFor="address">
                  Address
                </InputLabel>
                <BootstrapInput id="address" required />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel shrink htmlFor="state">
                  State
                </InputLabel>
                <BootstrapInput id="state" required />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel shrink htmlFor="city">
                  City
                </InputLabel>
                <BootstrapInput id="city" required />
              </FormControl>
            </Grid>
            <Grid item md={8}>
              <FormControl fullWidth>
                <InputLabel shrink htmlFor="Country">
                  Country
                </InputLabel>
                <BootstrapInput id="Country" required />
              </FormControl>
            </Grid>
            <Grid item md={4}>
              <FormControl>
                <InputLabel shrink htmlFor="postal-code">
                  Postal Code
                </InputLabel>
                <BootstrapInput id="postal-code" required />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Box display="flex" flexDirection="column" mb={2}>
            <Typography variant="display2" gutterBottom>
              Payment Method
            </Typography>
            <Typography variant="caption">Choose Payment</Typography>
          </Box>
          <Box display="flex" flexDirection="column" mb={2}>
            <Card variant="outlined">
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Box>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="78.964"
                        height="25"
                        viewBox="0 0 78.964 25"
                      >
                        <path
                          id="Path_11"
                          data-name="Path 11"
                          d="M44.79,25V5.541h4.826L49.9,6.575a7.046,7.046,0,0,1,1.631-.851A7.772,7.772,0,0,1,54.2,5.274a8.055,8.055,0,0,1,2.785.488A7.206,7.206,0,0,1,59.371,7.2a6.816,6.816,0,0,1,1.67,2.343,8.114,8.114,0,0,1,.638,3.21,9.043,9.043,0,0,1-.62,3.434,6.581,6.581,0,0,1-1.658,2.4,6.867,6.867,0,0,1-2.395,1.4,8.607,8.607,0,0,1-2.829.458,7.43,7.43,0,0,1-2.369-.363,8.771,8.771,0,0,1-1.513-.688l-.022,4.723L44.791,25ZM52.884,8.979a4.819,4.819,0,0,0-1.56.227,3.157,3.157,0,0,0-1.05.59l.022,6.192a3.126,3.126,0,0,0,1.006.555,4.964,4.964,0,0,0,1.582.23,3.243,3.243,0,0,0,1.379-.3,3.124,3.124,0,0,0,1.067-.818,3.749,3.749,0,0,0,.688-1.238,4.848,4.848,0,0,0,.244-1.554,4.246,4.246,0,0,0-.94-2.764,3.139,3.139,0,0,0-2.437-1.124Zm-32.2,11.482a6.769,6.769,0,0,1-4.058-1.218,4.2,4.2,0,0,1-1.192-1.359A3.572,3.572,0,0,1,15,16.172L15.025,2.8l5.352-.868-.022,3.621h4.168V9.112H20.355v5.925a1.552,1.552,0,0,0,.711,1.417,2.907,2.907,0,0,0,1.541.353,7.205,7.205,0,0,0,1.917-.284V19.91a6.853,6.853,0,0,1-1.516.388A15.265,15.265,0,0,1,20.684,20.461Zm-14.455,0a19.43,19.43,0,0,1-2.937-.225,19.208,19.208,0,0,1-3.052-.726V15.537a18.9,18.9,0,0,0,3,.955,13.779,13.779,0,0,0,2.986.38,3.989,3.989,0,0,0,1.513-.221.84.84,0,0,0,.592-.8c0-.361-.271-.654-.852-.923a14.449,14.449,0,0,0-2.038-.658,14.775,14.775,0,0,1-3.625-1.344A3.286,3.286,0,0,1,0,10,3.981,3.981,0,0,1,2.037,6.527,10.241,10.241,0,0,1,7.414,5.274a18.528,18.528,0,0,1,5.44.768V9.963a14.517,14.517,0,0,0-2.72-.791A14.7,14.7,0,0,0,7.414,8.9c-1.255,0-1.865.295-1.865.9,0,.326.251.589.791.827a13.64,13.64,0,0,0,1.915.585A14.221,14.221,0,0,1,12,12.562a3.563,3.563,0,0,1,1.925,3.192,3.689,3.689,0,0,1-.561,2,4.579,4.579,0,0,1-1.577,1.478A11.056,11.056,0,0,1,6.229,20.461Zm65.518-.017a13.371,13.371,0,0,1-3.677-.475A8.3,8.3,0,0,1,65.2,18.548a6.367,6.367,0,0,1-1.867-2.363,7.866,7.866,0,0,1-.666-3.3,7.741,7.741,0,0,1,.575-2.977A7.026,7.026,0,0,1,64.9,7.489a7.649,7.649,0,0,1,2.636-1.623,10.069,10.069,0,0,1,3.512-.593,9.457,9.457,0,0,1,3.43.594,6.734,6.734,0,0,1,3.982,4.053,8.679,8.679,0,0,1,.506,3c0,.231-.014.609-.027.943h0c-.009.241-.017.449-.017.541H68.194c.206,1.683,1.638,2.537,4.255,2.537a16.541,16.541,0,0,0,2.942-.246,13.408,13.408,0,0,0,2.432-.672v3.338A15.541,15.541,0,0,1,71.748,20.444ZM71.024,8.662a3.531,3.531,0,0,0-1.035.152,2.855,2.855,0,0,0-.931.476,2.488,2.488,0,0,0-.93,2.042h5.659a2.9,2.9,0,0,0-.244-1.213,2.308,2.308,0,0,0-.636-.829A2.954,2.954,0,0,0,71.024,8.662ZM42.75,20.16H37.245V5.557H42.75Zm-11.011,0H26.256V5.557h4.738l.351,1.235a3.18,3.18,0,0,1,1.5-1.128,4.723,4.723,0,0,1,1.666-.28,5.485,5.485,0,0,1,1.4.172V9.4a5.285,5.285,0,0,0-1.279-.145,5.148,5.148,0,0,0-1.487.205,3.32,3.32,0,0,0-1.4.807ZM37.245,4.289h0V.885L42.75,0V3.388l-5.505.9Z"
                          fill="#607589"
                        />
                      </svg>
                    </Box>
                    <Typography variant="subtitle2">Visa/Mastercard</Typography>
                  </Box>
                </Box>
                <Box width="100%">
                  <Stripe />
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box display="flex" flexDirection="column" mb={2}>
            <Card variant="outlined">
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Box>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="87.457"
                        height="25"
                        viewBox="0 0 87.457 25"
                      >
                        <path
                          id="Path_12"
                          data-name="Path 12"
                          d="M36.979,25H33.71a.555.555,0,0,1-.5-.329.636.636,0,0,1,.042-.632l3.39-5.133L33.031,7.556A.64.64,0,0,1,33.107,7a.551.551,0,0,1,.462-.253h3.216a.966.966,0,0,1,.908.723l1.914,6.856L44.122,7.2a.931.931,0,0,1,.782-.445h3.274a.554.554,0,0,1,.5.325.636.636,0,0,1-.037.629L37.756,24.565A.928.928,0,0,1,36.979,25Zm32.379-4.4a4.945,4.945,0,0,1-4.1-1.778,6.966,6.966,0,0,1-1.213-5.368c.594-4.072,3.653-7.028,7.273-7.028,1.873,0,3.239.52,3.846,1.464l.229.354.144-.978a.575.575,0,0,1,.559-.513h3.256a.554.554,0,0,1,.433.214.637.637,0,0,1,.129.488L78.149,19.414a.963.963,0,0,1-.933.857H74.283a.553.553,0,0,1-.432-.213.641.641,0,0,1-.129-.492l.146-.971,0,.005A6.15,6.15,0,0,1,69.358,20.6Zm2.727-10.467a3.738,3.738,0,0,0-3.651,3.363,3.146,3.146,0,0,0,.511,2.456,2.659,2.659,0,0,0,2.187.942,3.714,3.714,0,0,0,3.676-3.337,3.172,3.172,0,0,0-.551-2.472A2.657,2.657,0,0,0,72.085,10.128ZM20.836,20.6a4.942,4.942,0,0,1-4.1-1.778,6.957,6.957,0,0,1-1.213-5.368c.594-4.072,3.653-7.028,7.273-7.028,1.874,0,3.241.52,3.848,1.464l.227.354.145-.978a.583.583,0,0,1,.559-.513h3.258a.55.55,0,0,1,.431.214.633.633,0,0,1,.126.488l-1.76,11.961a.967.967,0,0,1-.935.857H25.758a.55.55,0,0,1-.43-.213.641.641,0,0,1-.129-.492l.145-.971,0,.005A6.147,6.147,0,0,1,20.836,20.6Zm2.729-10.467a3.735,3.735,0,0,0-3.651,3.363,3.137,3.137,0,0,0,.511,2.456,2.659,2.659,0,0,0,2.187.942,3.716,3.716,0,0,0,3.676-3.337,3.187,3.187,0,0,0-.551-2.472A2.657,2.657,0,0,0,23.565,10.128Zm60.2,10.143H80.956a.551.551,0,0,1-.431-.213.637.637,0,0,1-.128-.489L83.189.515A.579.579,0,0,1,83.747,0h3.144a.55.55,0,0,1,.43.213A.638.638,0,0,1,87.45.7L84.7,19.415A.962.962,0,0,1,83.763,20.271Zm-31.184,0H49.087a.551.551,0,0,1-.431-.213.637.637,0,0,1-.128-.489L51.279.857A.965.965,0,0,1,52.212,0h6.8c2.276,0,3.99.644,4.956,1.863a5.94,5.94,0,0,1,.868,4.711,8.372,8.372,0,0,1-2.444,5.2,7.683,7.683,0,0,1-5.3,1.739H54.944a.962.962,0,0,0-.933.857l-.782,5.3A.673.673,0,0,1,52.578,20.271ZM56.014,4.051a.576.576,0,0,0-.559.513l-.722,4.89H55.76c1.8,0,3.669,0,4.04-2.618A2.575,2.575,0,0,0,59.472,4.8c-.6-.751-1.759-.751-2.986-.751ZM3.815,20.271H.568a.553.553,0,0,1-.433-.214.636.636,0,0,1-.128-.488L2.758.857A.964.964,0,0,1,3.693,0h6.8c2.276,0,3.991.644,4.958,1.863a5.944,5.944,0,0,1,.867,4.711,8.37,8.37,0,0,1-2.444,5.2,7.682,7.682,0,0,1-5.3,1.739H6.425a.962.962,0,0,0-.933.857L4.75,19.415A.964.964,0,0,1,3.815,20.271ZM7.493,4.051a.582.582,0,0,0-.559.513l-.721,4.89H7.239c1.8,0,3.669,0,4.04-2.618a2.575,2.575,0,0,0-.33-2.034c-.6-.751-1.758-.751-2.985-.751Z"
                          transform="translate(0)"
                          fill="#607589"
                        />
                      </svg>
                    </Box>
                    <Typography variant="subtitle2">Visa/Mastercard</Typography>
                  </Box>
                  <Box className={classes.PaypalContainer}>
                    <PayPalScriptProvider options={{ 'client-id': 'test' }}>
                      <PayPalButtons
                        style={{ height: 25 }}
                        createOrder={createOrder}
                        onApprove={handleApprove}
                        forceReRender={amount}
                        disabled={false}
                      />
                    </PayPalScriptProvider>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
      {/* <Paper>
        <Box display="flex" flexDirection="column" p={5}>
          <Grid item md={12}>
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
                onBlur={handleChange}
                type="number"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </Grid>
          <Box mt={3}>
            <PayPalScriptProvider options={{ 'client-id': 'test' }}>
              <PayPalButtons
                createOrder={createOrder}
                onApprove={handleApprove}
                forceReRender={amount}
                disabled={amount < 1 ? true : false}
              />
            </PayPalScriptProvider>
          </Box>
        </Box>
      </Paper> */}
    </Container>
  );
};

export default Checkout;
