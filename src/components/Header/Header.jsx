import styles from './Header.module.css'

 const Header = (props) => {
    console.log(props);
    return (
        <>
            <header className={styles}>
                <h1>My React App</h1>
            </header>
        </>
    );
};

export default Header;