import React from 'react';
import CandRow from '../Components/CandRow';
import axios from 'axios';

class Home extends React.Component {
    state = { 
     candidates: [],
     showNotes: true
     }
     
     

     componentDidMount = async() => {
        await console.log(this.props.match.params.status);
      const {data} = await axios.get(`/api/candidate/getbystatus?status=${this.props.match.params.status}`);
      await this.setState({candidates: data});
    }

    render() { 
        const notesVisible = this.state.showNotes;
        return (
           
            <div className="container">
                <div>                    
                     <button className="btn btn-info btn-lg" onClick={() => this.setState({showNotes:!notesVisible})}>
                         Toggle Notes</button>                    

                    <table className="table table-hover table-striped table-bordered" style={{marginTop: 20}}>
                      <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Status</th>
                            {notesVisible &&<th>Notes</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.candidates.map(c=> 
                           <CandRow candidate={c} key={c.Id} notesvisible={notesVisible}/>
                        )}
                    </tbody>
                    </table>
                </div>
            </div>
          );
    }
}
 
export default Home;