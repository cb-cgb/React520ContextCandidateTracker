import React from 'react';
import CandRow from '../Components/CandRow';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
    state = { 
     candidates: []
     }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
     componentDidMount = async() => {
      const {data} = await axios.get('/api/candidate/get');
      await this.setState({candidates: data});
    }

    render() { 
        return (
            
            <div className="container">
                <div>
                    <Link to='/add'>
                     <button className="btn btn-success btn lg">New Candidate</button>
                    </Link>

                    <table className="table table-hover table-striped table-bordered" style={{marginTop: 20}}>
                      <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.candidates.map(c=> 
                           <CandRow candidate={c} key={c.Id} notesvisible={true} />
                        )}
                    </tbody>
                    </table>
                </div>
            </div>
          );
    }
}
 
export default Home;