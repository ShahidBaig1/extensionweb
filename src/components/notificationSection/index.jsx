import { Badge, Box, makeStyles } from "@material-ui/core";
import MailLineIcon from "remixicon-react/MailLineIcon";
import Notification2LineIcon from "remixicon-react/Notification2LineIcon";
const NotificationsSection = () => {
  const classes = useStyles();
  return (
    <Box>
      {" "}
      <Box className={classes.navparttwo}>
        <Box className={classes.iconNav}>
          <Badge badgeContent="2" color="secondary">
            <Box className={classes.iconContainer}>
              <MailLineIcon className={classes.icon} />
            </Box>
          </Badge>
          <Badge badgeContent="2" color="secondary">
            <Box className={classes.iconContainer}>
              <Notification2LineIcon className={classes.icon} />
            </Box>
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationsSection;

const useStyles = makeStyles((theme) => ({
  navparttwo: {
    borderRadius: 10,
    alignItems: "center",
  },
  iconNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    cursor: "pointer",
    gap: 20,
    "& .MuiBadge-badge": {
      height: 15,
      width: 15,
      fontSize: 10,
      padding: 0,
      minWidth: "unset",
    },
  },
  iconContainer: {
    backgroundColor: theme.palette.background.default,
    padding: "8px 10px",
    borderRadius: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
}));
