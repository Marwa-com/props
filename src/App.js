import myWonderfulImage from "./myImage.jpg";
import myTabf from "./tab1.jpg";
import myTabth from "./tab3.jpg";
import './App.css';
import MyProfile from './Profile/profile';

function App() {
  let fn ="Amri Marwa"
  const handleName = () => alert(fn)
  return (
    <div className="App" style={{minHeight:"100vh" ,backgroundColor:"lightgreen", textAlign:"center"}}>
 <MyProfile fullname="Amri Marwa" bio="painting" profession=" electrical engineer and developer full stack" handleName={handleName}>
<img  style={{width:200 ,height:200 ,borderRadius:100 }} src={myWonderfulImage} alt ='myImage'/>
 </MyProfile>
 <div >
 <p style={{color:"black" ,fontStyle:"italic" , fontWeight:"400"}}> I code beautifully simple things, and I love what I do.<br/>you can contact
   me with may <br/>Email:<span style={{color:"blue"}}> amri.maroia@yahoo.fr </span> <br/> In link below you can see some 
   examples of my codes <br/> <span style={{color:"blue"}}> https://github.com/Marwa-com </span> </p> 
<p style={{color:"black"}}> Also, i have some decorative paintings :  </p> <br/>
<img  style={{width:200 ,height:200 ,borderRadius:20 }} src={myTabf} alt ='tab1'/>
<img  style={{width:200 ,height:200 ,borderRadius:20  }} src={myTabth} alt ='tab3'/>
 </div>
    </div>
  );
}

export default App;
