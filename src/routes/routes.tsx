import { Routes, Route } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { Home } from '../components/Home'
import { CartPage } from '../components/CartPage'
import { Login } from '../components/login'
import { DetailedProduct } from '../components/detailedproduct'
import { NotFoundPage } from '../components/notFoundPage'
import { AdminPage } from '../pages/AdminPage'
import { Admin } from '../components/admin'
import { AdminDetailedProduct } from '../components/adminDetailedProduct'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}>
                <Route path='/' element={<Home />}/>
                <Route path='/cart' element={<CartPage />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/product/:id' element={<DetailedProduct />}/>
                <Route path='/notfound' element={<NotFoundPage />}/>
            </Route>
            <Route path="/admin" element={<AdminPage />}>
                <Route path='/admin' element={<Admin />}/>
                <Route path='/adminproduct/:id' element={<AdminDetailedProduct />}/>
            </Route>
        </Routes>
    )
}