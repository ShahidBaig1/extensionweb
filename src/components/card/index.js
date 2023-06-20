import { Box, makeStyles, Typography } from "@material-ui/core";
import UserLineIcon from "remixicon-react/UserLineIcon";
import Calendar2FillIcon from "remixicon-react/Calendar2FillIcon";
import LikeBtn from "../likeBtn";
import ShareBtn from "../shareBtn";

const Card = ({
  headerMainIcon,
  headerSecondaryIcon,
  heading,
  text,
  behave = "black",
}) => {
  const classes = useStyle({ behave });
  return (
    <div className={classes.cardCont}>
      <div className={classes.header}>
        {headerMainIcon}
        <div style={{ display: "flex" }}>
          <LikeBtn />
          <Box pr="10px" />
          <ShareBtn />
        </div>
        <div>{headerSecondaryIcon}</div>
      </div>
      <div className={classes.cardBody}>
        <Typography className={classes.heading}>{heading}</Typography>
        <Typography className={classes.text}>{text}</Typography>
      </div>
      <div className={classes.cardFooter}>
        <div style={{ display: "flex" }}>
          <UserLineIcon />
          <Typography className={classes.footerText}>only you</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Calendar2FillIcon />
          <Typography className={classes.footerText}>12 jan 2021</Typography>
        </div>
      </div>
    </div>
  );
};

export default Card;

const useStyle = makeStyles((theme) => ({
  cardCont: {
    background: theme.palette.primary.main,

    minHeight: "270px",
    maxHeight: "270px",
    maxWidth: "300px",

    color: (Props) => Props.behave,
    boxShadow: "1px 0px 3px 5px rgb(0 0 0 / 5%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    padding: "10px 10px 3px 10px",
    cursor: "pointer",

    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",

    "&:hover": {
      backgroundColor: (Props) => Props.behave,
      borderRadius: "10px",
      color: "white",
      "& $cardBody": {
        color: "white",
        "& $text": {
          color: "white",
        },
      },
    },

    borderBottom: "5px solid",
    borderColor: (Props) => Props.behave,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },

  text: {
    fontFamily: " Roboto,sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "26px",
    padding: 0,
    margin: 0,
    color: "#768492",
    marginTop: "10px",
    display: " -webkit-box",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  },
  heading: {
    fontFamily: "Jost,sans-serif",
    fontWeight: 400,
    margin: 0,
    lineHeight: 1,

    fontSize: "1.44em",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
  },

  footerText: {
    fontFamily: " Roboto,sans-serif",
    fontWeight: 800,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "26px",
    marginLeft: "10px",
  },
  cardBody: {},
}));
