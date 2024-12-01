import Links from './Links'
const Home =({items,headerName,setHeaderName})=>{
setHeaderName('My Portfolio')
  return(

<div className="Home">
{
  items.map((item)=>{
    return(<Links item={item}/>
  )
  })
  
}
    
</div>

)
}
export default Home;