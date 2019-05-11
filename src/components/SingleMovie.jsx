
import React, { Component } from 'react'
//import {Card, Container, Header} from 'semantic-ui-react';
  class SingleMovie extends Component {
    render() {


        if(this.props.movie){
            console.log(this.props.movie)
            return(this.props.movie.title)
        }else{
            return('no existe')
        }
    }
}


export default SingleMovie;

