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
    console.log(product)
  return (
    <div>
        <div className="image"><img src={require(`../static/img/${product.id}/0.webp`)} alt="" srcset="" /></div>
        <div className="product-info">
            <div className="title">{product.title}</div>
        </div>
    </div>
  )
}
