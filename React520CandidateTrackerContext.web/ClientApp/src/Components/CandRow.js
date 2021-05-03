import React from 'react';
import {Link} from 'react-router-dom';

function CandRow (props) {


 const {id,firstName, lastName, phone, email, status,details} = props.candidate;
 const {notesvisible}=props;
 

    return(
      
      
      <tr>
         <td> 
            {status==='Pending' && <Link to={`/detail/${id}`}>{firstName} </Link>    }       
            {status!=='Pending'&&  <span>{firstName}</span>}  
         </td>         
         
          <td>{lastName}</td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>{status}</td>
          {notesvisible && <td>{details}</td> }
         
      </tr>     
      
    )
}

export default CandRow;