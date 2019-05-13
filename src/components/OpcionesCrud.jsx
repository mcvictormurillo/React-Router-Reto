import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class OpcionesCrud extends Component {
  render() {
    return (
     
        <div className="ui centered grid">
          <Link to="/createMovie" ><button className="ui red button">Crear</button></Link>          <Link to="/inicio"><button className="ui olive button">Listar</button></Link>
          <br />
        </div>
        
    )
  }
}
