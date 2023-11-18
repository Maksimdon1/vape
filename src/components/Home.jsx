import React from 'react'
import '../style/home.css'
import {  Link , useParams , useNavigate} from 'react-router-dom';

export default function Home() {
  return (
    <>
    <div className="title">Что вы предпочитаете ?</div>
     <div className="categories">
        <Link  to={'slurry'}><div className="category-item"><div className="header">Жижи</div></div> </Link>
        
        <Link  to={'disposable'}><div className="category-item"><div className="header">Одноразки</div></div> </Link>
        
        <Link  to={'pods'}><div className="category-item"><div className="header">Поды</div></div> </Link>
        
        <Link  to={'electronic'}> <div className="category-item"><div className="header">Электронки</div></div> </Link>

     </div>
    </>
  )
}
