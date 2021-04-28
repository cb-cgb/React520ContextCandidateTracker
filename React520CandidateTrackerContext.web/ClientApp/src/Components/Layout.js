import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
    return (
        <div>              
                <div className="container" style={{textAlign:"center"}}>
                  <h3>Candidate Tracker</h3>
                  <div  style={{backgroundColor:"lightgray"}}   >
                     <div className="row" style={{width:800}}>
                         <div className="col-md-2" >
                          <Link to="/" style={{color:"lightseagreen"}}>Home</Link>
                         </div>

                         <div className="col-md-3">
                          <Link to="/add" style={{color:"lightseagreen"}}>Add Candidate</Link>
                         </div>

                         <div className="col-md-3">
                          <Link to="/view/Pending" style={{color:"lightseagreen"}}>Pending</Link>
                         </div>

                         <div className="col-md-2">
                          <Link to="/view/Confirmed" style={{color:"lightseagreen"}}>Confirmed</Link>
                         </div>

                         <div className="col-md-2">
                          <Link to="/view/Refused" style={{color:"lightseagreen"}}>Declined</Link>
                         </div>
                     </div>
                    {/* <ul className="nav navbar-nav">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/add">Add Candidate</Link></li>
                      <li><Link to="/pending">Pending </Link></li>
                      <li><Link to="/confirmed">Confirmed </Link></li>
                      <li><Link to="/refused">Refused </Link></li>
                    </ul> */}
                  </div>
                </div>
             
            <div className="container" style={{ marginTop: 60 }}>
                {props.children}
            </div>

        </div>
        
    )
}

export default Layout;