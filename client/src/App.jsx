// Import React library and necessary components/module
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/login";
import Exchange from "./components/Exchange";

// Define the main App functional component
const App = () => (
  // Wrap the component with the Router component to enable routing in the app
  <Router>
    {/* Use the Routes component to define the available routes in the app */}
    <Routes>
      {/* Define the root route with a Login component as the initial page */}
      <Route path="/" element={[<Login />]} />
      {/* Define the welcome route with a Welcome component as the corresponding page */}
      <Route path="/home" element={<Home />} />
      {/* Define the exchange route with a Exchange component as the corresponding page */}
      <Route path="/exchange" element={<Exchange />} />
    </Routes>
  </Router>
);

// Export the App component for use in other parts of the application
export default App;
