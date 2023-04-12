// Import React library and necessary components/module
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from "./components/Welcome";
import Market from "./components/Market";
import Login from "./components/login";

// Define the main App functional component
const App = () => (
  // Wrap the component with the Router component to enable routing in the app
  <Router>
    {/* Use the Routes component to define the available routes in the app */}
    <Routes>
      {/* Define the root route with a Login component as the initial page */}
      <Route path="/" element={[<Login />]} />
      {/* Define the welcome route with a Welcome component as the corresponding page */}
      <Route path="/welcome" element={<Welcome />} />
      {/* Define the market route with a Market component as the corresponding page */}
      <Route path="/market" element={<Market />} />
    </Routes>
  </Router>
);

// Export the App component for use in other parts of the application
export default App;
