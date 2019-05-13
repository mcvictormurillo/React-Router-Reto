import React from 'react';
import {Container} from 'semantic-ui-react';
import Router from './components/Router'
import CreaticAcademyProvider from './components/Context'
import { CreaticAcademyContext } from "./components/Context";
import './App.css';
import "semantic-ui-css/semantic.min.css";
class App extends React.Component {

 render(){
  return (
    <CreaticAcademyProvider>
      <div className="container">
        <Container>
          <CreaticAcademyContext.Consumer>
            {
              value => {
                value.state.map((i)=>{
                  //console.log(i)
                })
                return (
                  <Router movies={value.state}></Router>
                )
              }
            }
            
          </CreaticAcademyContext.Consumer>
        </Container>
        </div>
      </CreaticAcademyProvider>
   
  );
 }
}

export default App;
