import React, {Component} from 'react';
import {Card} from 'semantic-ui-react'; 
class Movie extends Component{

    render(){
        return(
            <div>
                <Card
                    image={`http://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path}`}
                    header={this.props.movie.title}
                    description={this.props.movie.overview}
                    
                />
            </div>
        )
    }
}

export default Movie;