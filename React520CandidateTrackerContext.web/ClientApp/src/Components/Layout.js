import React from 'react';
import { Link } from 'react-router-dom';
import { StatusCountContext } from '../StatusCountContext';

const Layout = (props) => {
    return (
       <StatusCountContext.Consumer> 
        {counts=> {
            const {pending, confirmed,refused} =  counts.statusCounts;
            console.log(`layout log:${pending} ${confirmed} ${refused}`)

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
                          <Link to="/pending/Pending" style={{color:"lightseagreen"}}>Pending ({pending})</Link>
                         </div>

                         <div className="col-md-2">
                          <Link to="/confirmed/Confirmed" style={{color:"lightseagreen"}}>Confirmed ({confirmed})</Link>
                         </div>

                         <div className="col-md-2">
                          <Link to="/refused/Refused" style={{color:"lightseagreen"}}>Declined ({refused})</Link>
                         </div>
                     </div>
                   
                   </div>
                </div> 
             
            <div className="container" style={{ marginTop: 60 }}>
                {props.children}
            </div>
          
        </div>
        )
      
      }

      }
      </StatusCountContext.Consumer> 
        
    )
    
}

export default Layout;