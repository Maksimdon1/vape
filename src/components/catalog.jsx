import {useState} from 'react'
import '../style/catalog.scss'
import {  Link , useParams , useNavigate} from 'react-router-dom';
const data =  require("../vape.json");
function Catalog() {
  const [filter, SetFilter] = useState({'show':'table'})
  const [list, SetList] = useState(data['elfbar-500'])
  return (
    <>
    <div className="show-type">
      <div className="title">Каталог</div>
      <div className={"icon" + '-' + filter.show}>
      {filter.show==='table'&& (<><img onClick={(el)=>{SetFilter({...filter, show: 'list'})}} src={require('../static/elements/four-squares-list-svgrepo-com.svg').default} alt="" srcset="" /></>)}
      {filter.show==='list'&& (<><img onClick={(el)=>{SetFilter({...filter, show: 'table'})}}  src={require('../static/elements/list-ul-alt-svgrepo-com.svg').default} alt="" srcset="" /></>)}
      </div>
    </div>
    <div className="title">ELF BAR BC5000</div>

    <div className={'catalog'+ '-'+ filter.show}>
    {list.map((el, key) => (
      
    <>
    <Link to={`/product/${el.path}`}>
            <div className="card"><img src={require(`../static/img/${el.id}/0.webp`)} alt="" srcset="" /> 
            <div className="info">
              <div className="">
              <div className="title">{el.title}</div><div className="price">{el.price} &#x20bd; </div> 
              </div>
              <div className={"delivery" + '-'+ el['delivery-type']}> 
                {el['delivery-type']==='good'&& (<>сегодня, до 8 часов</>)}
                {el['delivery-type']==='bad'&& (<>в течении недели</>)}
                {el['delivery-type']==='not'&& (<>нет в наличии</>)}
              </div>
            </div>
            </div>
   </Link>
    </>
     ))}
  
      </div>
    </>
  )
}

export default Catalog
