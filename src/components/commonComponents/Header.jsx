import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { matchRoutes } from 'react-router-dom';
import { IoMdContact } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";


const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#"style={{marginLeft:"2%",fontStyle:"oblique",fontFamily:"cursive"}} >Navbar</a>
                <div style={{marginRight:"80%", display:'flex'}}><a href="./allcategories" >All Categories</a>
                
                    <div><IoIosArrowDropdown /></div>
                </div>

                <div class="d-flex" color='white'>
                    <input type="search" placeholder='Search for courses' style={{border:"0", marginLeft:"170%", marginTop:"-15%", marginBottom:"8%"}} />
                    <div style={{top: "43px" ,left: "747px",width: "15px",height: "16px"}}><CiSearch className='icontag'/></div>
                </div>
                <div className='container' style={{marginLeft:"40%", marginTop:"-50px",marginBottom:"2%", justifyContent:'space-evenly', paddingRight:"30%"}}>
                    <a href="./home" className='hometag'>Home</a>
                    <a href="./blog" className='blogtag' >Blog</a>
                    <a href="./about" className='abouttag'>About</a>
                </div>
                <div style={{display:"flex",marginLeft:"70%",marginTop:"-79px"}}><button className='btn btn-danger'>Try for Free <GoArrowRight />
</button>
                </div>
                <div style={{marginTop:"-80px",marginRight:"10%"}}><IoMdContact size={35}/></div>
            </nav>
        </div>
    );
}

export default Header;
