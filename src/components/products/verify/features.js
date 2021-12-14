import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  },
  box: { textAlign: 'center' },
  p: {
    color: '#869ab8',
  },
}));

export default function ProductFeatures() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Global compliance 
                  Cover global operators</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  Engaged in international communication business for 15 years, 
                  familiar with laws and regulations of various countries, 
                  and cooperated with more than 100 international operators.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Reach within 5 seconds Fast and efficient</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  Dedicated to the deployment of global nodes to ensure access speed, 
                  dedicated lines cover up to 190 countries and regions.


                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Higt reaching rate Multi-channel intelligent scheduling, stable and reliable</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  Supports technologies such as large capacity and high concurrency, 
                  distributed cluster, and high elastic extensible network architecture, 
                  and supports rich channel resources to ensure reaching rate
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Security privacy Escort your customers' information</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  The platform supports HTTPS/SSL interconnection for encrypted transmission, 
                  and adopts automatic disaster recovery mechanism, redundant backup, 
                  and data desensitization to ensure customer data security.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="300"
            viewBox="0 0 1180.548 1369.808"
          >
            <defs>
              <filter
                id="Rectangle_3"
                x="531"
                y="94.834"
                width="612"
                height="98"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood flood-opacity="0.161" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
              <filter
                id="Rectangle_1"
                x="196"
                y="552.834"
                width="590"
                height="258"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="5" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="10" result="blur-2" />
                <feFlood flood-opacity="0.161" />
                <feComposite operator="in" in2="blur-2" />
                <feComposite in="SourceGraphic" />
              </filter>
              <filter
                id="Rectangle_2"
                x="145"
                y="723.834"
                width="701"
                height="490"
                filterUnits="userSpaceOnUse"
              >
                <feOffset input="SourceAlpha" />
                <feGaussianBlur stdDeviation="30" result="blur-3" />
                <feFlood flood-opacity="0.161" />
                <feComposite operator="in" in2="blur-3" />
                <feComposite in="SourceGraphic" />
              </filter>
              <filter
                id="Ellipse_1"
                x="0"
                y="917.834"
                width="300"
                height="300"
                filterUnits="userSpaceOnUse"
              >
                <feOffset input="SourceAlpha" />
                <feGaussianBlur stdDeviation="30" result="blur-4" />
                <feFlood flood-opacity="0.161" />
                <feComposite operator="in" in2="blur-4" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g
              id="Group_16"
              data-name="Group 16"
              transform="translate(31 -120.166)"
            >
              <g id="Group_12" data-name="Group 12">
                <rect
                  id="Rectangle_14"
                  data-name="Rectangle 14"
                  width="608"
                  height="1312"
                  transform="translate(505 150)"
                  fill="#fff"
                />
                <g id="Group_11" data-name="Group 11">
                  <g
                    transform="matrix(1, 0, 0, 1, -31, 120.17)"
                    filter="url(#Rectangle_3)"
                  >
                    <rect
                      id="Rectangle_3-2"
                      data-name="Rectangle 3"
                      width="594"
                      height="80"
                      transform="translate(540 100.83)"
                      fill="#fff"
                    />
                  </g>
                  <text
                    id="E-BANKING"
                    transform="translate(594 275)"
                    fill="#383737"
                    font-size="34"
                    font-family="HelveticaNeue, Helvetica Neue"
                  >
                    <tspan x="0" y="0">
                      E-BANKING
                    </tspan>
                  </text>
                  <g
                    id="Icon_feather-arrow-left"
                    data-name="Icon feather-arrow-left"
                    transform="translate(527.5 242.5)"
                  >
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M32.5,18H7.5"
                      transform="translate(0 2)"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M18,32.5,7.5,20,18,7.5"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                  </g>
                  <g
                    id="Icon_feather-more-vertical"
                    data-name="Icon feather-more-vertical"
                    transform="translate(1047.5 241)"
                  >
                    <path
                      id="Path_4"
                      data-name="Path 4"
                      d="M19.5,18A1.5,1.5,0,1,1,18,16.5,1.5,1.5,0,0,1,19.5,18Z"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M19.5,7.5A1.5,1.5,0,1,1,18,6a1.5,1.5,0,0,1,1.5,1.5Z"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M19.5,28.5A1.5,1.5,0,1,1,18,27,1.5,1.5,0,0,1,19.5,28.5Z"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                  </g>
                  <path
                    id="Icon_ionic-ios-search"
                    data-name="Icon ionic-ios-search"
                    d="M34.148,32.322,25.8,23.9A11.891,11.891,0,1,0,24,25.73l8.289,8.365a1.284,1.284,0,0,0,1.812.047A1.292,1.292,0,0,0,34.148,32.322Zm-17.687-6.49A9.388,9.388,0,1,1,23.1,23.082,9.332,9.332,0,0,1,16.461,25.831Z"
                    transform="translate(1000.5 238.507)"
                  />
                  <g
                    id="Group_1"
                    data-name="Group 1"
                    transform="translate(0.349 2.473)"
                  >
                    <g id="white-mockup" transform="translate(469 117.693)">
                      <path
                        id="Path_1"
                        data-name="Path 1"
                        d="M-295.276,1388.809h-477.25a94.352,94.352,0,0,1-37.03-7.493,95.072,95.072,0,0,1-16.16-8.791,95.86,95.86,0,0,1-14.079-11.642,95.939,95.939,0,0,1-11.617-14.111,95.379,95.379,0,0,1-8.771-16.2,94.927,94.927,0,0,1-7.476-37.113V524.336A6.358,6.358,0,0,1-874,517.979V432.167a6.356,6.356,0,0,1,6.342-6.356V400.384A6.356,6.356,0,0,1-874,394.029V308.218a6.357,6.357,0,0,1,6.342-6.357V254.188A6.357,6.357,0,0,1-874,247.832V209.693a6.357,6.357,0,0,1,6.342-6.357v-88.99a94.926,94.926,0,0,1,7.476-37.113,95.4,95.4,0,0,1,8.771-16.2,95.953,95.953,0,0,1,11.617-14.111,95.845,95.845,0,0,1,14.079-11.642,95.074,95.074,0,0,1,16.16-8.791A94.355,94.355,0,0,1-772.525,19h477.25a94.353,94.353,0,0,1,37.03,7.493,95.076,95.076,0,0,1,16.16,8.791,95.84,95.84,0,0,1,14.079,11.642,95.971,95.971,0,0,1,11.616,14.111,95.44,95.44,0,0,1,8.771,16.2,94.935,94.935,0,0,1,7.476,37.113V335.233a6.357,6.357,0,0,1,6.343,6.356v143.02a6.357,6.357,0,0,1-6.343,6.357v802.5a94.935,94.935,0,0,1-7.476,37.113,95.43,95.43,0,0,1-8.771,16.2,95.958,95.958,0,0,1-11.616,14.111,95.864,95.864,0,0,1-14.079,11.642,95.085,95.085,0,0,1-16.16,8.791A94.35,94.35,0,0,1-295.276,1388.809ZM-767.769,58.727a62.9,62.9,0,0,0-24.687,5,63.194,63.194,0,0,0-20.159,13.623,63.35,63.35,0,0,0-13.591,20.2,63.278,63.278,0,0,0-4.984,24.742V1285.518a63.278,63.278,0,0,0,4.984,24.742,63.363,63.363,0,0,0,13.591,20.2,63.243,63.243,0,0,0,20.159,13.623,62.925,62.925,0,0,0,24.687,4.994h467.736a62.925,62.925,0,0,0,24.687-4.994,63.239,63.239,0,0,0,20.159-13.623,63.356,63.356,0,0,0,13.591-20.2,63.272,63.272,0,0,0,4.984-24.742V122.292A63.273,63.273,0,0,0-241.6,97.55a63.343,63.343,0,0,0-13.591-20.2,63.2,63.2,0,0,0-20.159-13.623,62.9,62.9,0,0,0-24.687-5h-60.259a7.947,7.947,0,0,0-7.92,7.945v7.946A31.664,31.664,0,0,1-370.7,86.989a31.7,31.7,0,0,1-6.8,10.1,31.6,31.6,0,0,1-10.079,6.812,31.45,31.45,0,0,1-12.344,2.5H-664.709a34.588,34.588,0,0,1-13.577-2.747,34.784,34.784,0,0,1-11.088-7.493,34.86,34.86,0,0,1-7.475-11.113A34.807,34.807,0,0,1-699.59,71.44V66.53a7.91,7.91,0,0,0-2.371-5.521,7.87,7.87,0,0,0-5.555-2.282Z"
                        transform="translate(874 -19.001)"
                        fill="#f2f2f5"
                      />
                      <g id="phone" transform="translate(322.929 28)">
                        <path
                          id="camera"
                          d="M114-960a6,6,0,0,1,6-6,6,6,0,0,1,6,6,6,6,0,0,1-6,6A6,6,0,0,1,114-960Zm-64,3a3,3,0,0,1-3-3,3,3,0,0,1,3-3H97a3,3,0,0,1,3,3,3,3,0,0,1-3,3Z"
                          transform="translate(-47 966)"
                          fill="#dedee4"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2"
                      data-name="Group 2"
                      transform="translate(530 535.396)"
                    >
                      <g id="Group_3" data-name="Group 3">
                        <g id="Path_7" data-name="Path 7" fill="#002e81">
                          <path
                            d="M 35 69.5 C 30.34230995178223 69.5 25.82420921325684 68.58789825439453 21.57119941711426 66.78901672363281 C 17.46302032470703 65.05140686035156 13.77340030670166 62.56375885009766 10.60482025146484 59.39517974853516 C 7.436240196228027 56.22660064697266 4.94858980178833 52.53697967529297 3.21097993850708 48.42879867553711 C 1.412099957466125 44.17578887939453 0.5 39.65768814086914 0.5 35 C 0.5 30.34230995178223 1.412099957466125 25.82420921325684 3.21097993850708 21.57119941711426 C 4.94858980178833 17.46302032470703 7.436240196228027 13.77340030670166 10.60482025146484 10.60482025146484 C 13.77340030670166 7.436240196228027 17.46302032470703 4.94858980178833 21.57119941711426 3.21097993850708 C 25.82420921325684 1.412099957466125 30.34230995178223 0.5 35 0.5 C 39.65768814086914 0.5 44.17578887939453 1.412099957466125 48.42879867553711 3.21097993850708 C 52.53697967529297 4.94858980178833 56.22660064697266 7.436240196228027 59.39517974853516 10.60482025146484 C 62.56375885009766 13.77340030670166 65.05140686035156 17.46302032470703 66.78901672363281 21.57119941711426 C 68.58789825439453 25.82420921325684 69.5 30.34230995178223 69.5 35 C 69.5 39.65768814086914 68.58789825439453 44.17578887939453 66.78901672363281 48.42879867553711 C 65.05140686035156 52.53697967529297 62.56375885009766 56.22660064697266 59.39517974853516 59.39517974853516 C 56.22660064697266 62.56375885009766 52.53697967529297 65.05140686035156 48.42879867553711 66.78901672363281 C 44.17578887939453 68.58789825439453 39.65768814086914 69.5 35 69.5 Z"
                            stroke="none"
                          />
                          <path
                            d="M 35 1 C 30.40959167480469 1 25.9570198059082 1.898818969726562 21.7659797668457 3.671478271484375 C 17.71739959716797 5.383880615234375 14.08119964599609 7.835548400878906 10.95837020874023 10.95837020874023 C 7.835548400878906 14.08119964599609 5.383880615234375 17.71739959716797 3.671478271484375 21.7659797668457 C 1.898818969726562 25.9570198059082 1 30.40959167480469 1 35 C 1 39.59040832519531 1.898818969726562 44.0429801940918 3.671478271484375 48.2340202331543 C 5.383880615234375 52.28260040283203 7.835548400878906 55.91880035400391 10.95837020874023 59.04162979125977 C 14.08119964599609 62.16445159912109 17.71739959716797 64.61611938476562 21.7659797668457 66.32852172851562 C 25.9570198059082 68.10118103027344 30.40959167480469 69 35 69 C 39.59040832519531 69 44.0429801940918 68.10118103027344 48.2340202331543 66.32852172851562 C 52.28260040283203 64.61611938476562 55.91880035400391 62.16445159912109 59.04162979125977 59.04162979125977 C 62.16445159912109 55.91880035400391 64.61611938476562 52.28260040283203 66.32852172851562 48.2340202331543 C 68.10118103027344 44.0429801940918 69 39.59040832519531 69 35 C 69 30.40959167480469 68.10118103027344 25.9570198059082 66.32852172851562 21.7659797668457 C 64.61611938476562 17.71739959716797 62.16445159912109 14.08119964599609 59.04162979125977 10.95837020874023 C 55.91880035400391 7.835548400878906 52.28260040283203 5.383880615234375 48.2340202331543 3.671478271484375 C 44.0429801940918 1.898818969726562 39.59040832519531 1 35 1 M 35 0 C 54.32995986938477 0 70 15.67004013061523 70 35 C 70 54.32995986938477 54.32995986938477 70 35 70 C 15.67004013061523 70 0 54.32995986938477 0 35 C 0 15.67004013061523 15.67004013061523 0 35 0 Z"
                            stroke="none"
                            fill="#707070"
                          />
                        </g>
                        <text
                          id="E"
                          transform="translate(23.651 46.132)"
                          fill="#fff"
                          font-size="35"
                          font-family="HelveticaNeue-Bold, Helvetica Neue"
                          font-weight="700"
                        >
                          <tspan x="0" y="0">
                            E
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                  <text
                    id="Tuesday_._6:08_PM"
                    data-name="Tuesday . 6:08 PM"
                    transform="translate(731.349 349.473)"
                    fill="#383737"
                    font-size="23"
                    font-family="HelveticaNeue, Helvetica Neue"
                  >
                    <tspan x="0" y="0">
                      Tuesday . 6:08 PM
                    </tspan>
                  </text>
                  <g
                    transform="matrix(1, 0, 0, 1, -31, 120.17)"
                    filter="url(#Rectangle_1)"
                  >
                    <rect
                      id="Rectangle_1-2"
                      data-name="Rectangle 1"
                      width="530"
                      height="198"
                      rx="28"
                      transform="translate(226 577.83)"
                      fill="#fff"
                    />
                  </g>
                  <g
                    transform="matrix(1, 0, 0, 1, -31, 120.17)"
                    filter="url(#Rectangle_2)"
                  >
                    <rect
                      id="Rectangle_2-2"
                      data-name="Rectangle 2"
                      width="521"
                      height="310"
                      rx="28"
                      transform="translate(235 813.83)"
                      fill="#fff"
                    />
                  </g>
                  <text
                    id="Tuesday_._6:08_PM-2"
                    data-name="Tuesday . 6:08 PM"
                    transform="translate(357.349 678)"
                    fill="#383737"
                    font-size="23"
                    font-family="HelveticaNeue, Helvetica Neue"
                  >
                    <tspan x="0" y="0">
                      Tuesday . 6:08 PM
                    </tspan>
                  </text>
                  <g id="Group_4" data-name="Group 4">
                    <rect
                      id="Rectangle_5"
                      data-name="Rectangle 5"
                      width="463.24"
                      height="236.527"
                      rx="28"
                      transform="translate(610.349 369.473)"
                      fill="#f8f8f8"
                    />
                    <text
                      id="Dear_DOE_Auth_for_card_4860_607_Date:2021-05-10_07:11:00_PM_Amount_USD_260.00_Details:_PAYPAL_TECYTRADERS._Customer_Care:_00858307272_00270000"
                      data-name="Dear DOE, Auth for card 4860…607 
