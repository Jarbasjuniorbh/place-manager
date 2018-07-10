import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

import CellStyle from './Cell.css';

class Cell extends Component {

    render() {
        return (
            <div className={CellStyle.Cell}>
                {this.props.children}
            </div>
            // <Paper className={CellStyle.Paper}>
            //     teste
            // </Paper>
        )
    }
}

export default Cell;
