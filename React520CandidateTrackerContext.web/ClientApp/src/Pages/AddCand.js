import React from 'react';  
import {produce} from 'immer';
import axios from 'axios';

class AddCand extends React.Component {
    state = { 
        candidate : {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            details: ''
        }
    }

    onTextChange=(e)=> {
          const nextState = produce(this.state,draft => {
              draft.candidate[e.target.name]=e.target.value;
          })
          this.setState(nextState);        
     }

     onClickAdd = async() => {
         await axios.post('/api/candidate/add', {...this.state.candidate,  status:'Pending'});
         this.props.history.push('/');

     }
    render() { 
        const {firstName,lastName,phone,email,details} = this.state;

        return ( 
           
              <div className="row card card-body bg-light" style={{width:400}} >
                
                   <h3 style={{textAlign: "center" }}>Add Candidate</h3>
                   <br/> 
                  
                       <input type="text" className="form-control" placeholder="First Name" 
                        value={firstName}
                        name="firstName"
                        onChange={this.onTextChange}
                        />
                   <br/>                     
                      
                        <input type="text" className="form-control" placeholder="Last Name" 
                        value={lastName}
                        name="lastName"
                        onChange={this.onTextChange}
                       />                   
                     <br/>
                      <input type="text" className="form-control" placeholder="Phone" 
                        value={phone}
                        name="phone"
                        onChange={this.onTextChange}
                       /> 
                     <br/>
                      <input type="text" className="form-control" placeholder="Email" 
                        value={email}
                        name="email"
                        onChange={this.onTextChange}
                       />
                    <br/>
                     <textarea rows="6" className="form-control" placeholder="Notes:"
                        value={details}
                        name="details"
                        onChange={this.onTextChange}
                       />  
                     <br/>
                     <button className="btn btn-success btn-block" onClick={this.onClickAdd}>Add!</button>
            </div>
         );
    }
}
 
export default AddCand;