import React, { Fragment } from 'react';

import LayoutStyle from './Layout.css';
import { Header, Footer } from './index';

const layout = (props) => (
    <Fragment> 
        <Header />
        <main className={LayoutStyle.Content}>
            {props.children}
        </main>
        <Footer />  
    </Fragment>
);

export default layout;