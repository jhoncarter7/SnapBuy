import { Fragment } from 'react';
import Categories from './component/Categories';
import Footer from './component/Footer';


import Nav from './component/Nav';
import Item from './item/Item';
import Top from './toppickscategories/Top';

const Welcome = () => {
    return(<Fragment>
        <Nav/>
        <Item/>
        <Categories/>
        <Top/>
        <Footer/>
       </Fragment>
       
      
       )
}

export default Welcome;