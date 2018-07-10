import React, { Component, Fragment } from 'react';

import GridSystem from '../../components/GridSystem/GridSystem';
import Toolbox from '../../components/Toolbox/Toolbox';

class GridBuilder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            grid: {
                rows: 52,
                cols: 2
            }
        }
    }

    changeGridSizeHandler = () => {
        this.setState({
            grid: {
                rows: 3,
                cols: 2
            }
        });        
    }

    render() {
        return (
            <Fragment>
                <Toolbox changeSize={this.changeGridSizeHandler} />
                <GridSystem grid={this.state.grid} />
            </Fragment>
        );
    }
}

export default GridBuilder;