import React from 'react'
import '../style/catalog.css'
function Catalog() {
  return (
    <>
    <div className="items">
      <div className="card"><img src={require("../static/elements/1.jpeg")} alt="" srcset="" /> <div className="info"><div className="title">elfbar</div><div className="price">2400</div> <div className="rods-lenght">2000</div></div></div>
      <div className="card"><img src={require("../static/elements/1.jpeg")} alt="" srcset="" /> <div className="info"><div className="title">elfbar</div><div className="price">2400</div> <div className="rods-lenght">5000</div></div></div>
      <div className="card"><img src={require("../static/elements/1.jpeg")} alt="" srcset="" /> <div className="info"><div className="title">elfbar</div><div className="price">2400</div> <div className="rods-lenght">4000</div></div></div>
      <div className="card"><img src={require("../static/elements/1.jpeg")} alt="" srcset="" /> <div className="info"><div className="title">elfbar</div><div className="price">2400</div> <div className="rods-lenght">10000</div></div></div>

      </div>
    </>
  )
}

export default Catalog
