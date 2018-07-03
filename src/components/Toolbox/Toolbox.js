import React, { Fragment } from 'react';
import { Input } from '@material-ui/core';

import ToolboxStyle from './Toolbox.css';

const toolbox = (props) => (
    <div className={ToolboxStyle.container}>
        <span>Number of Rows x Number of Columns</span>
        <button onClick={props.changeSize}>Update Size</button>
    </div>
);

export default toolbox;