Date:2021-05-10 07:11:00 PM Amount
USD 260.00 Details: PAYPAL 
*TECYTRADERS.
Customer Care:
00858307272/00270000"
                      transform="translate(632 418)"
                      font-size="24"
                      font-family="HelveticaNeue, Helvetica Neue"
                      letter-spacing="0.006em"
                    >
                      <tspan x="0" y="0">
                        Dear DOE, Auth for card 4860…607{' '}
                      </tspan>
                      <tspan x="0" y="31">
                        Date:2021-05-10 07:11:00 PM Amount
                      </tspan>
                      <tspan x="0" y="62">
                        USD 260.00 Details: PAYPAL{' '}
                      </tspan>
                      <tspan x="0" y="93">
                        *TECYTRADERS.
                      </tspan>
                      <tspan x="0" y="124">
                        Customer Care:
                      </tspan>
                      <tspan x="0" y="155">
                        00858307272/00270000
                      </tspan>
                    </text>
                  </g>
                  <text
                    id="The_Code:_9441_is_to_verify_your_transaction_Of_USD_1000.00_._Never_share_it_with_any_one_even_your_Bank"
                    data-name="The Code: 9441 is to verify your 
transaction Of USD 1000.00 .
Never share it with any one, 
even your Bank"
                    transform="translate(232 756)"
                    font-size="30"
                    font-family="HelveticaNeue, Helvetica Neue"
                    letter-spacing="0.03em"
                  >
                    <tspan x="0" y="0">
                      The Code: 9441 is to verify your{' '}
                    </tspan>
                    <tspan x="0" y="37">
                      transaction Of USD 1000.00 .
                    </tspan>
                    <tspan x="0" y="74">
                      Never share it with any one,{' '}
                    </tspan>
                    <tspan x="0" y="111">
                      even your Bank
                    </tspan>
                  </text>
                  <text
                    id="Confirmed.Transfer_of_USD_1000_.00_From_account_Number_XXX_XXX_XXX_To_AIRDADY_NETWO_RKS_was_successful_Ref._10000288399_on_01_05_21_Thank_you_"
                    data-name="Confirmed.Transfer of USD 1000
