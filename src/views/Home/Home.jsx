import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>Home</h1>
            </main>
            <Footer />
        </>
    );
};

export default Home;