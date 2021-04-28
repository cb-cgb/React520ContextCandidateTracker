import React from 'react';
import { Route } from 'react-router';
import Layout from './Components/Layout';
import  Home from './Pages/Home';
import AddCand from './Pages/AddCand';
//import Detail from '/Pages/Detail'
import ByStatus from './Pages/ByStatus';


    const App=() => {
      return (
      
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/add' component={AddCand} /> 
        {/* <Route path='/detail' component={Detail} />*/}
        <Route path='/view/:status' component={ByStatus} />
        
        </Layout>
    );
  
}

export default App;
