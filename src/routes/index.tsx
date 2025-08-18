import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import RootLayout from "../pages/Layout";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import Collection from "../pages/Collection";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import ProductPage from "../pages/Product";
import CartPage from "../pages/Cart";
import PlaceOrderPage from "../pages/PlaceOrder";
import OrdersPage from "../pages/Orders";


const router = createBrowserRouter(

    createRoutesFromElements(
        <>

            {/* Root Layout */}
            <Route>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="collection" element={<Collection />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="product/:productId" element={<ProductPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="place-order" element={<PlaceOrderPage />} />
                    <Route path="orders" element={<OrdersPage />} />

                    <Route
                        path="/login"
                        element={<LoginPage />}
                    />
                </Route>
            </Route>
        </>
    )
);

export default router;
