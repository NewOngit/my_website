const Git =({headerName,setHeaderName})=>{
setHeaderName('My git repository')
    const loa=()=>{const req=new XMLHttpRequest();
        req.open('GET','https://cors-anywhere.herokuapp.com/https://github.com',true);
        // req.setRequestHeader( 'Access-Control-Allow-Origin','http://localhost:3000');
        req.send();
        console.log('send Successfully')
        req.onload=()=>{
       document.getElementById('git_').innerHTML=req.responseText;
        }
        }
    return(

    <div id="git_" className="Git">
        <button onClick={loa}>click</button>
    </div>
 )
}
export default Git;