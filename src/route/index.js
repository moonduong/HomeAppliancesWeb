import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SignUp from "../pages/SignUpPage/SignUpage";
import SignIn from "../pages/SignInPage/SignInPage";
import ProductDetailPage  from "../pages/ProductDetailPage/ProductDetailPage";
import ProfilePage from "../pages/Profile/Profile.Page";
import AdminPage from "../pages/AdminPage/AdminPage";

export const routes=[
    {
        path:'/',
        page: HomePage,
        isShowHeader:true
    },
    {
        path:'/order',
        page: OrderPage,
        isShowHeader:true

    },
    {
        path:'/products',
        page: ProductPage,
        isShowHeader:true
    },
    {
        path:'/:type',
        page: TypeProductPage,
        isShowHeader:true
    },
    {
        path: '/sign-in',
        page: SignIn,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        page: SignUp,
        isShowHeader: false
    },
    {
        path: '/product-details',
        page: ProductDetailPage,
        isShowHeader: true
    },
    {
        path: '/profile',
        page: ProfilePage,
        isShowHeader: true
    },
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivate: true
    },
    {
        path:'*',
        page: NotFoundPage
    },
]