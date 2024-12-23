import styles from './ConnectToWallet.module.css';

import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../../GlobalContext';

const ConnectToWallet = () => {
    const { login } = useGlobalContext();
    const navigate = useNavigate();

    const connectWallet = () => {
        login({name: 'user1', address: 'STV6Q...4Z7WD', balance: '0.129', dp: 'images/artist-1.png'});
        navigate(-1);
    }

    return (
        <div className={styles.container}>
            <p className={styles.labelText}>Choose the wallet to connect</p>
            <div className={styles.walletList}>
                <div onClick={connectWallet} className={styles.wallet}></div>
                <div onClick={connectWallet} className={styles.wallet}></div>
                <div onClick={connectWallet} className={styles.wallet}></div>
            </div>
        </div>
    );
}

export default ConnectToWallet;