import React from "react";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

import "./Multiselect.scss";

const MultipleSelect = (props) => {
  return (
    <div className="wrapper">
      <FormControl variant="outlined" className="form">
        <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="checkboxes-tags-demo"
          className="select"
          multiple
          value={props.value}
          onChange={props.onChange}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps
        >
          {props.options.map((name) => (
            <MenuItem key={name.value} value={name.value}>
              <Checkbox checked={props.value.indexOf(name.value) > -1} />
              <ListItemText primary={name.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelect;
