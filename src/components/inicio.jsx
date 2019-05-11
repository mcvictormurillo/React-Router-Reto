import React, {Component} from 'react';
import {Card, Container} from 'semantic-ui-react';
import Movie from './movie'
class Inicio extends Component{
    render(){
        return(
            <div>
                <h1>Estamos en inicio</h1>
                <Container>
                    <Card.Group>
                        {
                            this.props.movies.map((movie,index)=>{
                                return(
                                    <Movie movie={movie}  key={index}/>
                                )
                            })
                        }
                    </Card.Group>
                </Container>
            </div>
        )
    }
}


export default Inicio;