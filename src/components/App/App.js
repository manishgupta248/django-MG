import React, {useState} from "react";
// import Navbar from "../Navbar";
import Textform from "../Textform";


const App = (props) => {
  const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark')
      setmystle({color:'white', backgroundColor:'#0D2842FF'})
      document.body.style.backgroundColor = '#0D2842FF';
    }
    else{
      setmode('light')
      setmystle({color:'black', backgroundColor:'white'})
      document.body.style.backgroundColor = 'white';
    }
  }

  const [mode, setmode] = useState('light')
  const [mystle, setmystle] = useState({color:'black', backgroundColor:'white'})


  return (
    <div>
      {/* <Navbar title='TextUtils' about='About Us' mode={mode} toggleMode={toggleMode} style={mystle}/> */}

    <div>
      <Textform style={mystle} toggleMode={toggleMode} />
    </div>

    <div>
      <h1>Django React Setup Works- Jai Shri Ram</h1>
    </div>
      
    </div>
  );
};

export default App;