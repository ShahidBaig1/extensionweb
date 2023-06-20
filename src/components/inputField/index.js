import { withStyles, InputBase } from "@material-ui/core";
const CustomInputField = withStyles((theme) => ({
  root: {
    height: 45,
    lineHeight: 30,
    background: "#f3f6fd",
    border: "1px solid #dcdddf",
    fontSize: 14,
    color: "#768492",
    borderRadius: 10,
    boxShadow: "none",
    backgroundColor: "#FFFFFF 0% 0% no-repeat padding-box",
    width: "100%",
    paddingLeft: 10,
    "&.Mui-focused": {
      // borderColor: "#0364FF",
      transition: "0.5s ease",
      borderColor: "#768492",
      backgroundColor: "#ffff",
    },
  },
}))(InputBase);
export default CustomInputField;
