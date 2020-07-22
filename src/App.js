import React, {Component} from 'react';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from './context';
import './App.css';
import Footer from './components/layout/Footer';


class App extends Component {

 


render () {
  return (
    <Provider>

<Router>
    <React.Fragment>
   <Navbar/>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/lyrics/track/:id" component={Lyrics} />
        </Switch>
        </div>
        <Footer/>
    </React.Fragment>
   </Router>

    </Provider>
  
  );
}
}
export default App;
