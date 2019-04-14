import React from 'react';
import {TextField} from '@material-ui/core/';

export default ( props => {
   return (
        <TextField
          id="filled-full-width"
          label={props.label}
          style={{ margin: 8 }}
          placeholder={props.placeholder}
          fullWidth
          margin="normal"
          onChange={props.handleChange(props.name)}
          onKeyDown={props.onKeyPress}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
    );
});