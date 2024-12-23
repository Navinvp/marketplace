import ReactDOM from 'react-dom';

import { useGlobalContext } from '../../GlobalContext';

import Button from '../button/Button';
import ArtistInfo from '../artistInfo/ArtistInfo';

import styles from './account.module.css';

const AccountMenu = ({ isOpen, onClose, balance, nfts }) => {
  const { user } = useGlobalContext();

  if (!isOpen) return null;

  const shopNft = () => {
    onClose();
  }

  return ReactDOM.createPortal(
    <div className={styles.floatingMenu}>
      <div className={styles.floatingMenuContent}>
        <div className={styles.menuHeader}>
            <div className={styles.userInfo}>
                <ArtistInfo artistImage={`/${user.dp}`} artistInfo={user.address} isLabelRequired={false}></ArtistInfo>
                <span><img className={styles.copyButton} src={`/images/copy.svg`} alt='Copy address'/></span>
            </div>
            <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        <div className={styles.balanceSection}>
          <h3>In your wallet</h3>
          <p>{balance} BTC</p>
        </div>
        <div className={styles.nftsSection}>
          <h3>Your NFTs</h3>
          {nfts.length > 0 ? (
            <ul className={styles.nftsList}>
              {nfts.map((nft, index) => (
                <li key={index} className={styles.nftItem}>
                  <img className={styles.nftListItem} src={`/${nft.image}`} alt={nft.name}></img>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.startShoppingSection}>
                <p>You don't own any NFTs yet</p>
                <Button clickHandler={shopNft} label='Start shopping' fill={true}></Button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AccountMenu;
