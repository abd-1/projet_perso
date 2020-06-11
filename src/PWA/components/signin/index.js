import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import valider from '../../../assets/valider.png';
import axios from 'axios';

const Signin = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const submit = e => {
    e.preventDefault();

    if (!formState.username || !formState.password) {
      setErrorMessage('Les valeurs ne doivent pas etre vide !');
      return;
    }
    axios({
      method: 'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: { username: formState.username, password: formState.password }
    })
      .then(res => {
        console.log('token : ' + res.headers['x-access-token']);
        localStorage.setItem('token', res.headers['x-access-token']);
        history.push('/forum');
      })
      .catch(err => {
        console.log(err);
        setErrorMessage('Une erreur est survenu');
      });
  };

  return (
    <DivContainer>
      <StyledForm onSubmit={submit}>
        <SigninInput
          type='text'
          name='Username'
          placeholder='Pseudo'
          onChange={e =>
            setFormState({ ...formState, username: e.target.value })
          }
        />
        <SigninInput
          type='password'
          placeholder='Mot de passe'
          onChange={e =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
        <DivLink>
          <ALink href='//www.jeuxvideo.com/sso/lost_password.php'>
            Mot de passe perdu
          </ALink>
        </DivLink>
        <DivContainer2>
          <SpanContainer></SpanContainer>
          <span>Protection par reCAPTCHA - </span>
          <ALink2 href='href="https://www.google.com/intl/fr/policies/privacy/'>
            Confidentialité
          </ALink2>
          <span> - </span>
          <ALink2 href='https://www.google.com/intl/fr/policies/terms/'>
            Conditions
          </ALink2>
        </DivContainer2>
        <StyledSpan>{errorMessage}</StyledSpan>
        <SigninButton type='submit' value='VALIDER' />
        <SpanReagie>
          Victime de harcèlement en ligne :{' '}
          <Alink3 href='/harcelement.htm'>comment réagir ?</Alink3>
        </SpanReagie>
      </StyledForm>
      <Div2>
        <Div3>
          <Div4>Vous n'avez pas de pseudo sur jeuxvideo.com ?</Div4>
          <Div5>
            C'est rapide, gratuit, et vous permettra de réserver votre pseudo
            sur les forums, afin que personne d'autre que vous ne puisse
            l'utiliser...
          </Div5>
          <AStyled href=''>Créer un compte</AStyled>
        </Div3>
      </Div2>
    </DivContainer>
  );
};

const StyledSpan = styled.span`
  color: red;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
`;

const AStyled = styled.a`
  background: #8a8a92;
  color: #fff;
  font-weight: 700;
  font-size: 0.8125rem;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  border: 0.0625rem solid transparent;
  padding: 0.375rem 0.75rem;
  line-height: 1.42857;
  border-radius: 0.25rem;
  user-select: none;
`;

const Div5 = styled.div`
  color: #858594;
  font-size: 0.6875rem;
  line-height: 1.3em;
  margin-bottom: 0.9675rem;
`;

const Div4 = styled.div`
  font-family: 'robotoboldcondensed', Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 1.3em;
  color: #797983;
`;

const Div3 = styled.div`
  padding-top: 0;
  text-align: left;
  margin-bottom: 2rem;
`;

const Div2 = styled.div`
  padding-left: 5px;
  padding-right: 5px;
`;

const SpanReagie = styled.span`
  display: inline-block;
  color: #9e9e9e;
  font-style: italic;
  padding: 1.875rem 0 0;
  font-size: 0.875rem;
`;

const ALink = styled.a`
  color: #006bd7;
`;

const Alink3 = styled.a`
  color: inherit;
`;

const ALink2 = styled.a`
  font-size: 10px;
  display: inline;
  color: rgb(136, 136, 136);
  font-family: tahoma, 'trebuchet ms';
  text-decoration: underline;
  margin: 0px 2px;
`;

const DivLink = styled.div`
  float: right;
  font-size: 0.6875rem;
  font-weight: 700;
  margin-top: 0.7rem;
  display: block;
`;

const DivContainer2 = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(136, 136, 136);
  margin-top: 45px;
  font-family: tahoma, 'trebuchet ms';
  margin-bottom: 20px;
`;

const SpanContainer = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-image: url(https://www.gstatic.com/recaptcha/api2/logo_48.png);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  vertical-align: middle;
`;

const SigninButton = styled.input`
  border: 0.0625rem solid transparent;
  background-color: #59b200;
  color: white;
  font: 1em sans-serif;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 5px;
  width: 176px;
  height: 36px;
  background-image: url(${valider});
  background-repeat: no-repeat;
  background-size: 13%;
  background-position: 15% center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 10px;
`;

const SigninInput = styled.input`
  margin: 19px 11px 0px;
  width: 90%;
  outline: solid 0.3px #9dc7ee;
  border: none;
  background-color: white;
  color: black;
  height: 39px;
  padding: 0px 9px;
  border-radius: 3px;
`;

const StyledForm = styled.form`
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 0.0625rem solid #cacad9;
  padding: 0 0 3.125rem;
  margin: 0 0 3.125rem;
`;

const DivContainer = styled.div`
  margin: 10px 15px;
  background-color: #f4f2f2;
`;

export default Signin;
