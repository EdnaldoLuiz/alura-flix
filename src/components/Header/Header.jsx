//import Button from '@shared/Button/Button';
import ButtonNewVideo from '../../shared/Button/ButtonNewVideo';
import ButtonHome from '../../shared/Button/ButtonHome';
import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__logo}>
                    <img src="https://s3-alpha-sig.figma.com/img/d6c3/af11/d24c9171564eb6b6667a5da808fcf1ed?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3iWopNBlIkdqoCBPxNosLEGHhk0jz6aw~2YfivVeh31j3Q0jFZZlbVmWh6mqzjuj6-UhUmbRCyzhgU6SNDJ20JnyTYckuh2N-HNknPYLKR-n2zMILCi2KIWmtjI0nfRf5xXRzbD9kHbnowLfHIFLoEukI-HbjYHc2Ho1mPVgA~Wp2rFu1vA-eVF50ZM1-KrEhDHR0hzqZLrkhjm78VGygzwwFK13V9YeWNzXt-8PvgdnaXBsRC9VvGQPVbJDvIU6y96l-azuInSScea8P1BjBVM5M3TvWUoW~YmZBYQouEqHRtKo-i2LiVAEfENNrH2NLg5Pbxr0SLRUpkV~OusZw__" alt="React Logo" />
                </div>
                <nav className={styles.header__nav}>
                    <ul className={styles.button__wrapper}>
                        <ButtonHome text="Home" />
                        <ButtonNewVideo text="Novo Video" />
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;