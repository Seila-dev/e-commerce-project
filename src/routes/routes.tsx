import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { Home } from '../components/Home';
import { CartPage } from '../components/CartPage';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}>
                <Route path='/' element={<Home />}/>
                <Route path='/cart' element={<CartPage />}/>
            </Route>
        </Routes>
    )
}