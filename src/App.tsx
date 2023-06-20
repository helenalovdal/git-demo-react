import { useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          This is an alert!
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
