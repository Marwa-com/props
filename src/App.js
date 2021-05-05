import myWonderfulImage from "./myImage.jpg";
import './App.css';
import MyProfile from './Profile/profile';

function App() {
  let fn ="Amri Marwa"
  const handleName = () => alert(fn)
  return (
    <div className="App" style={{minHeight:"100vh" ,backgroundColor:"lightgreen", textAlign:"center"}}>
 <MyProfile fullname="Amri Marwa" bio="painting" profession="engineer" handleName={handleName}>
<img  style={{width:200 ,height:200 ,borderRadius:100 }} src={myWonderfulImage} alt ='myImage'/>
 </MyProfile>
    </div>
  );
}

export default App;
