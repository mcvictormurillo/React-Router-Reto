import React, {Component} from 'react';
import {Card, Container} from 'semantic-ui-react';
import Movie from './movie'
import OpcionesCrud from './OpcionesCrud'
import { CreaticAcademyContext } from "./Context";
class Inicio extends Component{
    render(){
        return(
            <CreaticAcademyContext.Consumer>

            {value => {
                if(value.state.movies){
                    //console.log(value.state.movies)
                }
                return(
                    <div>
                        <h1>Peliculas Populares</h1>
                        <OpcionesCrud />
                        <div className="ui divided four column grid">
                        <div className="row">
                                <Card.Group>
                                        {
                                            this.props.movies.map((movie,index)=>{
                                                return(
                                                    <Movie movie={movie}  key={index}/>
                                                )
                                            })
                                        }
                                </Card.Group>      
                        </div>
                        </div>
                    
                    </div>

                )
            }}
            
            
            </CreaticAcademyContext.Consumer>
        )
    }
}


export default Inicio;