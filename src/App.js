import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/auth';
import Verify from './components/verify';
import Sms from './components/sms';
import Register from './components/register';
import Profile from './components/profile';
import Home from './components/home';
import Checkout from './components/payments/Checkout';
import LookupPage from './components/products/lookup';
import SmsPage from './components/products/sms';
import VerifyPage from './components/products/verify';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/number_lookup" component={LookupPage} />
          <Route exact path="/product/sms" component={SmsPage} />
          <Route exact path="/product/verify" component={VerifyPage} />
          <AuthRoute exact path="/login">
            <Login />
          </AuthRoute>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/register">
            <Register />
          </PrivateRoute>
          <PrivateRoute exact path="/verify">
            <Verify />
          </PrivateRoute>
          <PrivateRoute exact path="/sms">
            <Sms />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute exact path="/payments">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute exact path="/return">
            <Checkout />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

const userData = localStorage.getItem('user');
const user = userData && JSON.parse(userData).user;

function PrivateRoute({ children }) {
  return (
    <Route
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

function AuthRoute({ children }) {
  let history = useHistory();
  return (
    <Route
      render={({ location }) => {
        let { from } = location.state || { from: { pathname: '/dashboard' } };
        return !user ? (
          children
        ) : (
          history.replace(from)
        );
      }}
    />
  );
}

export default App;
