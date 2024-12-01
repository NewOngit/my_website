import { Form, Link } from "react-router-dom";

const Nav =({search,setSearch})=>{

    return(
<nav>
<form onSubmit={(e)=>e.preventDefault()} className="myForm">
    <input autoFocus
    id="search"
    type="text"
    placeholder="search items"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    style={{flexGrow:"1",margin:'1rem 1rem 0 1rem'}}/>
    <ul style={{flexGrow:"1"}}>
<Link to={`/`} style={{padding:'1rem',color:'white'}}>Home</Link>
<Link to={`/about`} style={{padding:'1rem',color:'white'}}>About</Link>

    </ul>
</form>

</nav>

    )
}
export default Nav;