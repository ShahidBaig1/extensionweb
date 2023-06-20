import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import Data from "./Data";
import Trems from "./index";

export default function TremsToUse() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.innerFrist}>
        <Typography variant="h5">Last Updated: April 12, 2023</Typography>
        <Box>
          <Typography variant="body1">AGREEMENT TO OUR LEGAL TERMS:</Typography>
        </Box>
        <Box>
          <Typography>
            We are nūton AI ("<b>Company,</b>" "<b>we</b>," "<b>us</b>," "
            <b>our</b>").
          </Typography>
        </Box>
        <div>
          <Typography>
            We operate the website http://www.nuton.ai (the "<b>Site</b>"), the
            mobile application nūton (the "<b>App</b>"), as well as any other
            related products and services that refer or link to these legal
            terms (the "<b>Legal Terms</b>") (collectively, the "<b>Services</b>
            ").
          </Typography>
        </div>
        <div>
          <Typography>
            In order to resolve a complaint regarding the Services or to receive
            further information regarding the use of the Services, please
            contact us at: <b>info@nuton.ai</b>
          </Typography>
        </div>
        <div>
          <Typography>
            These Legal Terms constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity ("
            <b>you</b>"), and nūton AI, concerning your access to and use of the
            Services. You agree that by accessing the Services, you have read,
            understood, and agreed to be bound by all of these Legal Terms. IF
            YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
            EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </Typography>
        </div>
        <div>
          <Typography>
            {" "}
            These Legal Terms constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity ("you"),
            and nūton AI, concerning your access to and use of the Services. You
            agree that by accessing the Services, you have read, understood, and
            agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE
            WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED
            FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </Typography>
        </div>
        <div>
          <Typography>
            We will provide you with prior notice of any scheduled changes to
            the Services you are using. The modified Legal Terms will become
            effective upon posting or notifying you by info@nuton.ai, as stated
            in the email message. By continuing to use the Services after the
            effective date of any changes, you agree to be bound by the modified
            terms. All users who are minors in the jurisdiction in which they
            reside (generally under the age of 18) must have the permission of,
            and be directly supervised by, their parent or guardian to use the
            Services. If you are a minor, you must have your parent or guardian
            read and agree to these Legal Terms prior to you using the Services.
          </Typography>
        </div>
        <div>
          <Typography>
            We recommend that you print a copy of these Legal Terms for your
            records.
          </Typography>
        </div>
      </div>
      {Data.map((val, i) => {
        return (
          <div>
            <Trems key={i} Question={val.Question} Answer={val.Answer} />
          </div>
        );
      })}
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  innerFrist: {
    padding: 25,
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    backgroundColor: theme.palette.primary.main,
  },
  main: {
    width: "90%",
    margin: "auto",

    display: "flex",
    flexDirection: "column",
    gap: "30px",
    marginBottom: 10,
  },
}));
