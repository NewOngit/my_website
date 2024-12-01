import { Link } from "react-router-dom";

const Links=({item})=>{
    return(
        <article style={{border:".5px solid rgba(0, 0, 0, .1)"}}>
    <Link to={item.url} style={{textDecoration: "none",
  color: "black", padding:"20px"}}><h1 >{item.title}</h1><p>{item.description}</p></Link>
</article>
    )
}
export default Links;