import { useEffect } from "react";

const Resume =({image,setImage,setHeaderName})=>{
    setHeaderName('My Resume')
let API_URL='https://drive.google.com/file/d/1-WK23ffK0Cqa6u24GEh_UU6nuOofLqhY/view?usp=drivesdk';
    useEffect(()=>{
const fetchImage=async()=>{
    try {
        const response=await fetch(API_URL);
    if(!response.ok) throw Error("Something went wrong");
    const imageBlob=await response.blob();
    const imageUrl=URL.createObjectURL(imageBlob);
    setImage(imageUrl);
    console.log("fetched Successfully")

    } catch (error) {
console.log(error.message);        
    }
    
}
(async()=>await fetchImage())();
    },[])

    return(
        <div className="Resume">
<iframe src="https://drive.google.com/file/d/176sjjgoq9uh_-2qlrx39SAChjYAPYxpT/preview"  allow="autoplay"></iframe>
  </div>
    )
}
export default Resume;