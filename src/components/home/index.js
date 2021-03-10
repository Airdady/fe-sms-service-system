import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuNav from "./nav";
import Paper from "@material-ui/core/Paper";
import { Container, Typography, Box, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Freepik from "../../assets/img/freepik.svg";
import SearchInput from "./search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Footer from "./Footer";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import ExpertForm from "./ExpertForm";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
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
    height: "92vh",
    // clipPath: "polygon(100% 0, 100% 99%, 0 78%, 0 0)",
    background: theme.palette.primary.main,
  },
  rightBtn: {
    marginLeft: "1rem",
    background: theme.palette.primary.dark,
  },
  popularPaper: {
    padding: "1rem",
    textAlign: "center",
    borderLeft: 0,
    background: theme.palette.primary.main,
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
    padding:'3rem 0'
  },
}));

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <MenuNav />
      {/* <div className={classes.bgColor}> */}
      <div className={classes.bgColor}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={7} style={{ marginTop: "6rem" }}>
              <Typography variant="h4" style={{ color: "white" }}>
                Connect and engage with your customers globally
              </Typography>
              <Typography variant="subtitle1" style={{ color: "white" }}>
                Connect and engage with your customers globally
              </Typography>
              <Box mt={4} display>
                <Button variant="contained">Get started</Button>
                <Button variant="contained" className={classes.rightBtn}>
                  Talk to Experts
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={5}
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-around",
                marginTop: "2rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="398"
                height="420.5"
                viewBox="0 0 398 420.5"
              >
                <defs>
                  <filter
                    id="Intersection_1"
                    x="62.981"
                    y="0"
                    width="212.658"
                    height="64.022"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dy="1" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feFlood flood-opacity="0.161" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                  <filter
                    id="Rectangle_2"
                    x="0"
                    y="75.412"
                    width="195"
                    height="174"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur-2" />
                    <feFlood flood-opacity="0.161" />
                    <feComposite operator="in" in2="blur-2" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                  <filter
                    id="Rectangle_3"
                    x="183"
                    y="284.412"
                    width="215"
                    height="98"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur-3" />
                    <feFlood flood-opacity="0.161" />
                    <feComposite operator="in" in2="blur-3" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                </defs>
                <g
                  id="Group_5"
                  data-name="Group 5"
                  transform="translate(-871 -1171.588)"
                >
                  <g
                    id="Group_4"
                    data-name="Group 4"
                    transform="translate(-55 47)"
                  >
                    <g id="Group_3" data-name="Group 3">
                      <g
                        id="iPhoneX_Light"
                        transform="translate(990.62 1125.089)"
                      >
                        <g
                          id="Group_1"
                          data-name="Group 1"
                          transform="translate(0 0)"
                        >
                          <path
                            id="Path_1"
                            data-name="Path 1"
                            d="M184.878,420H24.5C10.959,420,0,409.606,0,396.761V23.239C0,10.394,10.959,0,24.5,0H184.878c13.543,0,24.5,10.394,24.5,23.239V396.676C209.469,409.606,198.51,420,184.878,420Z"
                            transform="translate(0 0)"
                            fill="#ebebeb"
                            opacity="0.95"
                          />
                          <path
                            id="Path_2"
                            data-name="Path 2"
                            d="M49.875,7.888V8.4c0,6.541,5.7,11.893,12.666,11.893h88.212c6.966,0,12.666-5.352,12.666-11.893v-.51A2.962,2.962,0,0,1,166.5,5h21.8c11.219,0,20.357,8.58,20.357,19.113V399.5c0,10.534-9.138,19.113-20.357,19.113H25.447C14.138,418.7,5,410.116,5,399.583V24.113C5,13.58,14.138,5,25.357,5H46.8A2.962,2.962,0,0,1,49.875,7.888Z"
                            transform="translate(-2.133 -1.721)"
                            fill="#fff"
                          />
                          <path
                            id="Path_3"
                            data-name="Path 3"
                            d="M146.095,16.706H91.038A2.946,2.946,0,0,1,88,13.953h0A2.946,2.946,0,0,1,91.038,11.2h55.057a2.946,2.946,0,0,1,3.038,2.753h0A2.946,2.946,0,0,1,146.095,16.706ZM159.764,11.2a2.946,2.946,0,0,0-3.038,2.753,3.052,3.052,0,0,0,6.075,0A2.946,2.946,0,0,0,159.764,11.2Z"
                            transform="translate(-20.711 -4.697)"
                            fill="#fff"
                          />
                        </g>
                        <path
                          id="Path_4"
                          data-name="Path 4"
                          d="M152.781,480.3H89.469c-.9,0-1.569-.493-1.569-1.15h0c0-.657.672-1.15,1.569-1.15h63.313c.9,0,1.569.493,1.569,1.15h0C154.35,479.726,153.678,480.3,152.781,480.3Z"
                          transform="translate(-12.999 -72.621)"
                          fill="#e3e5e8"
                        />
                      </g>
                      <g
                        transform="matrix(1, 0, 0, 1, 926, 1124.59)"
                        filter="url(#Intersection_1)"
                      >
                        <path
                          id="Intersection_1-2"
                          data-name="Intersection 1"
                          d="M5131.486-2658.5v-35.909c0-10.534,9.138-19.114,20.357-19.114h21.442a2.961,2.961,0,0,1,3.076,2.888v.51c0,6.541,5.7,11.892,12.667,11.892h88.212c6.967,0,12.667-5.351,12.667-11.892v-.51a2.961,2.961,0,0,1,3.076-2.888h21.8c11.219,0,20.357,8.58,20.357,19.114v35.909Z"
                          transform="translate(-5064 2717.02)"
                          fill="#f8f8f8"
                        />
                      </g>
                      <circle
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        cx="15"
                        cy="15"
                        r="15"
                        transform="translate(1024 1149)"
                        fill="#742ddd"
                      />
                      <text
                        id="V"
                        transform="translate(1034 1170)"
                        fill="#fff"
                        font-size="16"
                        font-family="HelveticaNeue-Bold, Helvetica Neue"
                        font-weight="700"
                      >
                        <tspan x="0" y="0">
                          V
                        </tspan>
                      </text>
                      <path
                        id="Icon_awesome-video"
                        data-name="Icon awesome-video"
                        d="M5.778,4.5H.821A.834.834,0,0,0,0,5.345v5.1a.834.834,0,0,0,.821.845H5.778a.834.834,0,0,0,.821-.845v-5.1A.834.834,0,0,0,5.778,4.5Zm3.255.667L7.149,6.5V9.286l1.883,1.335a.55.55,0,0,0,.866-.456V5.623A.55.55,0,0,0,9.032,5.167Z"
                        transform="translate(1151.602 1158.5)"
                        fill="#742ddd"
                      />
                      <path
                        id="Icon_ionic-md-call"
                        data-name="Icon ionic-md-call"
                        d="M12.816,10.64a5.719,5.719,0,0,1-1.736-.27.456.456,0,0,0-.489.123l-1.076,1.08A7.371,7.371,0,0,1,6.285,8.331l1.076-1.08a.513.513,0,0,0,.122-.491A5.362,5.362,0,0,1,7.19,4.991.492.492,0,0,0,6.7,4.5H4.989a.492.492,0,0,0-.489.491,8.326,8.326,0,0,0,8.316,8.35.492.492,0,0,0,.489-.491V11.131A.492.492,0,0,0,12.816,10.64Z"
                        transform="translate(1171.695 1157.449)"
                        fill="#742ddd"
                      />
                      <path
                        id="Icon_feather-chevron-left"
                        data-name="Icon feather-chevron-left"
                        d="M18.5,19.27l-5-5.135L18.5,9"
                        transform="translate(991.037 1149.52)"
                        fill="none"
                        stroke="#742ddd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <text
                        id="Vamoo"
                        transform="translate(1061 1170)"
                        fill="#4d4d4d"
                        font-size="16"
                        font-family="HelveticaNeue-Medium, Helvetica Neue"
                        font-weight="500"
                      >
                        <tspan x="0" y="0">
                          Vamoo
                        </tspan>
                      </text>
                    </g>
                    <g id="Group_2" data-name="Group 2">
                      <g
                        transform="matrix(1, 0, 0, 1, 926, 1124.59)"
                        filter="url(#Rectangle_2)"
                      >
                        <path
                          id="Rectangle_2-2"
                          data-name="Rectangle 2"
                          d="M20,0H157a20,20,0,0,1,20,20V156a0,0,0,0,1,0,0H20A20,20,0,0,1,0,136V20A20,20,0,0,1,20,0Z"
                          transform="translate(9 81.41)"
                          fill="#fff"
                        />
                      </g>
                      <text
                        id="Your_Vamoo_service_verification_code_is:_3755"
                        data-name="Your Vamoo service verification
 code is: 3755"
                        transform="translate(947 1277)"
                        fill="#4d4d4d"
                        font-size="10"
                        font-family="HelveticaNeue, Helvetica Neue"
                      >
                        <tspan x="0" y="0">
                          Your Vamoo service verification
                        </tspan>
                        <tspan x="0" y="12">
                          {" "}
                          code is: 3755
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    transform="matrix(1, 0, 0, 1, 871, 1171.59)"
                    filter="url(#Rectangle_3)"
                  >
                    <path
                      id="Rectangle_3-2"
                      data-name="Rectangle 3"
                      d="M20,0H177a20,20,0,0,1,20,20V60a20,20,0,0,1-20,20H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z"
                      transform="translate(192 290.41)"
                      fill="#fff"
                    />
                  </g>
                  <text
                    id="Your_Vamoo_service_verification_code_is:_3755-2"
                    data-name="Your Vamoo service verification
 code is: 3755"
                    transform="translate(1083 1502)"
                    fill="#4d4d4d"
                    font-size="10"
                    font-family="HelveticaNeue, Helvetica Neue"
                  >
                    <tspan x="0" y="0">
                      Your Vamoo service verification
                    </tspan>
                    <tspan x="0" y="12">
                      {" "}
                      code is: 3755
                    </tspan>
                  </text>
                </g>
              </svg>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* </div> */}
      <Container maxWidth="lg">
        <Paper className={classes.cardContent} elevation={3}>
          <Grid container>
            <Grid item xs={3}>
              <Paper
                variant="outlined"
                square
                style={{ padding: "1rem", textAlign: "center", border: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="60"
                  height="60"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  class=""
                >
                  <g>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_1_"
                      gradientUnits="userSpaceOnUse"
                      x1="256"
                      x2="256"
                      y1="600.693"
                      y2="63.549"
                    >
                      <stop stop-opacity="1" stop-color="#d2deff" offset="0" />
                      <stop
                        stop-opacity="0.77"
                        stop-color="#d2b8f9"
                        offset="1"
                      />
                    </linearGradient>
                    <g xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m465.257 166.614c-14.861-17.312-24.645-38.356-29.219-60.708-3.878-18.954-12.095-35.401-24.961-48.267-58.773-58.773-192.264-20.572-298.161 85.325-105.896 105.896-144.097 239.387-85.324 298.16 27.937 27.937 72.757 33.955 123.469 21.212 29.453-7.401 60.532-4.287 88.29 8.03 23.202 10.295 48.799 16.173 75.724 16.566 105.676 1.543 193.748-82.552 196.839-188.195 1.479-50.505-16.354-96.822-46.657-132.123z"
                        fill="url(#SVGID_1_)"
                        data-original="url(#SVGID_1_)"
                      />
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <path
                                    d="m132.1 468.171c0 11.5 9.33 20.83 20.84 20.83h206.12c11.51 0 20.84-9.33 20.84-20.83v-392.34c0-11.5-9.33-20.83-20.84-20.83h-206.12c-11.51 0-20.84 9.33-20.84 20.83z"
                                    fill="#742ddd"
                                    opacity=".1"
                                    data-original="#0000cc"
                                    class=""
                                  />
                                  <g fill="#fff">
                                    <path
                                      d="m379.9 48.83v392.34c0 11.5-9.33 20.83-20.84 20.83h-206.12c-11.51 0-20.84-9.33-20.84-20.83v-392.34c0-11.5 9.33-20.83 20.84-20.83h206.12c11.51 0 20.84 9.33 20.84 20.83z"
                                      fill="#ffffff"
                                      data-original="#ffffff"
                                      class=""
                                    />
                                    <path
                                      d="m323.547 56.006 8.453-28.007h-152l8.453 28.007c1.274 4.222 5.164 7.11 9.573 7.11h115.946c4.411 0 8.3-2.889 9.575-7.11z"
                                      fill="#ffffff"
                                      data-original="#ffffff"
                                      class=""
                                    />
                                  </g>
                                </g>
                              </g>
                              <g>
                                <path
                                  d="m207.154 45.558c0-2.681 2.173-4.854 4.854-4.854 2.68 0 4.854 2.173 4.854 4.854s-2.173 4.854-4.854 4.854c-2.681-.001-4.854-2.174-4.854-4.854z"
                                  fill="#742ddd"
                                  data-original="#0000cc"
                                  class=""
                                />
                              </g>
                              <g>
                                <path
                                  d="m223.48 45.558c0-2.681 2.173-4.854 4.854-4.854s4.854 2.173 4.854 4.854-2.173 4.854-4.854 4.854c-2.681-.001-4.854-2.174-4.854-4.854z"
                                  fill="#742ddd"
                                  data-original="#0000cc"
                                  class=""
                                />
                              </g>
                              <g>
                                <path
                                  d="m296.601 50.411h-37.202c-2.573 0-4.659-2.086-4.659-4.659s2.086-4.659 4.659-4.659h37.202c2.573 0 4.659 2.086 4.659 4.659s-2.086 4.659-4.659 4.659z"
                                  fill="#742ddd"
                                  data-original="#0000cc"
                                  class=""
                                />
                              </g>
                            </g>
                          </g>
                          <path
                            d="m417.392 94h-224.187c-2.762 0-5 2.239-5 5v118.667c0 2.761 2.238 5 5 5h30.22l16.04 20.351c2.002 2.54 5.852 2.54 7.854 0l16.04-20.351h154.033c2.761 0 5-2.239 5-5v-118.667c0-2.761-2.238-5-5-5z"
                            fill="#ad78fb"
                            data-original="#6583fe"
                            class=""
                          />
                          <g>
                            <path
                              d="m476.993 404.964h-194.187c-2.761 0-5-2.239-5-5v-118.666c0-2.761 2.239-5 5-5h30.22l16.04-20.351c2.002-2.54 5.852-2.54 7.854 0l16.04 20.351h124.033c2.762 0 5 2.239 5 5v118.667c0 2.761-2.238 4.999-5 4.999z"
                              fill="#ffffff"
                              data-original="#ffffff"
                              class=""
                            />
                            <path
                              d="m476.993 271.297h-92.095v-41.297c0-.843-.209-1.637-.577-2.333h33.071c5.514 0 10-4.486 10-10v-118.667c0-5.514-4.486-10-10-10h-32.492l-.002-40.165c0-14.246-11.59-25.836-25.835-25.836h-206.126c-14.245 0-25.835 11.59-25.835 25.836v392.333c0 14.246 11.59 25.835 25.835 25.835h206.127c14.245 0 25.835-11.59 25.835-25.835v-31.203h92.095c5.514 0 10-4.486 10-10v-118.668c-.001-5.514-4.487-10-10.001-10zm-151.725-238.298-6.508 21.562c-.642 2.126-2.565 3.555-4.786 3.555h-115.948c-2.221 0-4.145-1.429-4.786-3.555l-6.508-21.562zm151.725 366.965h-194.186v-30.464c0-2.761-2.238-5-5-5s-5 2.239-5 5v30.464c0 5.514 4.486 10 10 10h92.092v31.203c0 8.732-7.104 15.835-15.835 15.835h-206.127c-8.731 0-15.835-7.104-15.835-15.835v-392.332c0-8.732 7.104-15.836 15.835-15.836h23.349l7.38 24.452c1.926 6.379 7.697 10.666 14.36 10.666h115.947c6.663 0 12.435-4.286 14.36-10.666l7.38-24.452h23.349c8.731 0 15.835 7.104 15.835 15.836l.003 45.165c0 2.762 2.238 5 5 5h37.492v118.667h-154.033c-1.531 0-2.979.702-3.927 1.905l-16.041 20.352-16.039-20.351c-.948-1.203-2.396-1.905-3.927-1.905h-30.221v-118.668h152.694c2.762 0 5-2.239 5-5s-2.238-5-5-5h-152.693c-5.514 0-10 4.486-10 10v118.667c0 5.514 4.486 10 10 10h27.795l14.538 18.446c1.908 2.421 4.771 3.81 7.854 3.81 3.084 0 5.946-1.389 7.855-3.81l14.539-18.446h109.69c-.368.697-.577 1.491-.577 2.333v41.297h-19.512l-14.54-18.446c-1.908-2.421-4.771-3.81-7.854-3.81s-5.945 1.389-7.854 3.81l-14.539 18.446h-27.794c-5.514 0-10 4.486-10 10v54.203c0 2.761 2.238 5 5 5s5-2.239 5-5v-54.203h30.22c1.531 0 2.979-.702 3.927-1.905l16.04-20.351 16.041 20.351c.948 1.203 2.395 1.905 3.927 1.905h124.032z"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                          </g>
                          <path
                            d="m238.962 294.767c-6.718-6.718-17.609-6.718-24.327 0l-11.929 11.93-11.93-11.93c-6.718-6.718-17.609-6.718-24.327 0-6.718 6.718-6.718 17.609 0 24.327l32.462 32.462c2.096 2.096 5.493 2.096 7.589 0l32.462-32.462c6.717-6.718 6.717-17.609 0-24.327z"
                            fill="#ad78fb"
                            data-original="#6583fe"
                            class=""
                          />
                          <g>
                            <g>
                              <path
                                d="m163.104 372.928h79.202c2.573 0 4.659 2.086 4.659 4.659s-2.085 4.659-4.659 4.659h-79.202c-2.573 0-4.659-2.086-4.659-4.659s2.086-4.659 4.659-4.659z"
                                fill="#742ddd"
                                data-original="#0000cc"
                                class=""
                              />
                            </g>
                            <g>
                              <path
                                d="m163.104 388.737h58.202c2.573 0 4.659 2.086 4.659 4.659s-2.085 4.659-4.659 4.659h-58.202c-2.573 0-4.659-2.086-4.659-4.659s2.086-4.659 4.659-4.659z"
                                fill="#742ddd"
                                data-original="#0000cc"
                                class=""
                              />
                            </g>
                          </g>
                          <circle
                            cx="166.725"
                            cy="258.5"
                            fill="#742ddd"
                            r="7.801"
                            data-original="#0000cc"
                            class=""
                          />
                          <g fill="#00c">
                            <ellipse
                              cx="347.233"
                              cy="341.847"
                              rx="7.801"
                              ry="7.801"
                              transform="matrix(.23 -.973 .973 .23 -65.247 601.251)"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                            <ellipse
                              cx="379.9"
                              cy="341.847"
                              rx="7.801"
                              ry="7.801"
                              transform="matrix(.924 -.383 .383 .924 -101.901 171.403)"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                            <ellipse
                              cx="412.567"
                              cy="341.847"
                              rx="7.801"
                              ry="7.801"
                              transform="matrix(.924 -.383 .383 .924 -99.415 183.904)"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                          </g>
                          <g>
                            <path
                              d="m325.91 119.737h58.202c2.573 0 4.659 2.086 4.659 4.659s-2.086 4.659-4.659 4.659h-58.202c-2.573 0-4.659-2.086-4.659-4.659s2.086-4.659 4.659-4.659z"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                          </g>
                          <g>
                            <path
                              d="m231.809 147.5h152.303c2.573 0 4.659 2.086 4.659 4.659s-2.086 4.659-4.659 4.659h-152.303c-2.573 0-4.659-2.086-4.659-4.659s2.086-4.659 4.659-4.659z"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                          </g>
                          <g>
                            <path
                              d="m261.809 166.263h122.303c2.573 0 4.659 2.086 4.659 4.659s-2.086 4.659-4.659 4.659h-122.303c-2.573 0-4.659-2.086-4.659-4.659s2.086-4.659 4.659-4.659z"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                          </g>
                          <g>
                            <path
                              d="m231.809 185.026h152.303c2.573 0 4.659 2.086 4.659 4.659s-2.086 4.659-4.659 4.659h-152.303c-2.573 0-4.659-2.086-4.659-4.659s2.086-4.659 4.659-4.659z"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                          </g>
                        </g>
                        <g>
                          <path
                            d="m71.094 130.14c-1.279 0-2.56-.488-3.535-1.464l-11-11c-1.953-1.953-1.953-5.119 0-7.071l11-11c1.951-1.952 5.119-1.952 7.07 0l11 11c1.953 1.953 1.953 5.119 0 7.071l-11 11c-.976.976-2.256 1.464-3.535 1.464zm-3.929-16 3.929 3.929 3.929-3.929-3.929-3.929z"
                            fill="#ad78fb"
                            data-original="#6583fe"
                            class=""
                          />
                        </g>
                        <g>
                          <path
                            d="m82.094 183.934c-7.175 0-13.012-5.837-13.012-13.012s5.837-13.012 13.012-13.012 13.012 5.837 13.012 13.012-5.837 13.012-13.012 13.012zm0-16.024c-1.661 0-3.012 1.351-3.012 3.012s1.351 3.012 3.012 3.012 3.012-1.351 3.012-3.012c-.001-1.661-1.351-3.012-3.012-3.012z"
                            fill="#ad78fb"
                            data-original="#6583fe"
                            class=""
                          />
                        </g>
                        <g>
                          <path
                            d="m439 78.708c-7.175 0-13.012-5.837-13.012-13.012s5.837-13.012 13.012-13.012 13.012 5.837 13.012 13.012-5.837 13.012-13.012 13.012zm0-16.024c-1.661 0-3.012 1.351-3.012 3.012s1.351 3.012 3.012 3.012 3.012-1.351 3.012-3.012-1.351-3.012-3.012-3.012z"
                            fill="#ad78fb"
                            data-original="#6583fe"
                            class=""
                          />
                        </g>
                        <g>
                          <path
                            d="m82.094 383.221c-1.326 0-2.598-.527-3.535-1.464l-11.293-11.292c-.938-.938-1.465-2.21-1.465-3.536s.526-2.598 1.465-3.536l11.293-11.293c.938-.938 2.209-1.464 3.535-1.464 1.326 0 2.598.527 3.535 1.464l11.292 11.292c1.953 1.953 1.953 5.119 0 7.071l-11.292 11.292c-.938.939-2.209 1.466-3.535 1.466zm-4.222-16.293 4.222 4.221 4.221-4.221-4.221-4.221z"
                            fill="#ad78fb"
                            data-original="#6583fe"
                            class=""
                          />
                        </g>
                        <g>
                          <path
                            d="m420.367 468.763c-1.326 0-2.598-.527-3.535-1.464l-11.292-11.293c-1.953-1.953-1.953-5.119 0-7.071l11.292-11.293c.938-.938 2.209-1.464 3.535-1.464s2.598.527 3.535 1.464l11.292 11.293c1.953 1.953 1.953 5.119 0 7.071l-11.292 11.293c-.937.937-2.209 1.464-3.535 1.464zm-4.22-16.292 4.221 4.221 4.221-4.221-4.221-4.221z"
                            fill="#ad78fb"
                            data-original="#6583fe"
                            class=""
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>

                <Typography variant="h6">Messages</Typography>
                <Typography variant="display1">
                  Enterprise grade communications stack for your business
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper
                variant="outlined"
                square
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  borderBottom: 0,
                  borderRight: 0,
                  borderTop: 0,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="60"
                  height="60"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  class=""
                >
                  <g>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_1_"
                      gradientTransform="matrix(1 0 0 -1 0 514)"
                      gradientUnits="userSpaceOnUse"
                      x1="514.782"
                      x2="-122.414"
                      y1="557.218"
                      y2="-79.979"
                    >
                      <stop stop-opacity="1" stop-color="#d2deff" offset="0" />
                      <stop
                        stop-opacity="0.89"
                        stop-color="#d6baff"
                        offset="1"
                      />
                    </linearGradient>
                    <g xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m428.41 171.888c-8.355-8.355-18.026-14.923-28.717-19.765-28.021-12.69-50.051-35.407-62.434-63.565-22.917-52.113-74.975-88.512-135.546-88.558-79.311-.06-145.162 63.163-148.147 142.418-1.277 33.922 8.858 65.421 26.87 90.969 22.877 32.448 28.821 73.782 17.021 111.69-16.764 53.857-10.919 104.898 20.973 136.791 55.888 55.888 170.586 31.803 256.185-53.795 85.598-85.599 109.683-200.296 53.795-256.185z"
                        fill="url(#SVGID_1_)"
                        data-original="url(#SVGID_1_)"
                      />
                      <g fill="#00c" opacity=".1">
                        <path
                          d="m210.419 325.341h-95.575c-9.73 0-17.617 7.888-17.617 17.617v132.654c0 9.73 7.888 17.617 17.617 17.617h95.575c9.73 0 17.617-7.888 17.617-17.617v-132.654c.001-9.729-7.887-17.617-17.617-17.617z"
                          fill="#742ddd"
                          data-original="#0000cc"
                          class=""
                        />
                        <path
                          d="m404.773 247.963h-89.31v-148.398c0-29.941-24.587-54.247-54.631-53.788-29.517.451-52.959 25.085-52.959 54.605v105.694c0 2.761 2.239 5 5 5h17.547c2.761 0 5-2.239 5-5v-106.511c0-14.737 12.207-26.676 27.042-26.236 14.276.423 25.454 12.511 25.454 26.794v147.84h-8.616c-5.523 0-10 4.477-10 10v225.267c0 5.523 4.477 10 10 10h125.474c5.523 0 10-4.477 10-10v-225.267c-.001-5.523-4.479-10-10.001-10z"
                          fill="#742ddd"
                          data-original="#0000cc"
                          class=""
                        />
                      </g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="m210.42 466.23h-95.575c-9.73 0-17.617-7.888-17.617-17.617v-132.655c0-9.73 7.887-17.617 17.617-17.617h95.575c9.73 0 17.617 7.888 17.617 17.617v132.654c0 9.73-7.888 17.618-17.617 17.618z"
                                  fill="#ffffff"
                                  data-original="#ffffff"
                                  class=""
                                />
                              </g>
                            </g>
                            <g>
                              <path
                                d="m181.424 298.341v5.253c0 10.378-8.413 18.792-18.792 18.792-10.378 0-18.792-8.413-18.792-18.792v-5.253z"
                                fill="#ab75fb"
                                data-original="#6583fe"
                                class=""
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="m178.945 382.598h-32.625c-2.761 0-5-2.239-5-5v-32.625c0-2.761 2.239-5 5-5h32.625c2.761 0 5 2.239 5 5v32.625c0 2.761-2.239 5-5 5z"
                                fill="#ab75fb"
                                data-original="#6583fe"
                                class=""
                              />
                            </g>
                            <g>
                              <path
                                d="m178.945 436.598h-32.625c-2.761 0-5-2.239-5-5v-32.625c0-2.761 2.239-5 5-5h32.625c2.761 0 5 2.239 5 5v32.625c0 2.761-2.239 5-5 5z"
                                fill="#ab75fb"
                                data-original="#6583fe"
                                class=""
                              />
                            </g>
                          </g>
                        </g>
                        <g>
                          <g>
                            <g>
                              <path
                                d="m287.915 235.076v-161.953c0-14.283-11.178-26.371-25.454-26.794-14.834-.44-27.042 11.499-27.042 26.236v106.511c0 2.761-2.239 5-5 5h-17.547c-2.762 0-5-2.239-5-5v-105.694c0-29.521 23.442-54.155 52.959-54.605 30.044-.459 54.631 23.847 54.631 53.788v162.511z"
                                fill="#ffffff"
                                data-original="#ffffff"
                                class=""
                              />
                            </g>
                          </g>
                          <g>
                            <path
                              d="m404.773 466.23h-125.474c-5.523 0-10-4.477-10-10v-225.267c0-5.523 4.477-10 10-10h125.474c5.523 0 10 4.477 10 10v225.267c0 5.522-4.477 10-10 10z"
                              fill="#ffffff"
                              data-original="#ffffff"
                              class=""
                            />
                          </g>
                          <g>
                            <g>
                              <path
                                d="m210.42 293.341h-95.575c-12.471 0-22.617 10.146-22.617 22.618v132.654c0 12.471 10.146 22.617 22.617 22.617h95.575c12.471 0 22.617-10.146 22.617-22.617v-43.113c0-2.761-2.238-5-5-5s-5 2.239-5 5v43.112c0 6.957-5.66 12.617-12.617 12.617h-95.575c-6.957 0-12.617-5.66-12.617-12.617v-132.653c0-6.958 5.66-12.618 12.617-12.618h95.575c6.957 0 12.617 5.66 12.617 12.618v55.541c0 2.761 2.238 5 5 5s5-2.239 5-5v-55.541c0-12.472-10.146-22.618-22.617-22.618z"
                                fill="#742ddd"
                                data-original="#0000cc"
                                class=""
                              />
                            </g>
                            <g>
                              <path
                                d="m184.154 260.055c1.69 0 3.339-.857 4.28-2.408 1.432-2.361.679-5.436-1.683-6.868-7.266-4.408-15.607-6.737-24.12-6.737-8.514 0-16.855 2.33-24.12 6.737-2.36 1.432-3.113 4.507-1.681 6.868s4.506 3.116 6.868 1.682c5.701-3.459 12.248-5.287 18.933-5.287s13.231 1.828 18.935 5.287c.811.491 1.706.726 2.588.726z"
                                fill="#742ddd"
                                data-original="#0000cc"
                                class=""
                              />
                            </g>
                            <g>
                              <path
                                d="m162.632 261.798c-4.146 0-8.21 1.135-11.751 3.283-2.361 1.432-3.114 4.507-1.683 6.868 1.432 2.361 4.507 3.114 6.868 1.683 3.956-2.399 9.178-2.398 13.13 0 .811.492 1.705.726 2.589.726 1.689 0 3.339-.857 4.279-2.407 1.433-2.361.68-5.436-1.681-6.869-3.539-2.148-7.604-3.284-11.751-3.284z"
                                fill="#742ddd"
                                data-original="#0000cc"
                                class=""
                              />
                            </g>
                            <g>
                              <path
                                d="m129.667 245.005c.883 0 1.777-.234 2.588-.726 9.15-5.549 19.654-8.483 30.377-8.483 10.724 0 21.228 2.934 30.377 8.483 2.361 1.434 5.436.68 6.868-1.682 1.432-2.361.679-5.436-1.683-6.868-10.712-6.499-23.01-9.933-35.562-9.933s-24.85 3.434-35.563 9.933c-2.361 1.432-3.114 4.507-1.683 6.868.941 1.551 2.591 2.409 4.281 2.408z"
                                fill="#742ddd"
                                data-original="#0000cc"
                                class=""
                              />
                            </g>
                            <g>
                              <path
                                d="m404.773 215.963h-111.858v-142.84c0-17.035-13.596-31.297-30.306-31.792-8.507-.243-16.577 2.879-22.696 8.819-6.122 5.943-9.493 13.903-9.493 22.415v106.511h-17.547v-105.694c0-26.948 21.548-49.202 48.034-49.606 13.184-.199 25.581 4.784 34.978 14.038 9.4 9.257 14.577 21.599 14.577 34.751v114.397c0 2.761 2.238 5 5 5s5-2.239 5-5v-114.397c0-15.852-6.236-30.724-17.56-41.876-11.319-11.148-26.258-17.147-42.147-16.912-31.916.487-57.882 27.226-57.882 59.605v105.694c0 5.514 4.486 10 10 10h17.547c5.514 0 10-4.486 10-10v-106.511c0-5.784 2.294-11.197 6.459-15.24 4.162-4.041 9.674-6.178 15.434-5.999 11.36.336 20.603 10.114 20.603 21.796v142.84h-3.616c-8.272 0-15 6.729-15 15v225.268c0 8.271 6.728 15 15 15h125.474c8.271 0 15-6.729 15-15v-225.267c-.001-8.271-6.73-15-15.001-15zm5 240.267c0 2.757-2.243 5-5 5h-125.474c-2.757 0-5-2.243-5-5v-225.267c0-2.757 2.243-5 5-5h125.474c2.757 0 5 2.243 5 5z"
                                fill="#742ddd"
                                data-original="#0000cc"
                                class=""
                              />
                            </g>
                          </g>
                          <g>
                            <path
                              d="m338.629 266.677v152.31c0 2.76-2.24 5-5 5h-26.66c-2.76 0-5-2.24-5-5v-152.31c0-2.76 2.24-5 5-5h26.66c2.76 0 5 2.24 5 5z"
                              fill="#ab75fb"
                              data-original="#6583fe"
                              class=""
                            />
                          </g>
                          <g>
                            <path
                              d="m338.629 284.607v20.59l-36.66 36.66v-20.59z"
                              fill="#ffffff"
                              data-original="#ffffff"
                              class=""
                            />
                          </g>
                          <g>
                            <path
                              d="m338.629 322.727v46.74l-36.66 36.66v-46.74z"
                              fill="#ffffff"
                              data-original="#ffffff"
                              class=""
                            />
                          </g>
                          <g>
                            <path
                              d="m333.629 428.987h-26.66c-5.514 0-10-4.486-10-10v-152.31c0-5.514 4.486-10 10-10h26.66c5.514 0 10 4.486 10 10v152.311c0 5.513-4.486 9.999-10 9.999zm0-162.315-26.66.005v152.311h26.66z"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                          </g>
                          <g>
                            <ellipse
                              cx="370.113"
                              cy="413.844"
                              fill="#742ddd"
                              rx="7.801"
                              ry="7.801"
                              data-original="#0000cc"
                              class=""
                            />
                          </g>
                          <g>
                            <circle
                              cx="370.099"
                              cy="388.425"
                              fill="#742ddd"
                              r="7.801"
                              data-original="#0000cc"
                              class=""
                            />
                          </g>
                        </g>
                      </g>
                      <g opacity=".1">
                        <g>
                          <path
                            d="m184.154 287.223c-.883 0-1.777-.234-2.588-.726-5.703-3.459-12.25-5.287-18.935-5.287s-13.231 1.828-18.933 5.287c-2.361 1.433-5.436.68-6.868-1.682-1.433-2.361-.68-5.436 1.681-6.868 7.266-4.408 15.606-6.737 24.12-6.737s16.854 2.33 24.12 6.737c2.361 1.432 3.114 4.507 1.683 6.868-.941 1.551-2.589 2.408-4.28 2.408z"
                            fill="#742ddd"
                            data-original="#0000cc"
                            class=""
                          />
                        </g>
                        <g>
                          <path
                            d="m171.785 301.526c-.884 0-1.778-.234-2.589-.726-3.952-2.397-9.174-2.399-13.13.001-2.362 1.432-5.436.679-6.868-1.683-1.432-2.361-.679-5.436 1.683-6.868 3.541-2.148 7.604-3.283 11.751-3.283s8.212 1.135 11.752 3.283c2.36 1.433 3.113 4.508 1.681 6.869-.941 1.55-2.59 2.407-4.28 2.407z"
                            fill="#742ddd"
                            data-original="#0000cc"
                            class=""
                          />
                        </g>
                        <g>
                          <path
                            d="m129.667 272.174c-1.69 0-3.34-.857-4.28-2.408-1.432-2.361-.679-5.435 1.683-6.868 10.713-6.499 23.011-9.933 35.563-9.933 12.553 0 24.851 3.435 35.562 9.933 2.361 1.432 3.114 4.507 1.683 6.868-1.432 2.361-4.507 3.114-6.868 1.682-9.149-5.549-19.653-8.483-30.377-8.483-10.723 0-21.227 2.934-30.377 8.483-.812.492-1.706.726-2.589.726z"
                            fill="#742ddd"
                            data-original="#0000cc"
                            class=""
                          />
                        </g>
                      </g>
                      <g fill="#6583fe">
                        <path
                          d="m148.473 165.64c-7.175 0-13.012-5.837-13.012-13.012s5.837-13.012 13.012-13.012 13.012 5.837 13.012 13.012c-.001 7.175-5.837 13.012-13.012 13.012zm0-16.024c-1.661 0-3.012 1.351-3.012 3.012s1.351 3.012 3.012 3.012 3.012-1.351 3.012-3.012c-.001-1.661-1.351-3.012-3.012-3.012z"
                          fill="#ab75fb"
                          data-original="#6583fe"
                          class=""
                        />
                        <path
                          d="m61.47 288.147c-7.175 0-13.012-5.837-13.012-13.012s5.837-13.012 13.012-13.012 13.012 5.837 13.012 13.012c-.001 7.175-5.837 13.012-13.012 13.012zm0-16.023c-1.661 0-3.012 1.351-3.012 3.012s1.351 3.012 3.012 3.012 3.012-1.351 3.012-3.012c-.001-1.661-1.351-3.012-3.012-3.012z"
                          fill="#ab75fb"
                          data-original="#6583fe"
                          class=""
                        />
                        <path
                          d="m370.1 195.657c-7.175 0-13.012-5.837-13.012-13.012s5.837-13.012 13.012-13.012 13.012 5.837 13.012 13.012-5.838 13.012-13.012 13.012zm0-16.024c-1.661 0-3.012 1.351-3.012 3.012s1.351 3.012 3.012 3.012 3.012-1.351 3.012-3.012c-.001-1.661-1.351-3.012-3.012-3.012z"
                          fill="#ab75fb"
                          data-original="#6583fe"
                          class=""
                        />
                        <path
                          d="m388.9 108.317c-1.279 0-2.56-.488-3.535-1.464l-11-11c-1.953-1.953-1.953-5.119 0-7.071l11-11c1.951-1.952 5.119-1.952 7.07 0l11 11c1.953 1.953 1.953 5.119 0 7.071l-11 11c-.975.976-2.255 1.464-3.535 1.464zm-3.928-16 3.929 3.929 3.929-3.929-3.929-3.929z"
                          fill="#ab75fb"
                          data-original="#6583fe"
                          class=""
                        />
                        <path
                          d="m447.542 398.285c-1.279 0-2.56-.488-3.535-1.464l-11-11c-1.953-1.953-1.953-5.119 0-7.071l11-11c1.951-1.952 5.119-1.952 7.07 0l11 11c1.953 1.953 1.953 5.119 0 7.071l-11 11c-.975.976-2.256 1.464-3.535 1.464zm-3.929-16 3.929 3.929 3.929-3.929-3.929-3.929z"
                          fill="#ab75fb"
                          data-original="#6583fe"
                          class=""
                        />
                      </g>
                    </g>
                  </g>
                </svg>

                <Typography variant="h6">OTP verify</Typography>
                <Typography variant="display1">
                  Enterprise grade communications stack for your business
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper
                variant="outlined"
                square
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  borderBottom: 0,
                  borderRight: 0,
                  borderTop: 0,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="60"
                  height="60"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  class=""
                >
                  <g>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_1_"
                      gradientUnits="userSpaceOnUse"
                      x1="432.823"
                      x2="96.822"
                      y1="520.816"
                      y2="20.814"
                    >
                      <stop stop-opacity="1" stop-color="#d2deff" offset="0" />
                      <stop stop-opacity="1" stop-color="#d4b9fd" offset="1" />
                    </linearGradient>
                    <g xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m512 192.132c0-77.209-114.615-139.799-256-139.799s-256 62.59-256 139.799c0 12.48 2.998 24.577 8.62 36.089 10.007 20.491 12.502 43.828 7.537 66.086-2.036 9.127-3.179 18.59-3.333 28.294-1.235 77.812 61.961 142.061 139.782 142.06 58.443 0 108.503-35.865 129.385-86.785 11.468-27.964 35.565-48.919 65.155-55.077 96.38-20.057 164.854-70.992 164.854-130.667z"
                        fill="url(#SVGID_1_)"
                        data-original="url(#SVGID_1_)"
                      />
                      <g>
                        <g fill="#00c" opacity=".1">
                          <path
                            d="m370.65 418.327c7.666-1.877 14.673-5.824 20.265-11.416 5.591-5.591 9.538-12.599 11.415-20.265.657-2.682-.985-5.389-3.668-6.045-2.685-.662-5.389.985-6.045 3.667-1.442 5.889-4.476 11.274-8.773 15.572-4.298 4.298-9.683 7.332-15.572 8.773-2.682.657-4.324 3.363-3.667 6.045.559 2.283 2.602 3.812 4.852 3.812.394.002.794-.045 1.193-.143z"
                            fill="#742ddd"
                            data-original="#0000cc"
                            class=""
                          />
                          <path
                            d="m368.199 401.118c.394 0 .794-.047 1.193-.145 3.771-.923 7.219-2.866 9.969-5.616s4.692-6.198 5.616-9.969c.657-2.682-.985-5.389-3.667-6.046s-5.389.985-6.046 3.667c-.489 1.995-1.517 3.82-2.974 5.277s-3.282 2.485-5.277 2.974c-2.682.657-4.324 3.364-3.667 6.046.559 2.284 2.603 3.812 4.853 3.812z"
                            fill="#742ddd"
                            data-original="#0000cc"
                            class=""
                          />
                          <path
                            d="m415.901 382.948c-2.685-.659-5.389.985-6.046 3.667-2.325 9.493-7.214 18.171-14.14 25.097-6.925 6.926-15.603 11.815-25.097 14.14-2.682.657-4.324 3.364-3.667 6.046.559 2.283 2.603 3.811 4.853 3.811.394 0 .794-.047 1.193-.145 11.269-2.76 21.57-8.563 29.789-16.782s14.022-18.52 16.782-29.789c.657-2.681-.985-5.388-3.667-6.045z"
                            fill="#742ddd"
                            data-original="#0000cc"
                            class=""
                          />
                        </g>
                        <path
                          d="m451.406 121.393-44.802-44.802c-3.165-3.165-8.297-3.165-11.463 0l-108.137 108.136c-3.165 3.166-3.165 8.298 0 11.463l19.101 19.101c-.531.241-1.035.565-1.472 1.002l-13.18 13.18c-.95.95-1.429 2.188-1.455 3.433l-26.58-26.58c-9.534-9.534-22.955-12.813-35.163-9.836l-19.635-19.635c-3.165-3.166-8.298-3.166-11.463 0l-18.15 18.15-8.979-8.979c-3.165-3.165-8.298-3.165-11.463 0l-9.743 9.743c-3.165 3.165-3.165 8.298 0 11.463l32.932 32.932c-4.89 13.211-2.038 28.638 8.576 39.252l26.58 26.58c-1.245.025-2.483.504-3.434 1.454l-13.18 13.18c-.437.437-.761.941-1.003 1.472l-19.1-19.1c-3.165-3.165-8.298-3.165-11.463 0l-108.136 108.135c-3.165 3.165-3.165 8.298 0 11.463l44.802 44.802c3.165 3.165 8.298 3.165 11.463 0l108.137-108.137c3.165-3.166 3.165-8.298 0-11.463l-19.1-19.1c.531-.241 1.035-.565 1.472-1.002l13.18-13.18c.95-.95 1.429-2.188 1.455-3.433l44.691 44.691c4.53 4.53 11.873 4.53 16.403 0l12.201-12.201c-9.302 20.439-7.479 44.688 5.455 63.635l-.862.862c-4.009 4.009-4.009 10.51 0 14.52 4.01 4.009 10.51 4.009 14.52 0l92.188-92.188c4.009-4.009 4.009-10.51 0-14.52-4.01-4.01-10.51-4.01-14.52 0l-.862.862c-18.947-12.934-43.196-14.756-63.635-5.455l12.201-12.201c4.53-4.53 4.53-11.874 0-16.403l-44.691-44.691c1.245-.025 2.483-.505 3.433-1.454l13.18-13.18c.437-.437.761-.941 1.003-1.472l19.1 19.1c3.165 3.165 8.298 3.165 11.463 0l108.137-108.137c3.163-3.164 3.163-8.296-.002-11.462z"
                          fill="#742ddd"
                          opacity=".1"
                          data-original="#0000cc"
                          class=""
                        />
                        <g>
                          <g>
                            <g fill="#fff">
                              <path
                                d="m243.009 184.243-34.484 34.484-40.12-40.12 28.753-28.753c3.165-3.165 8.298-3.165 11.463 0z"
                                fill="#ffffff"
                                data-original="#ffffff"
                                class=""
                              />
                              <path
                                d="m213.014 202.011-21.206 21.206-42.986-42.986c-3.165-3.165-3.165-8.297 0-11.463l9.743-9.743c3.165-3.165 8.298-3.165 11.463 0z"
                                fill="#ffffff"
                                data-original="#ffffff"
                                class=""
                              />
                              <path
                                d="m308.522 389.604c-25.429-25.429-25.429-66.656 0-92.085s66.656-25.429 92.085 0z"
                                fill="#ffffff"
                                data-original="#ffffff"
                                class=""
                              />
                            </g>
                            <path
                              d="m339.781 272.093-56.685 56.685c-4.53 4.53-11.874 4.53-16.403 0l-76.363-76.363c-14.532-14.532-14.532-38.093 0-52.625l20.463-20.463c14.532-14.532 38.093-14.532 52.625 0l76.363 76.363c4.53 4.529 4.53 11.873 0 16.403z"
                              fill="#a365fd"
                              data-original="#6583fe"
                              class=""
                            />
                            <path
                              d="m240.455 302.54 26.238 26.238c4.53 4.53 11.873 4.53 16.403 0l56.685-56.685c4.53-4.53 4.53-11.874 0-16.403l-26.238-26.238z"
                              fill="#ffffff"
                              data-original="#ffffff"
                              class=""
                            />
                            <g>
                              <g>
                                <path
                                  d="m451.406 105.856-108.137 108.137c-3.165 3.165-8.298 3.165-11.463 0l-44.802-44.802c-3.165-3.165-3.165-8.298 0-11.463l108.137-108.137c3.165-3.165 8.297-3.165 11.463 0l44.802 44.802c3.165 3.166 3.165 8.298 0 11.463z"
                                  fill="#ffffff"
                                  data-original="#ffffff"
                                  class=""
                                />
                                <g fill="#6583fe">
                                  <g>
                                    <path
                                      d="m328.989 166.085-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.582 1.583 4.148 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                    <path
                                      d="m349.431 186.527-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.582 1.583 4.148 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                  </g>
                                  <g>
                                    <path
                                      d="m349.813 145.261-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.732l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.583 1.583 4.149 0 5.732z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                    <path
                                      d="m370.256 165.703-8.788 8.788c-1.583 1.583-4.149 1.583-5.732 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.732 0l8.788 8.788c1.582 1.582 1.582 4.148 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                  </g>
                                  <g>
                                    <path
                                      d="m370.638 124.436-8.788 8.788c-1.583 1.583-4.149 1.583-5.732 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.732 0l8.788 8.788c1.582 1.583 1.582 4.149 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                    <path
                                      d="m391.08 144.879-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.582 1.583 4.148 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                  </g>
                                  <g>
                                    <path
                                      d="m391.462 103.612-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.583 1.583 4.149 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                    <path
                                      d="m411.904 124.054-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.583 1.583 4.149 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                  </g>
                                  <g>
                                    <path
                                      d="m412.286 82.788-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.732l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.583 1.583 4.149 0 5.732z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                    <path
                                      d="m432.728 103.23-8.788 8.788c-1.583 1.583-4.149 1.583-5.732 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.732 0l8.788 8.788c1.583 1.582 1.583 4.148 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                  </g>
                                </g>
                              </g>
                              <g>
                                <path
                                  d="m224.996 332.266-108.137 108.137c-3.165 3.165-8.298 3.165-11.463 0l-44.802-44.803c-3.165-3.165-3.165-8.298 0-11.463l108.137-108.137c3.165-3.165 8.298-3.165 11.463 0l44.802 44.802c3.165 3.166 3.165 8.299 0 11.464z"
                                  fill="#ffffff"
                                  data-original="#ffffff"
                                  class=""
                                />
                                <g fill="#6583fe">
                                  <g>
                                    <path
                                      d="m102.579 392.495-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.582 1.583 4.148 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                    <path
                                      d="m123.022 412.937-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.732l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.582 1.583 1.582 4.149 0 5.732z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                  </g>
                                  <g>
                                    <path
                                      d="m123.404 371.671-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.732l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.582 1.583 1.582 4.149 0 5.732z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                    <path
                                      d="m143.846 392.113-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.582 1.583 4.148 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                  </g>
                                  <g>
                                    <path
                                      d="m144.228 350.846-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.732l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.584 1.583 4.15 0 5.732z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                    <path
                                      d="m164.67 371.288-8.788 8.788c-1.583 1.583-4.149 1.583-5.732 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.732 0l8.788 8.788c1.583 1.583 1.583 4.149 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                  </g>
                                  <g>
                                    <path
                                      d="m165.052 330.022-8.788 8.788c-1.583 1.583-4.149 1.583-5.732 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.732 0l8.788 8.788c1.583 1.582 1.583 4.148 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                    <path
                                      d="m185.494 350.464-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.732l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.583 1.583 4.15 0 5.732z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                  </g>
                                  <g>
                                    <path
                                      d="m185.876 309.198-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.582 1.583 4.148 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                    <path
                                      d="m206.318 329.64-8.788 8.788c-1.583 1.583-4.149 1.583-5.731 0l-8.788-8.788c-1.583-1.583-1.583-4.149 0-5.731l8.788-8.788c1.583-1.583 4.149-1.583 5.731 0l8.788 8.788c1.583 1.582 1.583 4.148 0 5.731z"
                                      fill="#000000"
                                      data-original="#000000"
                                      class=""
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                            <path
                              d="m406.597 303.406-92.188 92.188c-4.01 4.009-10.51 4.009-14.52 0-4.009-4.009-4.009-10.51 0-14.52l92.188-92.188c4.01-4.01 10.51-4.01 14.52 0 4.01 4.01 4.01 10.511 0 14.52z"
                              fill="#ffffff"
                              data-original="#ffffff"
                              class=""
                            />
                          </g>
                          <g>
                            <g>
                              <path
                                d="m231.008 270.107-3.77-3.77c-4.602-4.602-4.602-12.09 0-16.692l11.636-11.637c4.602-4.602 12.09-4.602 16.692 0l3.77 3.77c4.602 4.602 4.602 12.09 0 16.692l-11.637 11.637c-4.601 4.601-12.089 4.601-16.691 0zm17.487-25.027c-.703-.703-1.846-.703-2.549 0l-11.637 11.637c-.703.703-.703 1.846 0 2.549l3.77 3.77c.703.703 1.846.703 2.549 0l11.637-11.637c.703-.703.703-1.846 0-2.549z"
                                fill="#742ddd"
                                data-original="#0000cc"
                                class=""
                              />
                            </g>
                            <g>
                              <path
                                d="m251.384 290.483c-1.952-1.953-1.952-5.119 0-7.071l17.722-17.722-.314-.314c-1.953-1.952-1.953-5.118 0-7.071 1.952-1.953 5.118-1.953 7.071 0l3.85 3.85c1.952 1.952 1.952 5.119 0 7.071l-21.257 21.257c-1.953 1.953-5.119 1.953-7.072 0z"
                                fill="#742ddd"
                                data-original="#0000cc"
                                class=""
                              />
                            </g>
                          </g>
                          <g>
                            <path
                              d="m215.251 237.533-13.701-13.701c-1.953-1.953-1.952-5.118 0-7.071s5.118-1.953 7.071 0l13.701 13.701c1.953 1.953 1.952 5.119 0 7.071s-5.118 1.952-7.071 0z"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                          </g>
                          <g fill="#00c">
                            <path
                              d="m370.65 391.327c7.666-1.877 14.673-5.824 20.265-11.416 5.591-5.591 9.538-12.599 11.415-20.265.657-2.682-.985-5.389-3.668-6.045-2.685-.662-5.389.985-6.045 3.667-1.442 5.889-4.476 11.274-8.773 15.572-4.298 4.298-9.683 7.332-15.572 8.773-2.682.657-4.324 3.363-3.667 6.045.559 2.283 2.602 3.812 4.852 3.812.394.002.794-.045 1.193-.143z"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                            <path
                              d="m368.199 374.118c.394 0 .794-.047 1.193-.145 3.771-.923 7.219-2.866 9.969-5.616s4.692-6.198 5.616-9.969c.657-2.682-.985-5.389-3.667-6.046-2.682-.656-5.389.985-6.046 3.667-.489 1.995-1.517 3.82-2.974 5.277s-3.282 2.485-5.277 2.974c-2.682.657-4.324 3.364-3.667 6.046.559 2.284 2.603 3.812 4.853 3.812z"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                            <path
                              d="m415.901 355.948c-2.685-.66-5.389.986-6.046 3.667-2.325 9.493-7.214 18.171-14.14 25.097-6.925 6.926-15.603 11.815-25.097 14.14-2.682.657-4.324 3.364-3.667 6.046.559 2.283 2.603 3.811 4.853 3.811.394 0 .794-.047 1.193-.145 11.269-2.76 21.57-8.563 29.789-16.782s14.022-18.52 16.782-29.789c.657-2.681-.985-5.388-3.667-6.045z"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                            <path
                              d="m454.941 90.858-44.802-44.802c-5.11-5.109-13.424-5.109-18.534 0l-108.136 108.136c-2.476 2.475-3.839 5.766-3.839 9.267s1.363 6.792 3.838 9.267l18.865 18.865-9.789 9.789-25.59-25.59c-10.064-10.063-23.984-13.961-37.046-11.718l-17.753-17.753c-5.109-5.109-13.423-5.109-18.534 0l-14.614 14.614-5.444-5.444c-5.11-5.109-13.424-5.109-18.534 0l-9.743 9.744c-2.476 2.475-3.839 5.766-3.839 9.267s1.363 6.792 3.838 9.267l30.775 30.775c-4.032 14.248-.461 30.215 10.732 41.409l25.59 25.59-9.79 9.789-18.865-18.866c-2.476-2.475-5.767-3.838-9.267-3.838-3.501 0-6.792 1.363-9.267 3.838l-108.134 108.138c-2.476 2.475-3.839 5.766-3.839 9.267 0 3.5 1.363 6.792 3.838 9.267l44.803 44.803c2.555 2.555 5.911 3.832 9.267 3.832s6.712-1.277 9.267-3.832l62.169-62.169c1.953-1.953 1.953-5.119 0-7.071s-5.118-1.952-7.071 0l-62.168 62.169c-1.211 1.211-3.182 1.211-4.392 0l-44.803-44.803c-.587-.586-.91-1.366-.91-2.196s.323-1.609.91-2.196l108.137-108.137c1.173-1.173 3.219-1.173 4.392.001l44.803 44.803c.587.586.909 1.366.909 2.195 0 .83-.323 1.61-.91 2.196l-21.926 21.926c-1.953 1.953-1.953 5.119 0 7.071s5.118 1.952 7.071 0l21.926-21.926c2.476-2.476 3.838-5.767 3.838-9.267s-1.363-6.792-3.838-9.267l-18.866-18.866 9.79-9.79 43.702 43.701c3.135 3.135 7.304 4.862 11.737 4.862 3.772 0 7.346-1.26 10.261-3.564-.463 3.268-.704 6.591-.704 9.95 0 12.968 3.516 25.387 10.066 36.201-1.71 2.509-2.635 5.468-2.635 8.571 0 4.078 1.588 7.912 4.472 10.795 2.976 2.976 6.886 4.464 10.795 4.464 3.91 0 7.819-1.488 10.795-4.464l92.188-92.188c5.952-5.952 5.952-15.638 0-21.59-2.883-2.884-6.717-4.472-10.795-4.472-3.104 0-6.063.925-8.573 2.636-10.815-6.549-23.233-10.067-36.2-10.067-3.36 0-6.682.239-9.95.704 2.304-2.915 3.564-6.489 3.564-10.261 0-4.434-1.727-8.602-4.862-11.737l-43.701-43.701 9.789-9.789 18.865 18.865c2.476 2.475 5.767 3.838 9.267 3.838 3.501 0 6.792-1.363 9.267-3.838l108.137-108.137c5.11-5.109 5.11-13.424 0-18.533zm-254.249 62.532c1.211-1.211 3.182-1.211 4.392 0l14.054 14.054c-4.302 2.018-8.332 4.798-11.881 8.346l-6.696 6.696-14.482-14.482zm-48.334 23.306c-.587-.586-.91-1.366-.91-2.196s.323-1.609.91-2.196l9.743-9.744c.605-.605 1.4-.908 2.196-.908s1.59.303 2.196.908l26.997 26.997-6.696 6.696c-2.567 2.567-4.734 5.386-6.5 8.378zm230.839 114-8.478 8.478c-1.953 1.953-1.953 5.119 0 7.071s5.118 1.952 7.071 0l13.823-13.824c.995-.995 2.317-1.543 3.724-1.543s2.73.548 3.724 1.543c2.053 2.054 2.054 5.396 0 7.449l-92.188 92.188c-2.053 2.054-5.394 2.054-7.448 0-2.054-2.053-2.054-5.395 0-7.448l54.323-54.323c1.953-1.953 1.953-5.119 0-7.071s-5.118-1.952-7.071 0l-48.977 48.976c-4.725-8.69-7.249-18.463-7.249-28.631 0-8.431 1.74-16.59 5.02-24.088l31.005-31.005c7.498-3.281 15.657-5.021 24.088-5.021 10.169.001 19.943 2.525 28.633 7.249zm-46.951-22.139-56.685 56.685c-2.572 2.573-6.76 2.573-9.332 0l-76.363-76.363c-12.559-12.559-12.559-32.995 0-45.554l20.463-20.463c6.28-6.28 14.527-9.419 22.777-9.419 8.247 0 16.498 3.141 22.777 9.419l76.363 76.363c2.573 2.573 2.573 6.76 0 9.332zm111.624-166.237-108.137 108.138c-1.173 1.173-3.219 1.173-4.392-.001l-44.802-44.802c-.587-.586-.91-1.366-.91-2.196s.323-1.609.91-2.196l108.137-108.136c.605-.605 1.4-.908 2.196-.908.795 0 1.59.303 2.196.908l44.802 44.802c1.211 1.211 1.211 3.181 0 4.391z"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                          </g>
                          <g>
                            <path
                              d="m309.032 267.741c-2.005-2.005-2.004-5.255 0-7.259l2.541-2.541c2.004-2.004 5.254-2.005 7.259 0s2.004 5.255 0 7.259l-2.541 2.541c-2.004 2.004-5.254 2.005-7.259 0z"
                              fill="#742ddd"
                              data-original="#0000cc"
                              class=""
                            />
                          </g>
                        </g>
                        <g>
                          <path
                            d="m71 250.558c-1.28 0-2.559-.488-3.536-1.464l-11-11c-1.953-1.953-1.953-5.119 0-7.071l11-11c1.953-1.952 5.118-1.952 7.071 0l11 11c1.953 1.953 1.953 5.119 0 7.071l-11 11c-.976.976-2.255 1.464-3.535 1.464zm-3.929-16 3.929 3.928 3.929-3.929-3.929-3.928z"
                            fill="#a365fd"
                            data-original="#6583fe"
                            class=""
                          />
                        </g>
                        <g>
                          <path
                            d="m253.014 129.294c-1.28 0-2.559-.488-3.536-1.464l-11-11c-1.953-1.953-1.953-5.119 0-7.071l11-11c1.953-1.952 5.118-1.952 7.071 0l11 11c1.953 1.953 1.953 5.119 0 7.071l-11 11c-.976.976-2.255 1.464-3.535 1.464zm-3.929-16 3.929 3.929 3.929-3.929-3.929-3.929z"
                            fill="#a365fd"
                            data-original="#6583fe"
                            class=""
                          />
                        </g>
                        <g>
                          <path
                            d="m320.335 449.337c-1.28 0-2.559-.488-3.536-1.464l-11-11c-1.953-1.953-1.953-5.119 0-7.071l11-11c1.953-1.952 5.118-1.952 7.071 0l11 11c1.953 1.953 1.953 5.119 0 7.071l-11 11c-.975.975-2.255 1.464-3.535 1.464zm-3.928-16 3.929 3.929 3.929-3.929-3.929-3.929z"
                            fill="#a365fd"
                            data-original="#6583fe"
                            class=""
                          />
                        </g>
                        <g>
                          <path
                            d="m194.665 113.376c-7.175 0-13.012-5.837-13.012-13.012s5.837-13.012 13.012-13.012 13.012 5.837 13.012 13.012c-.001 7.175-5.838 13.012-13.012 13.012zm0-16.023c-1.661 0-3.012 1.351-3.012 3.012s1.351 3.012 3.012 3.012 3.012-1.351 3.012-3.012c-.001-1.661-1.352-3.012-3.012-3.012z"
                            fill="#a365fd"
                            data-original="#6583fe"
                            class=""
                          />
                        </g>
                        <g>
                          <path
                            d="m408.095 251.675c-7.175 0-13.012-5.837-13.012-13.012s5.837-13.012 13.012-13.012 13.012 5.837 13.012 13.012-5.838 13.012-13.012 13.012zm0-16.023c-1.661 0-3.012 1.351-3.012 3.012s1.351 3.012 3.012 3.012 3.012-1.351 3.012-3.012c-.001-1.661-1.352-3.012-3.012-3.012z"
                            fill="#a365fd"
                            data-original="#6583fe"
                            class=""
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>

                <Typography variant="h6">Number Lookup</Typography>
                <Typography variant="display1">
                  Enterprise grade communications stack for your business
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper
                variant="outlined"
                square
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  borderBottom: 0,
                  borderRight: 0,
                  borderTop: 0,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="60"
                  height="60"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  class=""
                >
                  <g>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_1_"
                      gradientUnits="userSpaceOnUse"
                      x1="432.334"
                      x2="198.334"
                      y1="502.645"
                      y2="192.646"
                    >
                      <stop stop-opacity="1" stop-color="#d2deff" offset="0" />
                      <stop stop-opacity="1" stop-color="#e0caff" offset="1" />
                    </linearGradient>
                    <g xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m501.873 153.583c-22.357-56.888-91.226-91.003-149.556-68.427-66.582 25.77-44.506 131.673-104.983 153.088-32.669 11.568-80.962-31.644-113.969-38.271-60.821-12.21-115.881 30.705-129.439 90.134-13.832 60.63 8.353 141.61 74.967 158.066 79.35 19.602 120.683-51.729 187.249-72.211 68.31-21.019 144.263 28.622 200.814-31.776 41.78-44.62 57.055-134.271 34.917-190.603z"
                        fill="url(#SVGID_1_)"
                        data-original="url(#SVGID_1_)"
                      />
                      <g>
                        <path
                          d="m476.847 178.593c0-39.497-32.019-71.517-71.517-71.517-30.6 0-56.699 19.225-66.91 46.25h-258.608c-11.046 0-20 8.954-20 20v221.41c0 11.046 8.954 20 20 20h352.375c11.046 0 20-8.954 20-20v-162.14c15.099-13.113 24.66-32.435 24.66-54.003z"
                          fill="#742ddd"
                          opacity=".1"
                          data-original="#2626bc"
                          class=""
                        />
                        <g>
                          <g fill="#fff">
                            <path
                              d="m432.187 389.736h-352.375c-11.046 0-20-8.954-20-20v-221.41c0-11.046 8.954-20 20-20h352.375c11.046 0 20 8.954 20 20v221.41c0 11.046-8.954 20-20 20z"
                              fill="#ffffff"
                              data-original="#ffffff"
                              class=""
                            />
                            <path
                              d="m262.092 223.711 190.096 146.025c0 11.046-8.954 20-20 20h-352.376c-11.046 0-20-8.954-20-20l190.096-146.025c3.593-2.76 8.591-2.76 12.184 0z"
                              fill="#ffffff"
                              data-original="#ffffff"
                              class=""
                            />
                            <path
                              d="m249.908 294.352-190.096-146.026c0-11.046 8.954-20 20-20h352.375c11.046 0 20 8.954 20 20l-190.095 146.026c-3.593 2.759-8.591 2.759-12.184 0z"
                              fill="#ffffff"
                              data-original="#ffffff"
                              class=""
                            />
                          </g>
                          <g>
                            <path
                              d="m370.947 363.125h-32.134c-2.762 0-5-2.238-5-5v-22.154c0-2.761 2.238-5 5-5h32.134c2.762 0 5 2.239 5 5v22.154c0 2.762-2.238 5-5 5z"
                              fill="#a367fb"
                              data-original="#6583fe"
                              class=""
                            />
                            <g>
                              <g>
                                <g>
                                  <path
                                    d="m311.871 342.743h-27.833c-2.762 0-5-2.239-5-5s2.238-5 5-5h27.833c2.762 0 5 2.239 5 5s-2.238 5-5 5z"
                                    fill="#742ddd"
                                    data-original="#2626bc"
                                    class=""
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path
                                    d="m311.871 363.125h-97.833c-2.762 0-5-2.239-5-5s2.238-5 5-5h97.833c2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"
                                    fill="#742ddd"
                                    data-original="#2626bc"
                                    class=""
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                          <g>
                            <ellipse
                              cx="405.33"
                              cy="153.593"
                              fill="#a367fb"
                              rx="71.517"
                              ry="71.517"
                              transform="matrix(.16 -.987 .987 .16 188.793 529.087)"
                              data-original="#6583fe"
                              class=""
                            />
                            <path
                              d="m405.33 230.11c42.191 0 76.517-34.325 76.517-76.517s-34.325-76.517-76.517-76.517-76.517 34.325-76.517 76.517c0 24.544 11.629 46.41 29.653 60.421l-99.42 76.372c-1.791 1.378-4.297 1.379-6.092 0l-187.962-144.386c1.121-7.17 7.341-12.674 14.82-12.674h229.366c2.762 0 5-2.239 5-5s-2.238-5-5-5h-229.366c-13.785 0-25 11.215-25 25v221.41c0 13.785 11.215 25 25 25h352.375c13.785 0 25-11.215 25-25v-132.14c0-2.761-2.238-5-5-5s-5 2.239-5 5v121.994l-130.907-100.559 50.94-39.13c11.23 6.48 24.239 10.209 38.11 10.209zm-209.61 28.921-130.908 100.559v-201.118zm251.27 113.018c-1.118 7.174-7.32 12.687-14.803 12.687h-352.375c-7.483 0-13.685-5.513-14.803-12.687l138.919-106.713 42.934 32.98c2.69 2.066 5.914 3.1 9.138 3.1s6.447-1.033 9.138-3.1l42.934-32.981zm-108.177-218.456c0-36.677 29.839-66.517 66.517-66.517s66.517 29.839 66.517 66.517c0 36.677-29.839 66.517-66.517 66.517s-66.517-29.84-66.517-66.517z"
                              fill="#742ddd"
                              data-original="#2626bc"
                              class=""
                            />
                          </g>
                          <path
                            d="m374.114 129.204 10.206 24.389-10.206 24.389c-1.733 4.142 2.448 8.292 6.577 6.528l61.619-26.319c4.048-1.729 4.048-7.467 0-9.196l-61.619-26.319c-4.129-1.764-8.31 2.386-6.577 6.528z"
                            fill="#ffffff"
                            data-original="#ffffff"
                            class=""
                          />
                        </g>
                        <g fill="#6583fe">
                          <path
                            d="m330.828 81.671c-3.714 0-7.427-1.413-10.253-4.24-5.654-5.654-5.654-14.853 0-20.506 5.651-5.652 14.852-5.654 20.505 0 5.654 5.654 5.654 14.853 0 20.506-2.826 2.827-6.539 4.24-10.252 4.24zm0-18.991c-1.152 0-2.305.438-3.183 1.316-1.754 1.754-1.754 4.609 0 6.364 1.756 1.754 4.608 1.755 6.364 0 1.754-1.754 1.754-4.609 0-6.364-.877-.877-2.03-1.316-3.181-1.316z"
                            fill="#a367fb"
                            data-original="#6583fe"
                            class=""
                          />
                          <path
                            d="m218.538 459.315c-3.713 0-7.427-1.414-10.253-4.24-5.654-5.654-5.654-14.853 0-20.506 5.652-5.653 14.854-5.653 20.506 0 5.654 5.654 5.654 14.853 0 20.506-2.826 2.827-6.54 4.24-10.253 4.24zm0-18.991c-1.152 0-2.305.438-3.183 1.316-1.754 1.754-1.754 4.609 0 6.364 1.756 1.755 4.609 1.755 6.365 0 1.754-1.754 1.754-4.609 0-6.364-.877-.877-2.03-1.316-3.182-1.316z"
                            fill="#a367fb"
                            data-original="#6583fe"
                            class=""
                          />
                          <path
                            d="m294.78 94.547c-1.279 0-2.56-.488-3.535-1.464l-5.965-5.964-5.965 5.964c-1.951 1.952-5.119 1.952-7.07 0-1.953-1.953-1.953-5.119 0-7.071l9.5-9.5c1.951-1.952 5.119-1.952 7.07 0l9.5 9.5c1.953 1.953 1.953 5.119 0 7.071-.975.975-2.255 1.464-3.535 1.464z"
                            fill="#a367fb"
                            data-original="#6583fe"
                            class=""
                          />
                          <path
                            d="m439.746 440.322c-1.279 0-2.56-.488-3.535-1.464l-5.965-5.964-5.965 5.964c-1.951 1.952-5.119 1.952-7.07 0-1.953-1.953-1.953-5.119 0-7.071l9.5-9.5c1.951-1.952 5.119-1.952 7.07 0l9.5 9.5c1.953 1.953 1.953 5.119 0 7.071-.975.975-2.256 1.464-3.535 1.464z"
                            fill="#a367fb"
                            data-original="#6583fe"
                            class=""
                          />
                          <path
                            d="m178.884 445.072c-1.279 0-2.56-.488-3.535-1.464l-5.965-5.964-5.965 5.964c-1.951 1.952-5.119 1.952-7.07 0-1.953-1.953-1.953-5.119 0-7.071l9.5-9.5c1.951-1.952 5.119-1.952 7.07 0l9.5 9.5c1.953 1.953 1.953 5.119 0 7.071-.976.975-2.256 1.464-3.535 1.464z"
                            fill="#a367fb"
                            data-original="#6583fe"
                            class=""
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <Typography variant="h6">Emails</Typography>
                <Typography variant="display1">
                  Enterprise grade communications stack for your business
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
        <Box elevation={0} my={7}>
          <Grid container>
            <Grid item xs={12} className={classes.centerContent}>
              <Box mb={3}>
                <Typography variant="h5">What is OTP?</Typography>
                <Typography variant="body2">
                  Route OTP is a security solution that ensures safe and secure
                  login process. Integrate Route OTP in your existing system and
                  manage the entire end to end business process ranging from OTP
                  generation, delivery via SMS, time tracking and authentication
                  without utilizing any additional resources.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} className={classes.centerContent}>
              <Paper
                elevation={0}
                square
                style={{ padding: ".2rem", background: "transparent" }}
              >
                <img height="100" src={Freepik} alt="logo" />
              </Paper>
            </Grid>
            <Grid item xs={6} className={classes.centerContent}>
              <Box>
                <Typography variant="h5">
                  How does it benefit your business?
                </Typography>
                <Box display="flex" my={3}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    style={{ background: "white", width: 50, height: 50 }}
                  >
                    <PhotoCamera />
                  </IconButton>
                  <Box ml={3}>
                    <Typography variant="h6">Easy Deployment</Typography>
                    <Typography variant="body2">
                      Effortlessly integrate two API’s within few minutes before
                      starting the service
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" my={3}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    style={{ background: "white", width: 50, height: 50 }}
                  >
                    <PhotoCamera />
                  </IconButton>
                  <Box ml={3}>
                    <Typography variant="h6">
                      Customizable Time Period
                    </Typography>
                    <Typography variant="body2">
                      Set the validity of your OTP as per your suitability and
                      specification
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" my={3}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    style={{ background: "white", width: 50, height: 50 }}
                  >
                    <PhotoCamera />
                  </IconButton>
                  <Box ml={3}>
                    <Typography variant="h6">
                      Deployment at Multiple Locations
                    </Typography>
                    <Typography variant="body2">
                      Extend your workflow with the ability to assign tags for
                      each instances based on your requirement.
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" my={3}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    style={{ background: "white", width: 50, height: 50 }}
                  >
                    <PhotoCamera />
                  </IconButton>
                  <Box ml={3}>
                    <Typography variant="h6">Manage OTP Security</Typography>
                    <Typography variant="body2">
                      Administer the security by adjoining variations in the
                      length of the password between 4 to 6 digits
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Paper
        className={classes.goodies}
        style={{ textAlign: "center", padding: "9rem" }}
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Box mb={3}>
              <Typography variant="h4">Pricing</Typography>
            </Box>
            <Box mb={4}>
              <SearchInput />
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <Box p={2}>
                    <Typography variant="body1">Sending Messages</Typography>
                    <Box display="flex" justifyContent="space-around" my={3}>
                      <Box display="flex">
                        <Typography variant="h5">$</Typography>
                        <Typography variant="h3">0.005</Typography>
                        <Typography
                          variant="caption"
                          style={{ alignSelf: "flex-end" }}
                        >
                          /sms
                        </Typography>
                      </Box>
                    </Box>
                    <List>
                      <ListItem button>
                        <ListItemText primary={`hello`} />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary={`hello`} />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary={`hello`} />
                      </ListItem>
                    </List>
                    <Button
                      style={{ display: "block", width: "100%" }}
                      variant="contained"
                    >
                      Default
                    </Button>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <Box p={2}>
                    <Typography variant="body1">Sending Messages</Typography>
                    <Box display="flex" justifyContent="space-around" my={3}>
                      <Box display="flex">
                        <Typography variant="h5">$</Typography>
                        <Typography variant="h3">0.005</Typography>
                        <Typography
                          variant="caption"
                          style={{ alignSelf: "flex-end" }}
                        >
                          /sms
                        </Typography>
                      </Box>
                    </Box>
                    <List>
                      <ListItem button>
                        <ListItemText primary={`hello`} />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary={`hello`} />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary={`hello`} />
                      </ListItem>
                    </List>
                    <Button
                      style={{ display: "block", width: "100%" }}
                      variant="contained"
                    >
                      Default
                    </Button>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <Box p={2}>
                    <Typography variant="body1">Sending Messages</Typography>
                    <Box display="flex" justifyContent="space-around" my={3}>
                      <Box display="flex">
                        <Typography variant="h5">$</Typography>
                        <Typography variant="h3">0.005</Typography>
                        <Typography
                          variant="caption"
                          style={{ alignSelf: "flex-end" }}
                        >
                          /sms
                        </Typography>
                      </Box>
                    </Box>
                    <List>
                      <ListItem button>
                        <ListItemText primary={`hello`} />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary={`hello`} />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary={`hello`} />
                      </ListItem>
                    </List>
                    <Button
                      style={{ display: "block", width: "100%" }}
                      variant="contained"
                    >
                      Default
                    </Button>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <Box p={2}>
                    <Typography variant="body1">Sending Messages</Typography>
                    <Box display="flex" justifyContent="space-around" my={3}>
                      <Box display="flex">
                        <Typography variant="h5">$</Typography>
                        <Typography variant="h3">0.005</Typography>
                        <Typography
                          variant="caption"
                          style={{ alignSelf: "flex-end" }}
                        >
                          /sms
                        </Typography>
                      </Box>
                    </Box>
                    <List>
                      <ListItem button>
                        <ListItemText primary={`hello`} />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary={`hello`} />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary={`hello`} />
                      </ListItem>
                    </List>
                    <Button
                      style={{ display: "block", width: "100%" }}
                      variant="contained"
                    >
                      Default
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
      <Container style={{ marginBottom: '7rem' }}>
        <Grid container spacing={3}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <ExpertForm />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
