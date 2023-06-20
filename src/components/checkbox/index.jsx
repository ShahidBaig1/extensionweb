import { Checkbox as MuiCheckBox, FormControlLabel } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

export default function Checkbox({ label }) {
  return (
    <FormControlLabel
      label={label}
      control={
        <MuiCheckBox
          color="secondary"
          size="small"
          disableRipple
          icon={<CheckCircleIcon />}
          checkedIcon={<RadioButtonUncheckedIcon />}
        />
      }
    />
  );
}
