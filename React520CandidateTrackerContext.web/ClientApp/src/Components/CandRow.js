import React from 'react';

function CandRow (props) {


 const {firstName, lastName, phone, email, status,details} = props.candidate;
 const {notesvisible}=props;
 

    return(
      <tr>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>{status}</td>
          {notesvisible && <td>{details}</td> }
      </tr>      
    )
}

export default CandRow;