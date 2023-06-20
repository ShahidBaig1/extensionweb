import { Box, makeStyles, Typography } from "@material-ui/core";
import { ReactComponent as Svg } from "../../assets/svgs/education.svg";
import LinearProgress from "../linearProgress";

export const EducationDetails = ({ institution, qualification, year }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.svgContainer}>
        <Svg />
      </Box>
      <Box>
        <Typography variant="h6">{institution}</Typography>
        <Typography variant="body2">
          {qualification}&nbsp;|&nbsp;{year}
        </Typography>
      </Box>
    </Box>
  );
};

export const LanguageDetails = ({ language, fluency }) => {
  const classes = useStyles();
  return (
    <Box className={classes.languageContainer}>
      <Typography variant="body2">{language}</Typography>
      <Typography variant="body2">{fluency}%</Typography>
    </Box>
  );
};

export const ProSkilsDetails = ({ skill, value }) => {
  const classes = useStyles();
  return (
    <Box className={classes.proSkillsRoot}>
      <Typography variant="body2">{skill}</Typography>
      <Box className={classes.progressBar}>
        <LinearProgress variant="determinate" value={value} color="secondary" />
        <Typography variant="body2" color="textSecondary">
          {value}%
        </Typography>
      </Box>
    </Box>
  );
};

export const PersonalSkills = ({ number, skill }) => {
  const classes = useStyles();
  return (
    <Box className={classes.personalRoot}>
      <Box className={classes.badge}>{number}</Box>
      <Box>
        <Typography variant="body2">{skill}</Typography>
      </Box>
    </Box>
  );
};

export const ContactDetails = ({ icon: Icon, content }) => {
  const classes = useStyles();
  return (
    <Box className={classes.personalRoot}>
      <Box>
        <Icon />
      </Box>
      <Box>
        <Typography variant="body2">{content}</Typography>
      </Box>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  svgContainer: {
    backgroundColor: theme.palette.warning.light,
    width: 58,
    height: 58,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  languageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  proSkillsRoot: {
    display: "grid",
    gridTemplateColumns: "1fr 8fr",
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  progressBar: {
    display: "grid",
    gridTemplateColumns: "6fr 1fr",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  badge: {
    width: 20,
    height: 20,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderRadius: "50%",
    display: "grid",
    placeContent: "center",
    fontSize: 12,
  },
  personalRoot: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
}));
