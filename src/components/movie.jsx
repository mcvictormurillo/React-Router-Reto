import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'semantic-ui-react'; 
class Movie extends Component{

    render(){
        let urlImage= null;
        console.log(this.props.movie.poster_path)
        if(this.props.movie.poster_path.charAt(0)=='/'){
            
            urlImage = `http://image.tmdb.org/t/p/original/${this.props.movie.poster_path}`
        }else{
            urlImage = this.props.movie.poster_path
        }
        return(
           
                <Link to={`/edit/${this.props.movie.id}`}>
                    <Card onClick={()=>{
                        //console.log(this.props.movie.id)
                    }}
                        //image={`http://image.tmdb.org/t/p/original/${this.props.movie.poster_path}`}
                        image={urlImage}
                        header={this.props.movie.title}
                        description={this.props.movie.overview}
                        
                    />
                </Link>
          
        )
    }
}

export default Movie;