import React, { Component } from "react";
import dataJSON from '../data.json'

const CreaticAcademyContext = React.createContext();
export { CreaticAcademyContext };

class CreaticAcademyProvider extends Component {
  
  
state = {
  movies: []
}

componentDidUpdate(){
  console.log('hay una actualizacion')

}
  componentWillMount(){
  
    console.log('entro.....')
    if(this.state.movies.length==0){
      this.setState( {
        movies: dataJSON.results
      })
    }

    
    
  }

  render() {
    return (
      <CreaticAcademyContext.Provider
        value={{
          state: this.state.movies,
          
          addMovie: movie =>{
            console.log('Agregando nueva pelicula...');
            let movies_actuales = this.state.movies;
            movies_actuales.push(movie)
            this.setState({
              state: movies_actuales
            })
            console.log(this.state.movies)
          },

          updateMovie: (id,movie)=>{
            let movies_actuales = this.state.movies;
            let movies_edited = movies_actuales.map((item)=>{
              if(id==item.id){
                item.title=movie.title;
                item.overview=movie.overview;
                item.poster_path=movie.poster_path;
              }
              return item
            })
            this.setState({
              state: movies_edited
            })

          },

          deleteMovie: (id)=>{
            let movies_actuales = this.state.movies;
            let dataIndex = null
            movies_actuales.forEach((item,index)=>{
              console.log(index)
              if(id==item.id){
                console.log(item.title)
                dataIndex = index
              }
            })
            movies_actuales.splice(dataIndex,1)
            console.log(dataIndex)
            this.setState({
              state: movies_actuales
            })

          }
           
        }}>
        {this.props.children}
      </CreaticAcademyContext.Provider>
    );
  }
}

export default CreaticAcademyProvider;