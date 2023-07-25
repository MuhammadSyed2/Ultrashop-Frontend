import dash from './homepage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Slider(){
   return(
      <div className={dash.sliderdiv}>
          <ul className={dash.items}>
          <Link to='/profile'><li><FontAwesomeIcon icon={faUser} /> Profile</li></Link>
            <li><FontAwesomeIcon icon={faBlog} /> Products</li>
            <li><FontAwesomeIcon icon={faAddressCard} /> Orders</li>
            <li><FontAwesomeIcon icon={faSun} /> Themes</li>
            <li><FontAwesomeIcon icon={faGear} /> Settings</li>
          </ul>


      </div> 


   );


}
function Header(){
    const [show,setShow]=useState(true)
    return(
        <div className={dash.header}>
            
        <button className={dash.slider} onClick={()=>setShow(!show) }><FontAwesomeIcon icon={faSliders} className={dash.slidericon} /></button>
        { show?<Slider/>:null}
        </div>
    );
}



export default function Dash(){
    
document.body.style.background = "white"

    return(
        
        <div className={dash.bg}>
        <Header/>
        <div className={dash.container}>
        <h1 className={dash.txt}>Dash Board Page</h1>
        </div>
        </div>
    );
}