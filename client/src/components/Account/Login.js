import React, { PropTypes, Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { browserHistory } from 'react-router';
import moment from 'moment';
import styled from 'styled-components';



const Wrapper = styled.div`
  height: 100vh;
  background: #29abe2; /* Old browsers */
  background: -moz-linear-gradient(-45deg, #29abe2 0%, #00ffff 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, #29abe2 0%,#00ffff 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, #29abe2 0%,#00ffff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#29abe2', endColorstr='#00ffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
`;

const LoginBox = styled.div`
  background: white;
  align-self: center;
  margin-bottom: 15rem;  
  display:flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 1px 2px 17px #807d7d;
`;

const LoginBoxWhite = styled.div`
  width: 20rem;
  padding: 14px;
  background: white;
  border: 1px #ececec solid;
  border-radius: 2px;

  &:hover {
    cursor: pointer;
  }

  &:before {
    content: url('../../assets/img/google.png');
    position: relative;
    top: 5px;
    margin-right: 10px;
  }
  
  > button {
    text-align: left;
    font-size: 13px;
    color: #807d7d;
    border: none;    
    background: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

class Login extends Component {
  render() {
    const onSuccess = (response) => {      
      sessionStorage.token = response.accessToken;
      sessionStorage.expires = moment().add(response.tokenObj.expires_in, 'seconds');      
      browserHistory.push('/');
    }

    const onFailure = (response) => {
      console.log(response);      
    }
    
    return (
      <Wrapper>
        <LogoWrap>
          <img className="" src="../../assets/img/logo_big.png" alt="" />
        </LogoWrap>
        <LoginBox>          
          <LoginBoxWhite>
            <GoogleLogin                              
              clientId={'293030943336-m2mp3febsegct62ervri924enc7f05v7.apps.googleusercontent.com'}
              buttonText="Login with google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              approvalPrompt="force"
              responseType="id_token"
              className="googlebox"
              isSignedIn
            />
          </LoginBoxWhite>        		
        </LoginBox>
      </Wrapper>        
    );
  }
}

export default Login;