import React from 'react';  
import axios from 'axios';
import {StatusCountContext} from '../StatusCountContext';

class Details extends React.Component {
    state = {
        
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        status: '',
        details: ''
      }

      componentDidMount = async() => {
       const {data} = await axios.get( `/api/candidate/getone?id=${this.props.match.params.id}`)
              this.setState(data);
      }

      onClickConfirm = async(updateCounts) => {
           await axios.post('/api/candidate/update', {...this.state, status:'Confirmed'});
           await updateCounts();
           this.setState({status: 'Confirmed'}) //just to force rerender so the buttons get removed once it's not in pending state
           
      }
      onClickRefuse = async(updateCounts) => {
        await axios.post('/api/candidate/update', {...this.state, status:'Refused'});
        await updateCounts();
        this.setState({status: 'Refused'}) //just to force rerender so the buttons get removed once it's not in pending state

   }
    render() { 
        const isPending = this.state.status ==='Pending';
        const {firstName, lastName, email, phone,details} = this.state;

        return ( 
          <StatusCountContext.Consumer>
            {counts => {
              const {updateCounts} = counts;
              return (           
               <div className="offset-md-5 row card card-body bg-light" style={{width:400}} >
                 <h5>Name: {firstName} {lastName}</h5>
                 <h5>Phone: {phone}</h5>
                 <h5>Email: {email} </h5>
                 <h5>notes: {details} </h5>
                 <br/>
                 {isPending && 
                 
                   <div className="row">
                    <div className="col-md-2">
                      <button className="btn btn-info btn-sm" onClick={()=>this.onClickConfirm(updateCounts)}>Confirm</button>
                    </div>

                    <div className="col-md-2">
                      <button className = "btn btn-danger btn-sm" onClick={()=> this.onClickRefuse(updateCounts)}>Refuse</button>
                    </div>
                  </div>
                }         
              </div>
            )
          }
          }
          </StatusCountContext.Consumer>
         );
    }
}
 
export default Details ;