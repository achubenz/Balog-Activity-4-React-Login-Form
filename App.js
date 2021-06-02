
import './App.css';

import {Button, Form, FormGroup, Label, Input}
  from 'reactstrap';

import {FacebookLoginButton } from 'react-social-login-buttons';

import {GithubLoginButton } from 'react-social-login-buttons';
  
function App() {
  return (
    <Form className="Login-Form">
  <h1>
    <span className="font-weight-bold">MyWebsite</span>.com
    </h1>
    <h2><center>Welcome</center></h2>
    <FormGroup>
      <Label>Email</Label>
      <Input type="email" placeholder="Email"></Input>
    </FormGroup>
    <FormGroup>
      <Label>Password</Label>
      <Input type="password" placeholder="Password"></Input>
    </FormGroup>
    <Button className="btn-LG btn-dark btn-block">
      Log in
    </Button>
      <div className="text-center pt-3">
        Or continue with your social account
      </div>
      <div>
      <center>
      <FacebookLoginButton className="mt-3 mb-3"/>
      </center>
      </div>
      <div className="text-center">
        <a href="/sign-up">Sign up</a>
        <span className="p-2">|</span>
        <a href="/forgot password">Forgot Password</a>
        <GithubLoginButton className="mt-3 mb-3"/>
    
      </div>

    </Form>
  );
}

export default App;
