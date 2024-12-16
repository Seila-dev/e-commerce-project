import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { Home } from '../components/Home';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}>
                <Route path='/' element={<Home />}/>
            </Route>
        </Routes>
    )
}