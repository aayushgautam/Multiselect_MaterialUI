import React from 'react'
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip'

import "./ChipInput.scss"

const ChipInput = () => {
    return(
        <div className="chip-input">
            <TextField label="standard" className="text-field" />
            <Chip />
        </div>
    );
}

export default ChipInput;