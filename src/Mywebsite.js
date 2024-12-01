import { Link } from "react-router-dom"

const Mywebsite=()=>{

    return(
        <div  className="mywebsite" style={{
            display:'flex',
            alignItems:'center',
            flexDirection:'column'
        }}>
            <h2>Uday Pratap Yadav welcomes you!</h2>
            <h3><Link to={'/'}>Go To Home</Link></h3>
        </div>
    )
}
export default Mywebsite