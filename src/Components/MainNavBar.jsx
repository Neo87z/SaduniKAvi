import React, {useEffect} from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

const MainNavBar = () =>{
    // function animation(){
    //     var tabsNewAnim = $('#navbarSupportedContent');
    //     var activeItemNewAnim = tabsNewAnim.find('.active');
    //     var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    //     var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    //     var itemPosNewAnimTop = activeItemNewAnim.position();
    //     var itemPosNewAnimLeft = activeItemNewAnim.position();
    //     $(".hori-selector").css({
    //       "top":itemPosNewAnimTop.top + "px", 
    //       "left":itemPosNewAnimLeft.left + "px",
    //       "height": activeWidthNewAnimHeight + "px",
    //       "width": activeWidthNewAnimWidth + "px"
    //     });
    //     $("#navbarSupportedContent").on("click","li",function(e){
    //       $('#navbarSupportedContent ul li').removeClass("active");
    //       $(this).addClass('active');
    //       var activeWidthNewAnimHeight = $(this).innerHeight();
    //       var activeWidthNewAnimWidth = $(this).innerWidth();
    //       var itemPosNewAnimTop = $(this).position();
    //       var itemPosNewAnimLeft = $(this).position();
    //       $(".hori-selector").css({
    //         "top":itemPosNewAnimTop.top + "px", 
    //         "left":itemPosNewAnimLeft.left + "px",
    //         "height": activeWidthNewAnimHeight + "px",
    //         "width": activeWidthNewAnimWidth + "px"
    //       });
    //     });
    //   }
    
    //   useEffect(() => {
        
    //     animation();
    //     $(window).on('resize', function(){
    //       setTimeout(function(){ animation(); }, 500);
    //     });
        
    //   }, []);
    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
            
          <NavLink className="navbar-brand nabar-logo" to="/" exact>Smart </NavLink>
           
            <button 
        className="navbar-toggler"
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>

        </button>

        <div className="collapse navbar-collapse" id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
                <div className='hori-selector'>
                    <div className='left'></div>
                    <div className='right'></div>
                </div>
                <li className='nav-item active'>
                    <NavLink className="nav-link" to="/" exact>
                            Home
                        
                    </NavLink>
                </li>
                <li className='nav-item active'>
                    <NavLink className="nav-link" to="/measure" exact>
                            Measure Scoliosis
                    </NavLink>
                </li>
                <li className='nav-item active'>
                    <NavLink className="nav-link" to="/types" exact>
                            Soliosis Types
                    </NavLink>
                </li>
                <li className='nav-item active'>
                    <NavLink className="nav-link" to="/treatments" exact>
                            Treatments
                        
                    </NavLink>
                </li>
                <li className='nav-item active'>
                    <NavLink className="nav-link" to="/community" exact>
                            Community
                    </NavLink>
                </li>
            </ul>
        </div>
        </nav>
    )
}

export default MainNavBar;