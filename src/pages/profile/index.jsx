import { Box, makeStyles, Typography } from "@material-ui/core";
import ProfilePicture from "../../components/profilePicture";
import Tile from "../../components/tile";
import { ReactComponent as HandSvg } from "../../assets/svgs/hand.svg";
import { ReactComponent as AwardSvg } from "../../assets/svgs/awards.svg";
import { ReactComponent as ExperienceSvg } from "../../assets/svgs/experience.svg";
import SkilsSection from "../../components/SkillsSection";
const Profile = () => {
  const classes = useStyles();
  console.log("xyz");
  return (
    <Box className={classes.container}>
      <Box>
        <ProfilePicture />
      </Box>
      <Box className={classes.tilesContainer}>
        <Tile>
          <Typography variant="h5">Personal Profile</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque.
          </Typography>
        </Tile>
        <Tile icon={AwardSvg} title="Awards" amount="42+" fill={"#1f1c2f"} />
        <Tile
          icon={ExperienceSvg}
          title="Experience"
          amount="4+ years"
          fill="#8ac3a3"
        />
        <Tile
          icon={HandSvg}
          title="Participation"
          amount="424+"
          fill={"#f0864a"}
        />
      </Box>
      <Box>
        <SkilsSection />
      </Box>
    </Box>
  );
};

export default Profile;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gap: 30,
  },
  tilesContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: 30,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr ",
      gap: 25,
    },
    [theme.breakpoints.down("sm")]: {
      gap: 20,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr ",
      gap: 15,
    },
  },
  educationContainer: {
    display: "grid",
    gap: 20,
  },
}));
