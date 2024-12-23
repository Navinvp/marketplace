import { Outlet, useLocation } from 'react-router-dom';

import { useGlobalContext } from '../../GlobalContext';
 
import Header from "../header/Header";
import Footer from "../footer/Footer";

import styles from './Layout.module.css';

const Layout = () => {
    const { isAccountVisible, setAccountVisible } = useGlobalContext();

    const { pathname } = useLocation();
    let classes = ``;
    if(pathname.indexOf('connectToWallet') !== -1) {
        classes+=` ${styles.container}`
    }
    isAccountVisible ? classes+= ` ${styles.fixPosition}` : null;

    return (
        <div className={classes}>
            {isAccountVisible && <div className={styles.overlayBg} onClick={() => setAccountVisible(isVisible => !isVisible)}></div>}
            <Header></Header>
            {<Outlet/>}
            {pathname.indexOf('connectToWallet') === -1 && <Footer></Footer>}
        </div>
    )
}

export default Layout; 
