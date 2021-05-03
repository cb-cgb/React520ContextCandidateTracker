import React from 'react';  
import axios from 'axios';

const StatusCountContext = React.createContext();

class StatusCountContextComponent extends React.Component {
    state = { 
        statusCounts: {
            pending:0,
            confirmed: 0,
            refused:0
        }
    }

    componentDidMount = async () => {
        await this.updateCounts();
    }
    
    updateCounts =async() => {
     const {data} = await axios.get('/api/candidate/getcounts');  
     this.setState({statusCounts: data})   
    }
     
    render() { 
        const obj =  {
            statusCounts: this.state.statusCounts,
            updateCounts: this.updateCounts
        }
        return (
            <StatusCountContext.Provider value = {obj}>
                {this.props.children}
            </StatusCountContext.Provider>
          );
    }
}
export {StatusCountContextComponent, StatusCountContext}
 


