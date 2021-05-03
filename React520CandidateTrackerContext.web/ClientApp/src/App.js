import React from 'react';
import { Route } from 'react-router';
import Layout from './Components/Layout';
import  Home from './Pages/Home';
import AddCand from './Pages/AddCand';
import Detail from './Pages/Detail'
import ByStatus from './Pages/ByStatus';
import { StatusCountContextComponent } from './StatusCountContext';


    const App=() => {
      return (
        
      <StatusCountContextComponent>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/add' component={AddCand} /> 
          <Route exact path='/detail/:id' component={Detail} />
          <Route exact path='/pending/:status' component={ByStatus} />
          <Route exact path='/confirmed/:status' component={ByStatus} />
          <Route exact path='/refused/:status' component={ByStatus} />        
        </Layout>
      </StatusCountContextComponent>        
    );  
}

export default App;
