import React from 'react';
import {Container} from 'semantic-ui-react';
import dataJSON from './data.json'
import Router from './components/Router'
import './App.css';
//import 'semantic-ui-css/'
class App extends React.Component {

  state = {
    movies : []
  }
  componentDidMount(){
    console.log(dataJSON)

    this.setState({
      movies : dataJSON.results
    })
  }



 render(){
  return (
    <div className="container">
      <Container>
        <Router movies={this.state.movies}>
        

        </Router>
      </Container>
    </div>
  );
 }
}

export default App;
