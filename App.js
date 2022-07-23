
import './App.css';
import {  Routes,Route,} from  "react-router-dom"
import Home from "./Components/Home"
import About from './Components/About';
import Navbar from './Components/Navabr';
import Services from './Components/Services';
import Project from './Components/Blogs';
import Contect from './Components/Contect';
import User from "./Components/User"

import Sidebar from "./Components/sidebar"
import Dashbord from './Components/Dashbord';
import Blogs from './Components/Blogs';
import Projects from './Components/Projects';
function App() {


  return (
    <div className="App">












      
     <Navbar/>
  

         
      <Routes>

    
      <Route    path="/"element={ <Home/>}/>
      <Route    path="/about"element={ <About/>}/>
      <Route    path="/services"element={ <Services/>}/>
 
      <Route    path="/contect"element={ <Contect/>}/> 
      <Route path="/user/:name/:color"  element={<User/>}/>
      <Route path="/dashbord"  element={<Dashbord/>}/>
      <Route path="/blogs"  element={<Blogs/>}/>
      <Route path="/projects"  element={<Projects/>}/>

 
    
      


      </Routes>
       
      <Sidebar/>
 

      <footer class="footer p-10 bg-base-200 text-base-content">
  <div>
    <span class="footer-title">Services</span> 
    <a class="link link-hover">Branding</a> 
    <a class="link link-hover">Design</a> 
    <a class="link link-hover">Marketing</a> 
    <a class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a class="link link-hover">About us</a> 
    <a class="link link-hover">Contact</a> 
    <a class="link link-hover">Jobs</a> 
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a class="link link-hover">Terms of use</a> 
    <a class="link link-hover">Privacy policy</a> 
    <a class="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span class="footer-title">Newsletter</span> 
    <div class="form-control w-80">
      <label class="label">
        <span class="label-text">Enter your email address</span>
      </label> 
      <div class="relative">
        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" /> 
        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;
