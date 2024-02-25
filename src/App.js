import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// function App() {
//   return (
//     <div className="container">
//       <NavBar />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
      </div>
    );
  }
}

export default App;
