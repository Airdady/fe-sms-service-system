import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuNav from "../home/nav";
import { Container, Typography, Box, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Footer from "../home/Footer";
import CountrySelector from "./country.selector";
import PricingTable from "./table";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundSize: "cover",
    background:
      "url(https://i.ibb.co/kc0sppy/abstract-digital-technology-background-with-network-connection-lines.jpg)",
    "& .hljs": {
      borderRadius: theme.shape.borderRadius,
    },
    "& .MuiTableCell-root": {
      borderBottom: "none",
    },
  },
  table: {
    minWidth: 350,
    marginTop: "1rem",
  },
  cardContent: {
    marginTop: "-8rem",
    position: "relative",
    zIndex: 100,
    padding: "1rem",
  },
  bgColor: {
    width: "100%",
    height: "320px",
    background: "transparent",
  },
  rightBtn: {
    marginLeft: "1rem",
    background: theme.palette.primary.dark,
  },
  popularPaper: {
    padding: "1rem",
    textAlign: "center",
    borderLeft: 0,
    background: "transparent",
    color: "white",
  },
  centerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
  goodies: {
    width: "100%",
    marginBottom: "3rem",
    padding: "3rem 0",
  },
}));

export default function BasicTable() {
  const classes = useStyles();

  return (
    <Box display="flex" bgcolor="#f0f3fb" flexDirection="column" flexGrow={1}>
      <div className={classes.root}>
        <Box display="flex" mt={6} className={classes.bgColor}>
          <Container maxWidth="lg">
            <Grid container style={{ height: "100%" }}>
              <Grid item md={12}>
                <Box
                  display="flex"
                  flexGrow={1}
                  textAlign="center"
                  justifyContent="space-around"
                >
                  <Box justifyContent="space-around" flexGrow={1}>
                    <Typography
                      variant="h3"
                      style={{ color: "white" }}
                      gutterBottom
                    >
                      Pricing
                    </Typography>
                    <Grid
                      item
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      md={5}
                    >
                      <CountrySelector />
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
      <Box
        px={5}
        mt={-5}
        width="100%"
        bgcolor="#f0f3fb"
        textAlign="left"
        style={{ transform: "skewY(-3deg)" }}
      >
        <Container style={{ transform: "skewY(3deg)" }}>
          <Box mt={-12}>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <Paper className={classes.paper}>
                  <Box className={classes.box} p={3}>
                    <PricingTable />
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={12}>
                <Paper className={classes.paper}>
                  <Box className={classes.box} p={3}>
                    <PricingTable />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box px={5} py={12} width="100%" bgcolor="#f0f3fb" textAlign="left">
        <Container>
          <Box my={5}>
            <Typography variant="h4">
              Download SMS Pricing for all Countries
            </Typography>
            <Typography variant="subtitle1" className={classes.p}>
              Effortlessly integrate two API’s within few minutes before
              starting the service.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">
                    Download SMS Pricing for all Countries
                  </Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                    Effortlessly integrate two API’s within few minutes before
                    starting the service.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Easy Deployment</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                    Effortlessly integrate two API’s within few minutes before
                    starting the service.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box px={5} py={12} width="100%" bgcolor="#f0f3fb" textAlign="left">
        <Container>
          <Box my={5}>
            <Typography variant="h4">Frequently Asked Question</Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Box className={classes.box} p={3}>
                <Typography variant="h6">Easy Deployment</Typography>
                <Typography variant="subtitle1" className={classes.p}>
                  Effortlessly integrate two API’s within few minutes before
                  starting the service.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box className={classes.box} p={3}>
                <Typography variant="h6">Easy Deployment</Typography>
                <Typography variant="subtitle1" className={classes.p}>
                  Effortlessly integrate two API’s within few minutes before
                  starting the service.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box className={classes.box} p={3}>
                <Typography variant="h6">Easy Deployment</Typography>
                <Typography variant="subtitle1" className={classes.p}>
                  Effortlessly integrate two API’s within few minutes before
                  starting the service.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box className={classes.box} p={3}>
                <Typography variant="h6">Easy Deployment</Typography>
                <Typography variant="subtitle1" className={classes.p}>
                  Effortlessly integrate two API’s within few minutes before
                  starting the service.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box className={classes.box} p={3}>
                <Typography variant="h6">Easy Deployment</Typography>
                <Typography variant="subtitle1" className={classes.p}>
                  Effortlessly integrate two API’s within few minutes before
                  starting the service.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box className={classes.box} p={3}>
                <Typography variant="h6">Easy Deployment</Typography>
                <Typography variant="subtitle1" className={classes.p}>
                  Effortlessly integrate two API’s within few minutes before
                  starting the service.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
