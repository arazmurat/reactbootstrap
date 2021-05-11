import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert, Form } from "react-bootstrap";
import Forminput from "./Forminput"


function App() {
  return (
    <div className="App">
   <header className="App-header">

  
        <Forminput/>
       <hr/>
       <h1>Login Page</h1> 
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
      <Alert variant="primary">Primary</Alert>
      <Alert variant="secondary">Secondary</Alert>
      <Alert variant="success">Success</Alert>
      <Alert variant="danger">Danger</Alert>
      <Alert variant="warning">Warning</Alert>
      <Alert variant="info">Info</Alert>
      <Alert variant="light"> Light</Alert>
      <Alert variant="dark"> Dark</Alert>
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
