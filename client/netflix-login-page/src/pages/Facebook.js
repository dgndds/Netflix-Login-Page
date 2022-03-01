import React, { Component } from "react";
import fb from "../images/fblogo.png"
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
      <div style={{
        background:"green",
        fontSize:"14px",
        borderRadius:"4px",
        margin:"0 0 16px"
      }} id="fbSuccess">
              <div style={{
          background:"green",
          fontSize:"14px",
          borderRadius:"4px",
          margin:"0 0 16px"
        }}>Loged In!</div>
            </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
        appId="1032223377391278"
        autoLoad
        fields="name,email,picture"
        callback={this.responseFacebook}
        render={renderProps => (
          <div onClick={renderProps.onClick}>
              <div style={{
            border:"none",
            background:"0 0",
            padding:0,
            display:"flex",
            alignItems:"center",
            fontSize:"14px"}}>
                <img src={fb} style={{
            height:"20px",
            width:"20px",
            marginRight:"10px"
          }} alt=""></img>
                <span style={{color:"#737373",
            fontSize:"13px",
            fontWeight:"500"}}>Login with Facebook</span>
              </div>
            </div>
        )}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}