import './App.css';
import ShareBB from "./ShareBB";
import Navbar from "./routes-nav/Navbar";
import Routes from "./routes-nav/Routes";


function App() {
  return (
    <div>
      <Navbar />
      <Routes />
      <ShareBB />
    </div>
  );
}

export default App;