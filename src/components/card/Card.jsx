import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../GlobalContext";

import ArtistInfo from "../artistInfo/ArtistInfo";

import styles from "./Card.module.css";

const Card = ({
  image,
  name,
  description,
  artistImage,
  artistName,
  ntf,
  priceRange,
  id,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { nfts, setNFTs, setAccountNFTs, user } = useGlobalContext();

  const buyNft = () => {
    if (!user) {
      navigate('/connectToWallet');
    } else {
      setAccountNFTs((prevList) => {
        const oldList = [...nfts];
        return [...prevList, ...oldList.splice(id, 1)];
      });
      setNFTs((prevList) => {
        const newList = [...prevList];
        newList.splice(id, 1);
        return newList;
      });
    }
  };

  let btnEle;
  if (pathname.indexOf("Collection") !== -1) {
    btnEle = (
      <button onClick={buyNft} className={styles.viewDetailsButton}>
        Buy
      </button>
    );
  } else {
    btnEle = (
      <Link to={`/Collection/${id}`} className={styles.viewDetailsButton}>
        Go to collection
      </Link>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <div className={styles.overlay}></div>
        <img src={`/${image}`} alt={name} />
        {btnEle}
      </div>

      <div className={styles.cardDetails}>
        <div className={styles.flex}>
          <h3 className={styles.collectionName}>{name}</h3>
          <p className={styles.ntf}>{ntf}</p>
        </div>
        {pathname.indexOf("Collection") === -1 && (
          <>
            <p className={styles.priceRange}>
              Price Range: {priceRange[0]}BTC - {priceRange[1]}BTC
            </p>
            <p className={styles.collectionDescription}>{description}</p>
          </>
        )}
      </div>

      {pathname.indexOf("Collection") === -1 && (
        <div className={styles.cardFooter}>
          <ArtistInfo
            artistImage={`/${artistImage}`}
            artistInfo={artistName}
            size="small"
          ></ArtistInfo>
        </div>
      )}
    </div>
  );
};

export default Card;
