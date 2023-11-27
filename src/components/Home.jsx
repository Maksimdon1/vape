import React from 'react'
import '../style/home.css'
import {  Link , useParams , useNavigate} from 'react-router-dom';

export default function Home() {
  return (
    <>
    <div className="title">Что вы предпочитаете ?</div>
     <div className="categories">
        <Link  to={'/catalog'}><div className="category-item"><div className="header"> <span>Ж</span> <span>и</span> <span>ж</span> <span>и</span> </div></div> </Link>
        
        <Link  to={'/catalog'}><div className="category-item"><div className="header">  <span>О</span>   <span>д</span>  <span>н</span>  <span>о</span>  <span>р</span>  <span>а</span>  <span>з</span> <span>к</span> <span>и</span></div></div> </Link>
        
        <Link  to={'/catalog'}><div className="category-item"><div className="header">Поды</div></div> </Link>
        
        <Link  to={'/catalog'}> <div className="category-item"><div className="header">Электронки</div></div> </Link>

     </div>




    </>
  )
}
