import React from 'react';
import { CreaticAcademyContext } from "../Context";
import {Link} from 'react-router-dom'
import OpcionesCrud from '../OpcionesCrud'

    class  CreateMovie extends React.Component {

        render(){

        let title = React.createRef();
        let overview = React.createRef();
        let poster_path = React.createRef();

        return(
            //https://cd.cinescape.com.pe/cinescape-603x336-183021.jpg
            <CreaticAcademyContext.Consumer>

            {
                value => {
                    return(
                        <div className="ui">
                        <h2>Nueva Pelicula</h2>
                            <OpcionesCrud/>
                            <form className="ui form">
                                
                                <div className="field">
                                    <label>Titulo </label><input placeholder="Titulo" ref={title} />
                                </div>
                                <div className="field">
                                    <label>Descripcion</label><input placeholder="Descripcion" ref={overview} />
                                </div>
                                <div className="field">
                                    <label>Imagen</label><input placeholder="url" ref={poster_path}/>
                                </div>
                                <Link to="/inicio">
                                <button type="button" className="ui button" onClick={()=>{
                                    const movie = {
                                        "vote_count": 4845,
                                        "id": Date.now(),
                                        "video": false,
                                        "vote_average": 8.6,
                                        "title": title.current.value,
                                        "popularity": 303.658,
                                        "poster_path": poster_path.current.value,
                                        "original_language": "en",
                                        "original_title": "Avengers: Endgame",
                                        "genre_ids": [
                                        12,
                                        878,
                                        28
                                        ],
                                        "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
                                        "adult": false,
                                        "overview": overview.current.value,
                                        "release_date": "2019-04-24"
                                    }
                                    value.addMovie(movie)
                                }}>Guardar</button>

                                </Link>
                            </form>
                        </div>
                    )
                }
            }
            
            </CreaticAcademyContext.Consumer>
        )
        }
    }


export default CreateMovie;