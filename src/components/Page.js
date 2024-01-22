import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/home_page";
import ProductsPage from "../pages/products_page";
import ContactPage from "../pages/contact_page";
import AdminPage from "../pages/admin_pages";
import ErrorPage from "../pages/error_page";

const Page = ()=>{

    return(
        <Routes>
              <Route path="/" element={ <HomePage /> } />
              <Route path="/products" element={<ProductsPage />}/>
              <Route path="/contact" element={<ContactPage />}/>
              <Route path="/admin" element={<AdminPage />}/>
              <Route path="*" element={<ErrorPage />}/>
        </Routes>
      
    )
}

export default Page