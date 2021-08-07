import React from "react";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        textDecoration: 'none',
        color: "#fff",
        marginLeft: "15px"
    },
}));

export default function Logo() {
    const classes = useStyles();
    return (
        <Link style={{ display: 'flex', alignItems: 'center' }} to="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 247.052 188.296"
            >
                <g
                    id="Group_2"
                    data-name="Group 2"
                    transform="translate(-273.474 -409.808)"
                >
                    <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M152.5,204.883a30.247,30.247,0,0,1-13.291-3.079,29.6,29.6,0,0,1-5.912-3.849,30.357,30.357,0,0,1-5.032-5.389s3.814,8.979-8.473-11.613-.739-34.352-.739-34.352L174.478,42.363S189.07,17.212,213.533,16.78s32.44,0,32.44,0a30.6,30.6,0,0,1,8.68,1.236,29.193,29.193,0,0,1,7.493,3.427,30.433,30.433,0,0,1,13.827,27.206,29.192,29.192,0,0,1-1.649,8.073,30.6,30.6,0,0,1-4.118,7.741l-93.472,128.1a30.358,30.358,0,0,1-5.032,5.389,29.6,29.6,0,0,1-5.912,3.849A30.247,30.247,0,0,1,152.5,204.883ZM92.419,143.441,80.931,127.694,34.793,64.463a30.6,30.6,0,0,1-4.118-7.741,29.2,29.2,0,0,1-1.648-8.073A30.433,30.433,0,0,1,42.854,21.442a29.194,29.194,0,0,1,7.493-3.427,30.6,30.6,0,0,1,8.68-1.236H132.1s26.34-.463,15.809,22.3S115.625,99.8,104.749,120.253Z"
                        transform="translate(244.5 393.221)"
                        fill="#f7f2fd"
                    />
                </g>
            </svg>
            <Typography variant="h6" className={classes.title}>
                Vamoo
            </Typography>
        </Link>);
}