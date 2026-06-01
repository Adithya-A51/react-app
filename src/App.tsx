import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
const [alert, setalert] = useState(false);
  
  return (
    <div>
      {alert && <Alert onClose={()=>setalert(false)}> This is an alert for stupid people.</Alert>}
      <Button onClick={() =>{setalert(true);}} > 
        Button
      </Button>
    </div>
  );
}

export default App;
