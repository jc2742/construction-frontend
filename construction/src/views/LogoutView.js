import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout(){
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState(null);
    const bearer = 'Bearer ' + localStorage.getItem('token')

    fetch("http://127.0.0.1:8000/api/logout/",{ 
        method: 'post', 
        headers: new Headers({
            'Authorization': bearer, 
        })
    }).then((response) => {
        if (response.status === 200){
          response.json().then(
              (result) => {
                  localStorage.setItem("token",result.token)
                  localStorage.setItem("update_token",result.update_token)
              });
          navigate("/")
      } else{
          setErrorMsg("Something went wrong during logout!");
        }
    })

    return(
        <div className="" style={{ color: "red", fontWeight: "bold" }}>
                  {errorMsg}
                </div>
    )
}