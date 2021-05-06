import React from "react";
import PropTypes from "prop-types";

const MyProfile = ( props ) =>{ 
    console.log(props)
    return(
        <div>
           <button style={{color:"black", fontWeight:"700"  ,backgroundColor:"blue" ,borderStyle:" 2 solid black" }} onClick={props.handleName}>
                display username
           </button> 
           <h1  style={{color:"crimson" ,fontStyle:"italic" ,fontWeight:"200" ,marginLeft:"200" }}>
            hello, I'm {props.fullname}.I love {props.bio} and i'm an {props.profession} 
           </h1>;
            {props.children}
        </div>
 )
}
export default MyProfile;

MyProfile.propTypes ={
    fullname:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
   
}
MyProfile.defaultProps = {
    fullname:"username ",
    bio:"interest",
    profession: "job"
   };