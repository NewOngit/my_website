import Links from './Links';
import Nav from './Nav';
const Home =({items,headerName,setHeaderName,search,setSearch})=>{
setHeaderName('My Portfolio')
  return(
<div>
<Nav search={search} setSearch={setSearch}/>
<div className="Home">

{
  items.map((item)=>{
    return(<Links item={item}/>
  )
  })
  
}
    
</div>

</div>
)
}
export default Home;