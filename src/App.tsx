import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
        >
          Let's see
        </Alert>
      )}
      <Button onClick={() => setShowAlert(true)}>Show Alert</Button>
    </div>
  );
};
export default App;
