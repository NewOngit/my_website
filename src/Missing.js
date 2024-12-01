import {Link} from 'react-router-dom'
const Missing =({headerName,setHeaderName})=>{
    setHeaderName('Error')
return(
    <div style={{display:"flex",height:"100vh",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h1>URL  Not Found {`:(`}</h1><p></p>
        <Link to={'/'}>visit homepage</Link>
    </div>
)
}
export default Missing;