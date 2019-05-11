import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Inicio from './inicio'
import NoRoute from './NoRoute'
import SingleMovie from './SingleMovie';

class Router extends Component{


    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/inicio" render={ ()=>{
                        return(<Inicio movies={this.props.movies}></Inicio>)
                    }} />
                    <Route path="/otraruta" component={()=>{
                            return(
                                <div>
                                <h2>Hola otra ruta</h2>
                            </div>
                            )
                        }
                    } />

                    <Route path="/movie/:id" component={
                        (props)=>{
                            
                            const {match} = props;
                            let id = !isNaN(parseInt(match.params.id))
                            ? parseInt(match.params.id)
                            : 0;
                            
                            return <SingleMovie movie={this.props.movies[id]}/>;
                        }
                    }></Route>
                    <Route component={NoRoute}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}


export default Router;
