import React, { useState } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import Onboard from './components/Onboard';
import Home from './components/Home'
const App = () => {
  const [showOnboard, setShowOnboard] = useState(true)
  const handleOnboardFinish = () => {
    setShowOnboard(false);
  }
  return( 
  <>
  {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
  {!showOnboard && <Home />}
  </>
  );
};



export default App;