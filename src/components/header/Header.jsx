import { useNavigate, useLocation } from 'react-router-dom';

import { useGlobalContext } from '../../GlobalContext';

import styles from './Header.module.css';
import AccountMenu from '../account/account';

const Header = () => {
    const { user, balance, accountNFTs, isAccountVisible, setAccountVisible } = useGlobalContext();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleCloseMenu = () => setAccountVisible(false);

    const buttonLabel = user ? 'Account':'Connect Wallet';

    const handleOpenMenu = () => {
        if(!user) {
            navigate('/connectToWallet');
        } else {
            setAccountVisible(true)
        }
    }

    const navigateHome = () => {
        if (pathname !== '/') {
            navigate('/');
        }
    }

    return (
        <div className={styles.headerSection}>
            <div onClick={navigateHome} className={styles.home}>
                <span className={styles.titleText}>MARKETPLACE</span><span className={styles.dot}></span>
            </div>
            <>
                <button className={styles.connectBtn} onClick={handleOpenMenu}>{buttonLabel}</button>
                <AccountMenu 
                    isOpen={isAccountVisible}
                    onClose={handleCloseMenu}
                    balance={balance}
                    nfts={accountNFTs}
                ></AccountMenu>
            </>
        </div>   
    )
}

export default Header;