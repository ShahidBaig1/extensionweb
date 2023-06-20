import { Box, Typography } from "@material-ui/core";

import TableCampo from "../../components/table";
import { useStyle } from "./style";

const Home = () => {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Typography variant="h1">Home</Typography>
    </Box>
  );
};

export default Home;
