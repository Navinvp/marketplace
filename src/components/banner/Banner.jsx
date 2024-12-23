import { useLocation, useLoaderData } from 'react-router-dom';

import ArtistInfo from '../artistInfo/ArtistInfo';
import Button from '../button/Button';

import styles from './Banner.module.css';

const Banner = () => {
    const { pathname } = useLocation();
    const { bannerData } = useLoaderData();

    const isDetailsPage = pathname.indexOf('Collection') !== -1;

    return (
            <div className={styles.banner}>
                <div className={styles.details}>
                    <span className={styles.pill}>Trending Now</span>
                    <div className={styles.name}>
                        <span className={styles.collectionName}>{bannerData.subtitle}</span>
                        <span className={styles.nftName}>{bannerData.title}</span>
                    </div>
                    {bannerData.description && <p className={styles.description}>{bannerData.description}</p>}
                    <ArtistInfo artistImage={`/${bannerData.artistImage}`} artistInfo={bannerData.artistName} size='medium'></ArtistInfo>
                    {!isDetailsPage && <div className={styles.buttonGroup}>
                        <Button label='Buy' fill={true}></Button>
                        <Button label='See collection'></Button>
                    </div>}
                </div>
                <div className={styles.img}></div>
            </div>
    )
}

export default Banner;