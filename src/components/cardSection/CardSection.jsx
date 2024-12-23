import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../GlobalContext.jsx';

import styles from './CardSection.module.css';

import Card from '../card/Card.jsx'

const CardSection = () => {
  const { collections, nfts } = useGlobalContext();
  const { pathname } = useLocation();
  const heading = pathname.indexOf('Collection') !== -1 ? 'NFTs' : 'Collections';
  const cardData = pathname.indexOf('Collection') !== -1 ? [...nfts] : [...collections];

    return (
        <div className={styles.container}>
            <h4 style={{fontWeight: 800}}>{heading}</h4>
            <div className={styles.cardContainer}>
                {
                    cardData && cardData.map((data, index) => {
                        return  <Card
                            key={data.name}
                            image={data.image}
                            name={data.name}
                            description={data.description}
                            artistImage={data.artistImage}
                            artistName={data.artistName}
                            ntf={data.ntf}
                            priceRange={data.priceRange}
                            id={index}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default CardSection;