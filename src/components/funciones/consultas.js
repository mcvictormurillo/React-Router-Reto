import data from '../../data.json'
function consultaMovieId(id){
    console.log(id)
    let movie = data.results.filter((item)=>{
        if(id==item.id){
            return item
        }
    })
    return movie[0]
}


export default consultaMovieId;