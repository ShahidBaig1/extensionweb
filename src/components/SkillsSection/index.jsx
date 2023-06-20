import { Box, makeStyles } from "@material-ui/core";
import Paper from "../paper";
import {
  ContactDetails,
  EducationDetails,
  LanguageDetails,
  PersonalSkills,
  ProSkilsDetails,
} from "./units";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LinkIcon from "@material-ui/icons/Link";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const SkilsSection = () => {
  const classes = useStyles();
  return (
    <Box style={{ display: "grid", gap: 30 }}>
      <Box className={classes.grid}>
        <Box className={classes.educationWrapper}>
          <Paper heading={"Education"}>
            <Box className={classes.childWrapper}>
              {" "}
              <EducationDetails
                qualification={"Junior High School"}
                institution="South Kellergrove Junior"
                year="2015"
              />
              <EducationDetails
                qualification={"Junior High School"}
                institution="South Kellergrove Junior"
                year="2015"
              />
              <EducationDetails
                qualification={"Junior High School"}
                institution="South Kellergrove Junior"
                year="2015"
              />
              <EducationDetails
                qualification={"Junior High School"}
                institution="South Kellergrove Junior"
                year="2015"
              />
            </Box>
          </Paper>
        </Box>
        <Box className={classes.childGrid}>
          <Box className={classes.languageWrapper}>
            <Paper heading={"Language"}>
              <Box className={classes.childWrapper}>
                <LanguageDetails language={"English"} fluency="75" />
                <LanguageDetails language={"French"} fluency="25" />
                <LanguageDetails language={"German"} fluency="50" />
              </Box>
            </Paper>
          </Box>
          <Box className={classes.socialWrapper}>
            <Paper heading={"Social"}>
              <Box className={classes.childWrapper}>
                <ContactDetails
                  icon={FacebookIcon}
                  content="fb.me/nataliedawson"
                />
                <ContactDetails icon={TwitterIcon} content="@nataliedawson" />
                <ContactDetails icon={InstagramIcon} content="@natalietweets" />
              </Box>
            </Paper>
          </Box>
          <Box className={classes.experienceWrapper}>
            <Paper heading={"Experience"}>
              <Box className={classes.childWrapper}>
                {" "}
                <EducationDetails
                  qualification={"Software Engineer at Mathica Labs"}
                  year="2018 - present"
                />
                <EducationDetails
                  qualification={"Software Engineer at Mathica Labs"}
                  year="2018 - present"
                />
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
      <Box className={classes.secondaryGrid}>
        <Paper heading="Professional Skills">
          <Box display={"grid"} gridGap={10}>
            <ProSkilsDetails skill={"Photoshop"} value={90} />
            <ProSkilsDetails skill={"Illustrator"} value={65} />
            <ProSkilsDetails skill={"Adobe XD"} value={55} />
            <ProSkilsDetails skill={"Figma"} value={60} />
          </Box>
        </Paper>
        <Paper heading="Personal Skills">
          <Box display={"grid"} gridGap={10}>
            <PersonalSkills skill="Creative" number="1" />
            <PersonalSkills skill="Reliable and professional" number="2" />
            <PersonalSkills skill="Time management" number="3" />
            <PersonalSkills skill="Organized" number="4" />
          </Box>
        </Paper>
        <Paper heading="Contact">
          <Box display={"grid"} gridGap={10}>
            <ContactDetails
              icon={LocationOnIcon}
              content="505 West Brickyard Rd, CA , USA"
            />
            <ContactDetails icon={CallIcon} content="+91 01234 56789" />
            <ContactDetails
              icon={EmailIcon}
              content="john@property.com              "
            />
            <ContactDetails
              icon={LinkIcon}
              content="http://www.yourwebsitename.com"
            />
            <ContactDetails
              icon={BusinessCenterIcon}
              content="9486 Roberts St. Monroe Township."
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SkilsSection;

const useStyles = makeStyles((theme) => ({
  childWrapper: {
    display: "grid",
    gap: 20,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr",
    gap: 30,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr",
      gap: 25,
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: 20,
    },
  },
  childGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: 30,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr 1fr",
      gap: 25,
    },
  },
  languageWrapper: {
    gridArea: "1 / 1 / 2 / 2 ",
    height: "100%",
  },
  socialWrapper: {
    gridArea: "1 / 2 / 2 / 3",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gridArea: "2 / 1 / 3 / 2",
    },
  },
  experienceWrapper: {
    gridArea: "2 / 1 / 3 / 3",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gridArea: "3 / 1 / 4 / 2",
    },
  },
  educationWrapper: {
    height: "100%",
  },
  secondaryGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 30,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr",
      gap: 25,
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: 20,
    },
  },
}));
