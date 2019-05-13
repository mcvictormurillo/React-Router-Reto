import React, { Component } from 'react'
import consultaMovieId from '../funciones/consultas';
import { CreaticAcademyContext } from "../Context";
import Movie from '../movie'
import {Link} from 'react-router-dom'
class EditMovie extends Component {
    render() {

        let title = React.createRef();
        console.log(title)
        let overview = React.createRef();
        let poster_path = React.createRef();
      
        console.log(`id: ${this.props.movie_id}`)
        let movie_to_edit = consultaMovieId(this.props.movie_id)
        console.log(movie_to_edit)
        return (
            <CreaticAcademyContext.Consumer>
                {
                    value => {
                        return(
                            <div className="ui divided two column grid">
                                <div className="row">
                                    <div className="column">
                                        <form className="ui form">
                                            <h2>Editar Pelicula</h2>
                                            <div className="field">
                                                <label>Titulo </label><input placeholder="Titulo" ref={title}  />
                                            </div>
                                            <div className="field">
                                                <label>Descripcion</label><input placeholder="Descripcion" ref={overview} />
                                            </div>
                                            <div className="field">
                                                <label>Imagen</label><input placeholder="url" ref={poster_path}/>
                                            </div>
                                        <Link to="/inicio">
                                        <button type="button" className="ui button"  onClick={
                                            ()=>{
                                                let objMovie = {
                                                    title: title.current.value,
                                                    overview: overview.current.value,
                                                    poster_path: poster_path.current.value,

                                                }
                                                value.updateMovie(this.props.movie_id,objMovie)
                                            }
                                        }>Guardar</button>
                                        </Link>

                                        <Link to="/inicio">
                                        <button type="button" className="ui button"  onClick={
                                            ()=>{
                                                value.deleteMovie(this.props.movie_id)
                                            }
                                        }>Eliminar</button>
                                        </Link>
                                        </form>
                                    </div>
                                    <div className="column">
                                    <Movie movie={movie_to_edit}></Movie>
                                    </div>
                                    
                                </div>

                            </div>
                        )
                    }
                }
            
            
            </CreaticAcademyContext.Consumer>
        )
    }
}
export default EditMovie;

