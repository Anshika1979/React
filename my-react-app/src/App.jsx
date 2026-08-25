import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#031d45';
      showAlert("Dark mode has been enabled", "success");
    }
    else
      {
        setMode('light');
        document.body.style.backgroundColor = '#ebeff3';
        showAlert("Light mode has been enabled", "success");
      }
    }

    const setThemeColor = (cls) => {
      removeBodyClasses();
      document.body.classList.add('bg-' + cls);
    }
    return (
      <>
     <Router>
  <Navbar
    title="My Navbar"
    mode={mode}
    toggleMode={toggleMode}
    setThemeColor={setThemeColor}
  />

  <Alert alert={alert} />

  <div className="container my-3">
    <Routes>
      <Route
        path="/"
        element={
          <TextForm
            showAlert={showAlert}
            heading="Enter your text here"
            mode={mode}
          />
        }
      />

      <Route path="/about" element={<About />} />
    </Routes>
  </div>
</Router>
</>    
);
}
export default App;
