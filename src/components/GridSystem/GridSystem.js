import React, { Component, Fragment } from 'react';

//import PropTypes from 'prop-types';
//import { Grid, Paper } from '@material-ui/core';

import Cell from '../Cell/Cell';
import Item from '../Item/Item';

import GridSystemStyle from './GridSystem.css';

// React DND
// https://react-dnd.github.io/react-dnd/docs-tutorial.html 

class GridSystem extends Component {

    getGridCells = () => {
        const cells = [];
        for (let i = 0; i < this.props.grid.rows; i++) {
            for (let j = 0; j < this.props.grid.cols; j++) {
                cells.push(
                    <Cell key={i + '_' + j}>
                        <Item />
                    </Cell>);
            }
        }

        return cells;
    }

    render() {
        return (
            <div class="row">
                <div className={[GridSystemStyle.Cell, "col-lg-12"].join(' ')}>
                    {this.getGridCells()}
                </div>
            </div >
        );
    }
}

// GridSystem.propTypes = {
//      size: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
// }

export default GridSystem;