import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import NewForm from '../components/NewForm';
import App from '../App';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index element={<Home />}></Route>
                    <Route path="novo" element={<NewForm />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;