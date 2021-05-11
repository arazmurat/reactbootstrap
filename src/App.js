import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert, Form } from "react-bootstrap";
import Forminput from "./Forminput"

function App() {
  return (
    <div className="App">
   <header className="App-header">
        <Forminput/>
        
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
      <Alert variant="primary">Alert Primary</Alert>
      <Alert variant="secondary"> Alert Secondary</Alert>
      <Alert variant="success">Alert Success</Alert>
      <Alert variant="danger">Alert Danger</Alert>
      <Alert variant="warning"> Alert Warning</Alert>
      <Alert variant="info">Alert Info</Alert>
      <Alert variant="light"> Alert Light</Alert>
      <Alert variant="dark">Alert Dark</Alert>

      <Button variant="primary"> Button Primary </Button>
      <br />
      <br />
      <Button variant="secondary"> Button Secondary</Button>
      <br />
      <br />
      <Button variant="success"> Button Success</Button>
      <br />
      <br />
      <Button variant="danger"> Button Danger</Button>
      <br />
      <br />
      <Button variant="warning"> Button Warning</Button>
      <br />
      <br />
      <Button varinat="info"> Button Info </Button>
      <br />
      <br />
      <Button variant="light"> Button Light</Button>
      <br />
      <br />
      <Button variant="dark"> Button Dark</Button>
      <br />
    </div>
  );
}

export default App;
