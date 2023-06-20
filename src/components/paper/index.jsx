import { Box, Divider, Paper as MuiPaper, Typography } from "@material-ui/core";
const Paper = ({ heading, children }) => {
  return (
    <MuiPaper elevation={0} style={{ height: "100%" }}>
      <Box>
        <Box p={2.5}>
          <Typography variant="h5">{heading}</Typography>
        </Box>
        <Divider />
        <Box p={2.5}>{children}</Box>
      </Box>
    </MuiPaper>
  );
};

export default Paper;
