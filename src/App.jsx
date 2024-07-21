import { Outlet } from "react-router-dom";
import GlobalStyles from "../public/styles/GlobalStyles";
import AugmentedUI from "../public/styles/AugmentedUI";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <main>
            <AugmentedUI />
            <GlobalStyles />
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
}

export default App;