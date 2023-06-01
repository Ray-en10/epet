import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./routes/Home";
import Sign from "./components/Sign";
import Contact from "./components/Contact";
import Animals from "./components/Animals";
import Addform from "./components/Add/Addform";
import Adminpage from "./components/Adminpage";
import Store from "./components/Store";
import Animal from "./components/Admin/Animal";
import Usersall from "./components/Admin/Usersall";
import Form from "./components/Admin/Form";
import Product from "./components/Admin/Product";
import Addprod from "./components/Admin/Addprod";
import Adoptf from "./components/Admin/Adoptf";
import { AuthProvider } from "react-auth-kit";


function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route exact path="/Sign" element={<Sign/>} />
      <Route exact path="/Store" element={<Store/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/Animals" element={<Animals/>}/>
      <Route exact path="/Adminpage" element={<Adminpage/>}/>
      <Route exact path="/Addform" element={<Addform/>}/>
      <Route exact path="/Usersall" element={<Usersall/>}/>
      <Route exact path="/Animal" element={<Animal/>}/>
      <Route exact path="/Form" element={<Form/>}/>
      <Route exact path="/Product" element={<Product/>}/>
      <Route exact path="/Addprod" element={<Addprod/>}/>
      <Route exact path="/Adoptf" element={<Adoptf/>}/>
    </Routes>
    </AuthProvider>
  );
}
export default App;