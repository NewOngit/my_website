const Footer =()=>{
let date=new Date();
return(
    <div style={{textAlign:'center',backgroundColor:'#4284f5'}}>
        <h1>copyright &copy; {date.getFullYear()}</h1>
        </div>
)
}
export default Footer;