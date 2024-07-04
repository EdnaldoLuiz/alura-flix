import NewForm from "./components/NewForm";
import GlobalStyles from "../public/styles/GlobalStyles";
import Home from "./components/Home";
import Routes from "./routes/Routes";

function App() {
    return (
        <>
            <GlobalStyles />
            <Routes />
            <Home />
            {/* <NewForm /> */}
        </>
    );
}

export default App;