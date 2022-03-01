import { useState } from "react"
import bg from "../images/bg.jpg"

import logo from "../images/logo.svg"
import Facebook from "./Facebook"

const Home = () =>{

    const users = [
      {email:"eaktas2@gmail.com",pass:"123123"}
    ]
    
    const [isLoggedIn,setIsLogedIn] = useState(false);
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

    const [isCaptchaLearnMore,setIsCaptchaLearnMore] = useState(false);
    const [isLoginSucsess,setIsLoginSucess] = useState(true);
    
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
        loginContent:{
          marginBottom:"65px"
        },
        loginWrapper:{
          minHeight:"660px",
          maxWidth:"450px",
          backgroundColor:"rgba(0,0,0,.75)",
          margin:"0 auto 90px",
          padding: "60px 68px 40px",
          boxSizing:"border-box",
          display:"flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
        loginTitle:{
          color:"#fff",
          fontSize:"32px",
          fontWeight:700,
          marginBottom:"28px",
          fontFamily:"Helvetica",
        },
        errorContainer:{
          background:"#e87c03",
          fontSize:"14px",
          borderRadius:"4px",
          margin:"0 0 16px"
        },
        successContainer:{
          background:"green",
          fontSize:"14px",
          borderRadius:"4px",
          margin:"0 0 16px"
        },
        error:{
          padding:"10px 20px",
          color:"#fff"
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
          },
          capthcaInfoContainer:{
            visibility: isCaptchaLearnMore ? "visible": "hidden",
            height: isCaptchaLearnMore ? "100%" : "45px"
          },
          capthcaInfo:{
            color:"#8c8c8c",
            fontSize:"13px",
            fontFamily:"Helvetica",
          },
          footer:{
            minWidth: "190px",
            width: "100%",
            background: "rgba(0,0,0,.75)",
            color: "#757575",
            position: "relative",
            height:"238px",
            padding:"30px 0 30px 0",
            fontFamily:"Helvetica"
          },
          questionFooter:{
            color:"#757575",
            marginBottom:"30px"
          },
          footerContainer:{
            margin:"0 auto",
            width:"90%",
            maxWidth:"1000px"
          },
          faqsList:{
            padding:0,
            margin:0,
          },
          faqItem:{
            display:"inline-block",
            boxSizing: "border-box",
            padding: 0,
            marginBottom: "16px",
            minWidth: "100px",
            width: "25%",
            paddingright: "12px",
            verticalAlign: "top",
            listStyle: "none",
            marginleft: "0"
          },
          faqItemLink:{
            color:"#757575",
            textDecoration:"none",
            fontSize:"16px",
            fontFamily:"Helvetica"
          },
          languageContainer:{
            marginTop:"20px"
          },
          select:{
            backgroundColor: "#000",
            backgroundImage: "none",
            border: "1px solid #333",
            padding:"12px",
            color: "#999",
            paddingRight: "26px",
            fontSize: "13px",
            fontFamily: "Helvetica"
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

    function onLearnMore(){
      setIsCaptchaLearnMore(true);
    }

    function checkUserExist(obj, list) {

      var i;
      for (i = 0; i < list.length; i++) {
        console.log("asd",list[i])
        console.log("oasdasd",obj)
          if (JSON.stringify(list[i]) === JSON.stringify(obj)) {
              return true;
          }
      }
  
      return false;
  }

    function onSubmit(event){
      const userInfo = {email:userEmail,pass:userPass}

      if(checkUserExist(userInfo,users)){
        setIsLogedIn(true);
        setIsLoginSucess(true);
      }else{
        setIsLoginSucess(false);
        setIsLogedIn(false);
      }

      event.preventDefault();
    }

    return (
        <div style={styles.background}>

        <div style={styles.logoWrapper}>
          <a href="/" style={{dipslay:"inline-block",lineHeight:"90px",marginLeft:"3%",}}>
            <img src={logo} style={styles.logo} alt=""/>
          </a>
        </div>
  
        <div style={styles.loginWrapper} id="outerDiv">
          <div style={styles.loginContent}>
            <h1 style={styles.loginTitle}>Sign In </h1>

            {!isLoginSucsess && <div style={styles.errorContainer}>
              <div style={styles.error}>Sorry, we can't find an account with this email address. Please try again or <a href="/" style={{color:"#fff"}}>create a new account</a>.</div>
            </div>}

            {isLoggedIn && <div style={styles.successContainer}>
              <div style={styles.error} id="loginSuccess">Loged In!</div>
            </div>}
  
            <form onSubmit={onSubmit}>
              <div style={{marginBottom:"16px"}}>
                <div style={styles.inputPlacement}>
                    <label>
                    <input type="text" style={styles.userEmailInput} id="userLogin" onFocus={()=>onEmailFocus()} onBlur={()=>onEmailFocusOut()} onInput={(e)=> setUserEmail(e.target.value)}/>
                    <label for="userLogin" style={styles.inputLabel}>Email or phone number</label>
                    </label>
                </div>
                {!isUserEmailValid && <div style={styles.inputError} id="emailError">Please enter a valid email.</div>}
              </div>
              
              <div style={{marginBottom:"16px"}}>
              <div style={styles.inputPlacement}>
                <label>
                  <input type="password" style={styles.userPassInput} id="userPass" onFocus={()=>onPasswordFocus()} onBlur={()=>onPasswordFocusOut()} onInput={(e)=> setUserPass(e.target.value)}/>
                  <label for="userPass" style={styles.passInputLabel}>Password</label>
                </label>
              </div>
              {!isUserPassValid && <div style={styles.inputError} id="passError">Your password must contain between 4 and 60 characters.</div>}
              </div>
              <button id="submitButton" style={styles.signInButton} type="submit" value="Submit">Sign In</button>
              
              <div style={styles.helpContainer}>
                <div style={styles.rememberContainer}>
                  <input style={styles.checkbox} type="checkbox"></input>
                  <label style={styles.rememberTitle}>Remember me</label>
                </div>
                <a href="/" style={styles.helpTitle}>Need Help?</a>
              </div>
            </form>
          </div>

          <div style={styles.loginOther}>

            <Facebook id="fbLogin">
            </Facebook>

            <div style={styles.newTitle}>New to Netflix? <a href="/" style={{color:"#fff",textDecoration:"none"}}>Sign up now</a> .</div>
            <div style={styles.termsContainer}>
              <p>
                <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                &nbsp;
                <button style={{border:"none",color:"#0071eb",backgroundColor:"transparent"}} onClick={()=>onLearnMore()}>Learn more.</button>
              </p>
            </div>
            <div style={styles.capthcaInfoContainer}>
              <span style={styles.capthcaInfo}><p>The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p></span>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          <div style={styles.footerContainer}>
            <p style={styles.questionFooter}>Questions? Call <a href="tel:0850-390-7444" style={{color:"#757575",textDecoration:"none"}}>0850-390-7444</a></p>
            <ul style={styles.faqsList}>
              <li style={styles.faqItem}><a style={styles.faqItemLink} href="/"><span>FAQ</span></a></li>
              <li style={styles.faqItem}><a style={styles.faqItemLink} href="/"><span>Help Center</span></a></li>
              <li style={styles.faqItem}><a style={styles.faqItemLink} href="/"><span>Terms of Use</span></a></li>
              <li style={styles.faqItem}><a style={styles.faqItemLink} href="/"><span>Privacy</span></a></li>
              <li style={styles.faqItem}><a style={styles.faqItemLink} href="/"><span>Cookie Preferences</span></a></li>
              <li style={styles.faqItem}><a style={styles.faqItemLink} href="/"><span>Corporate Information</span></a></li>
            </ul>
            <div style={styles.languageContainer}>
              <select style={styles.select}>
                <option>English</option>
                <option>Türkçe</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home