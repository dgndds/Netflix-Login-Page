import { useState } from "react"
import bg from "../images/bg.jpg"
import fb from "../images/fblogo.png"
import logo from "../images/logo.svg"

const Home = () =>{
    
    const [focusFontSize,setfocusFontSize] = useState("16px");
    const [focusTopValue,setfocusTopValue] = useState("50%");

    const [passfocusFontSize,setPassfocusFontSize] = useState("16px");
    const [passfocusTopValue,setPassfocusTopValue] = useState("50%");

    const [passErrorBorder, setPassErrorBorder] = useState("none");
    const [errorBorder, setErrorBorder] = useState("none");

    const [userEmail, setUserEmail] = useState("");
    const [isUserEmailValid,setIsUserEmailValid] = useState(true);

    const [userPass, setUserPass] = useState("");
    const [isUserPassValid,setIsUserPassValid] = useState(true);
    
    const styles = {
        background:{
          backgroundImage: `url(${bg})`,
          backgroundColor: "rgba(0,0,0,.5)",
          backgroundBlendMode: "multiply",
          minHeight:"100%",
          minWidth:"100%"
        },
        logo:{
          height:"45px",
          width:"167px",
          verticalAlign:"middle"
        },
        logoWrapper:{
          width:"100%",
        },
        loginWrapper:{
          minHeight:"660px",
          maxWidth:"450px",
          backgroundColor:"rgba(0,0,0,.75)",
          margin:"0 auto",
          padding: "60px 68px 40px",
          boxSizing:"border-box"
        },
        loginContent:{
      
        },
        loginTitle:{
          color:"#fff",
          fontSize:"32px",
          fontWeight:700,
          marginBottom:"28px",
          fontFamily:"Helvetica",
        },
        userEmailInput:{
          backgroundColor: "#333",
          height:"50px",
          width:"100%",
          border:0,
          borderRadius:"4px",
          padding: "16px 20px 0",
          boxSizing:"border-box",
          fontSize:"16px",
          color:"white",
          borderBottom:`${errorBorder}`
        },
        inputLabel:{
          position:"absolute",
          top:`${focusTopValue}`,
          left:"20px",
          transform: "translateY(-50%)",
          fontSize: `${focusFontSize}`,
          fontFamily: "Helvetica",
          color:"#8c8c8c",
        },
        inputPlacement:{
          position:"relative",
        },
        inputError:{
            color:"#e87c03",
            padding: "6px 3px",
            fontSize:"13px",
            marginBottom:"-6px"
        },
        passInputLabel:{
            position:"absolute",
            top:`${passfocusTopValue}`,
            left:"20px",
            transform: "translateY(-50%)",
            fontSize: `${passfocusFontSize}`,
            fontFamily: "Helvetica",
            color:"#8c8c8c",
        },
        userPassInput:{
            backgroundColor: "#333",
            height:"50px",
            width:"100%",
            border:0,
            borderRadius:"4px",
            padding: "16px 20px 0",
            boxSizing:"border-box",
            fontSize:"16px",
            color:"white",
            borderBottom:`${passErrorBorder}`
          },
          signInButton:{
            borderRadius:"4px",
            fontSize:"16px",
            fontWeight:"700",
            margin:"24px 0 12px",
            width:"100%",
            background:"#e50914",
            color:"#fff",
            padding:"16px",
            border:"none"
          },
          helpContainer:{
            display:"flex",
          },
          rememberContainer:{
            flexGrow:1,
            // paddingLeft:"20px"
          },
          checkbox:{
            margin:0,
            borderRadius:"8px",
            backgroundColor: "#fff",
            height:"16px",
            width:"16px",
            boxSizing:"border-box",
            marginRight:"4px"
          },
          rememberTitle:{
            color:"#b3b3b3",
            fontSize:"13px",
            fontWeight:"500",
            position:"absolute",
            marginLeft:"1px",
            fontFamily:"Helvetica",
            lineHeight:"1.6"
          },
          helpTitle:{
            color:"#b3b3b3",
            fontSize:"13px",
            fontWeight:"500"
          },
          fbLogo:{
            height:"20px",
            width:"20px",
            marginRight:"10px"
          },
          fbTitle:{
            color:"#737373",
            fontSize:"13px",
            fontWeight:"500"
          },
          fbButton:{
            border:"none",
            background:"0 0",
            padding:0,
            display:"flex",
            alignItems:"center",
            fontSize:"14px"
          },
          newTitle:{
            color:"#737373",
            fontSize:"16px",
            fontWeight:"500",
            marginTop:"16px",
            fontFamily:"Helvetica"
          },
          termsContainer:{
            fontSize:"13px",
            color:"#8c8c8c"
          }
      }

    function onEmailFocus(){
        setfocusFontSize("10px");
        setfocusTopValue("15%");
    }

    function onEmailFocusOut(){
        if(userEmail.length === 0){
            setfocusFontSize("16px");
            setfocusTopValue("50%");
        }

        if(userEmail.length <=3){
            setErrorBorder("2px solid orange");
            setIsUserEmailValid(false)
        }else{
            setErrorBorder("none");       
            setIsUserEmailValid(true)
        }
    }

    function onPasswordFocus(){
        setPassfocusFontSize("10px");
        setPassfocusTopValue("15%");
    }

    function onPasswordFocusOut(){
        if(userPass.length === 0){
            setPassfocusFontSize("16px");
            setPassfocusTopValue("50%");
        }

        if(userPass.length <= 4 ||userPass.length >= 60){
            setPassErrorBorder("2px solid orange");
            setIsUserPassValid(false)
        }else{
            setPassErrorBorder("none");       
            setIsUserPassValid(true)
        }
    }

    return (
        <div style={styles.background}>

        <div style={styles.logoWrapper}>
          <a href="#" style={{dipslay:"inline-block",lineHeight:"90px",marginLeft:"3%",}}>
            <img src={logo} style={styles.logo} />
          </a>
        </div>
  
        <div style={styles.loginWrapper}>
          <div style={styles.loginContent}>
            <h1 style={styles.loginTitle}>Sign In</h1>
  
            <form>
              <div style={{marginBottom:"16px"}}>
                <div style={styles.inputPlacement}>
                    <label>
                    <input type="text" style={styles.userEmailInput} id="userLogin" onFocus={()=>onEmailFocus()} onBlur={()=>onEmailFocusOut()} onInput={(e)=> setUserEmail(e.target.value)}/>
                    <label for="userLogin" style={styles.inputLabel}>Email or phone number</label>
                    </label>
                </div>
                {!isUserEmailValid && <div style={styles.inputError}>Please enter a valid email.</div>}
              </div>
              
              <div style={{marginBottom:"16px"}}>
              <div style={styles.inputPlacement}>
                <label>
                  <input type="password" style={styles.userPassInput} id="userPass" onFocus={()=>onPasswordFocus()} onBlur={()=>onPasswordFocusOut()} onInput={(e)=> setUserPass(e.target.value)}/>
                  <label for="userPass" style={styles.passInputLabel}>Password</label>
                </label>
              </div>
              {!isUserPassValid && <div style={styles.inputError}>Your password must contain between 4 and 60 characters.</div>}
              </div>
              <button style={styles.signInButton} type="submit">Sign In</button>
              
              <div style={styles.helpContainer}>
                <div style={styles.rememberContainer}>
                  <input style={styles.checkbox} type="checkbox"></input>
                  <label style={styles.rememberTitle}>Remember me</label>
                </div>
                <a style={styles.helpTitle}>Need Help?</a>
              </div>
            </form>
          </div>

          <div style={styles.loginOther}>
            <form>
            <div style={styles.facebookMinimal}>
              <button style={styles.fbButton}>
                <img src={fb} style={styles.fbLogo}></img>
                <span style={styles.fbTitle}>Login with Facebook</span>
              </button>
            </div>
            </form>

            <div style={styles.newTitle}>New to Netflix? <a href="/" style={{color:"#fff",textDecoration:"none"}}>Sign up now</a> .</div>
            <div style={styles.termsContainer}>
              <p>
                <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                &nbsp;
                <button>Learn more.</button>
              </p>
            </div>

          </div>
        </div>
      </div>
    )
}

export default Home