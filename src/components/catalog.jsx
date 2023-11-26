import {useState} from 'react'
import '../style/catalog.css'
import {  Link , useParams , useNavigate} from 'react-router-dom';
const data =  require("../vape.json");
function Catalog() {
  const [list, SetList] = useState(data['elfbar-500'])
  return (
    <>
    <div className="title">ELF BAR BC5000</div>
    <div className="items">
    {list.map((el, key) => (
      
    <>
    <Link to={`/product/${el.path}`}>
            <div className="card"><img src={require(`../static/img/${el.id}/0.webp`)} alt="" srcset="" /> <div className="info"><div className="title">{el.title}</div><div className="price">{el.price} &#x20bd; </div> </div></div>
   </Link>
    </>
     ))}
  
      </div>
    </>
  )
}

export default Catalog
