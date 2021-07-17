import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe,
} from 'react-stripe-elements';
import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .StripeElement': {
      display: 'block',
      margin: '10px 0 20px 0',
      'max-width': '500px',
      padding: '10px 14px',
      'box-shadow':
        'rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px',
      'border-radius': '4px',
      background: 'white',
    },
    '& .StripeButton': {
      'white-space': 'nowrap',
      border: 0,
      outline: 0,
      display: 'inline-block',
      height: 40,
      lineHeight: 40,
      padding: '0 14px',
      color: '#fff',
      borderRadius: 4,
      fontSize: 15,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.025em',
      backgroundColor: '#6772e5',
      textDecoration: 'none',
      transition: 'all 150ms ease',
      marginTop: 10,
    },
  },
  StripeElement: {
    display: 'block',
    margin: '10px 0 20px 0',
    'max-width': '500px',
    padding: '10px 14px',
    'box-shadow':
      'rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px',
    'border-radius': '4px',
    background: 'white',
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

class _CardForm extends Component {
  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.stripe
            .createToken()
            .then((payload) => console.log(payload));
        }}
      >
        <CardElement />
        <Button size="small" variant="outlined" color="primary">Pay</Button>
      </form>
    );
  }
}
const CardForm = injectStripe(_CardForm);

const Checkout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Elements>
        <CardForm />
      </Elements>
    </div>
  );
};

const Stripe = () => {
  return (
    <StripeProvider apiKey="pk_RXwtgk4Z5VR82S94vtwmam6P8qMXQ">
      <Checkout />
    </StripeProvider>
  );
};

export default Stripe;
