import styles from './ArtistInfo.module.css';

const ArtistInfo = ({artistImage, artistInfo, size='small', isLabelRequired=true}) => {
    const getImgSize = () => {
        return size==="medium" ? '68px' : '40px'
    }

    const getFontSize = () => {
        return size==="medium" ? '24px' : '16px'
    }

    return (
        <div className={styles.artistInfo}>
            <img style={{height: getImgSize(size), width: getImgSize() }} className={styles.artistImage} src={artistImage} alt={artistInfo} />
            <div className={styles.artist}>
                {isLabelRequired && <p className={styles.artistLabel}>Artist</p>}
                <p className={styles.artistName} style={{fontSize: getFontSize(), marginBottom: !isLabelRequired && 0}}>{artistInfo}</p>
            </div>
        </div>
    );
}

export default ArtistInfo;