.00 From account Number XXX 
XXX XXX To AIRDADY NETWO
RKS was successful 
Ref. 10000288399 on 01/05/21
Thank you "
                    transform="translate(237 1008)"
                    font-size="30"
                    font-family="HelveticaNeue, Helvetica Neue"
                    letter-spacing="0.03em"
                  >
                    <tspan x="0" y="0">
                      Confirmed.Transfer of USD 1000
                    </tspan>
                    <tspan x="0" y="37">
                      .00 From account Number XXX{' '}
                    </tspan>
                    <tspan x="0" y="74">
                      XXX XXX To AIRDADY NETWO
                    </tspan>
                    <tspan x="0" y="111">
                      RKS was successful{' '}
                    </tspan>
                    <tspan x="0" y="148">
                      Ref. 10000288399 on 01/05/21
                    </tspan>
                    <tspan x="0" y="185">
                      Thank you{' '}
                    </tspan>
                  </text>
                  <g
                    id="Group_5"
                    data-name="Group 5"
                    transform="translate(0 21)"
                  >
                    <g
                      transform="matrix(1, 0, 0, 1, -31, 99.17)"
                      filter="url(#Ellipse_1)"
                    >
                      <circle
                        id="Ellipse_1-2"
                        data-name="Ellipse 1"
                        cx="60"
                        cy="60"
                        r="60"
                        transform="translate(90 1007.83)"
                        fill="#002e81"
                      />
                    </g>
                    <text
                      id="E-2"
                      data-name="E"
                      transform="translate(101 1188)"
                      fill="#fff"
                      font-size="55"
                      font-family="HelveticaNeue-Bold, Helvetica Neue"
                      font-weight="700"
                      letter-spacing="0.03em"
                    >
                      <tspan x="0" y="0">
                        E
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </Grid>
      </Grid>
    </div>
  );
}
