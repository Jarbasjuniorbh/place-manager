import React, { Fragment } from 'react';
import LayoutStyle from './Layout.css';

const layout = (props) => (
    <Fragment>
        <div>
            Toolbar, SideDrawer, BackDrop
        </div>
        <main className={LayoutStyle.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;