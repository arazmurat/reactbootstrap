import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Form } from "react-bootstrap";
import Forminput from "./Forminput"


function App() {
  return (
    <div className="App">
   <header className="App-header">

       <h2>Sign up </h2>
        <Forminput/>
       <hr/>
       <h2>Sign in</h2> 
       <hr/>
        <Form >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="example@email.com" />
            <Form.Text className="text-muted">
              Please enter your email address.
            </Form.Text>
          </Form.Group>
         
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
         
          
        </Form>
      </header>
      <hr/>
      <h1>Colors</h1>
      <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
<div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
<div class="p-3 mb-2 bg-success text-white">.bg-success</div>
<div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
<div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
<div class="p-3 mb-2 bg-info text-white">.bg-info</div>
<div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
<div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
<hr/>
<h2>Button Colors</h2>
      <Button variant="primary">Primary </Button>
      <br />
      <br />
      <Button variant="secondary">Secondary</Button>
      <br />
      <br />
      <Button variant="success">Success</Button>
      <br />
      <br />
      <Button variant="danger"> Danger</Button>
      <br />
      <br />
      <Button variant="warning">  Warning</Button>
      <br />
      <br />
      <Button varinat="info">  Info </Button>
      <br />
      <br />
      <Button variant="light">  Light</Button>
      <br />
      <br />
      <Button variant="dark"> Dark</Button>
      <br />
      
    </div>
  );
}

export default App;
