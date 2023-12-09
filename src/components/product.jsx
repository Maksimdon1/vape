import {useState} from 'react'
import { useParams } from "react-router-dom";
import '../style/product.css'
const list = require("../vape.json")


export default function Product() {

    const { path } = useParams();
    const [product, Setproduct] = useState(data)
    function data(){
        return list['elfbar-500'].find((el) => el["path"] === path);

    }

  return (
    <div className={'product'}>
        <div className="image"><img src={require(`../static/img/${product.id}/0.webp`)} alt="" srcset="" /></div>
        <div className="product-info">
            <div className="title">{product.title}</div>
            <div className="info">
                <ul>
                    <li> Количество затяжек: до 5000 </li>
                    <li> Вкус: {  /,(.+)/.exec(product.title)[1]  } </li>
                    <li> Мощность: 7-12вт </li>
                    <li>Имеет индивидуальную упаковку</li>
                    <li>Крепость: 2%</li>
                    <li>Цена - {product.price} &#x20bd;</li>
                    
                </ul>
            </div>
           
            <div className="buttons"><div className="add-to-cart">в корзину </div><div className="buy">купить</div></div>
        </div>
    </div>
  )
}
