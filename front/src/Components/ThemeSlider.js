import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import { Grid } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { CustomThemeContext } from "./CustomThemeProvider";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { SvgIcon } from "@material-ui/core";

export default function ThemeSlider() {
  const { currentTheme, setTheme } = React.useContext(CustomThemeContext);
  const [dark, setDark] = React.useState(
    currentTheme === "dark" ? true : false
  );

  const handleChange = (e) => {
    const checked = e.target.checked;
    setDark(checked);
    if (checked) setTheme("dark");
    else setTheme("light");
  };

  const ThemeIcon = () => {
    if (dark) {
      return (
        <SvgIcon>
          <NightsStayIcon color="primary" />
        </SvgIcon>
      );
    } else {
      return (
        <SvgIcon>
          <Brightness7Icon color="secondary" />
        </SvgIcon>
      );
    }
  };

  return (
    <FormGroup row>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Switch
            checked={dark}
            onChange={handleChange}
            name="ThemeSlider"
            color="primary"
          />
        </Grid>
        <Grid item>
          <ThemeIcon />
        </Grid>
      </Grid>
    </FormGroup>
  );
}
