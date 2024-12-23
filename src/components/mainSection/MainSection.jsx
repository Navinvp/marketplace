import Banner from '../banner/banner';
import CardSection from '../cardSection/CardSection';

import styles from './MainSection.module.css';

const MainSection = () => {
    return (
        <main className={styles.mainContent}>
            <Banner></Banner>
            <CardSection></CardSection>
        </main>
    );
}

export default MainSection;