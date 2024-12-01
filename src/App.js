
import Home from './Home';
import Header from './Header';
import Git from './Git';
import Certifiactes from './Certificates';
import Resume from './Resume';
import About from './About';
import Footer from './Footer';
import Missing from './Missing';
import Mywebsite from './Mywebsite';
import { Routes,Route } from 'react-router';
import { useEffect, useState } from 'react';
function App() {
  const[search,setSearch]=useState('');
  const[searchData,setSearchData]=useState([]);
  const[image,setImage]=useState(null);
  const[headerName,setHeaderName]=useState('My Portfolio')

  
  const[items,setItems]=useState([
    {
      title:"My Resume",
      description:"see my resume",
      url:"/resume"
    },
    {
      title:"My Certificates and Achievements",
      description:"see my certificates",
      url:"/Certificates"
    },
    {
      title:"My Projects",
      description:"Go to Github Repository",
      url:"/git"
    }
  ])

  useEffect(()=>{
    const data=items.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()));
    setSearchData(data);
  },[items,search]);
  return (
    <div className='App' >
      <Header  headerName={headerName} setHeaderName={setHeaderName} />
      
      <Routes>
         <Route path='/' element={<Home items={searchData} headerName={headerName} setHeaderName={setHeaderName} setSearch={setSearch}/>}/>
      <Route path='/certificates'   element={<Certifiactes headerName={headerName} setHeaderName={setHeaderName}/>}/>
      <Route path='/resume' element={<Resume image={image} setImage={setImage} headerName={headerName} setHeaderName={setHeaderName}/>}/>
      <Route path='/git'  element={<Git headerName={headerName} setHeaderName={setHeaderName}/>} />
      <Route path='/about' element={<About headerName={headerName} setHeaderName={setHeaderName}/>}/>
      <Route path='*' element={<Missing headerName={headerName} setHeaderName={setHeaderName}/> }/>
      <Route path='/my_website' element={<Mywebsite/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
