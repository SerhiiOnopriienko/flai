import "./sass/main.scss";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Message from "./Components/Messages";
import OfficialArtist from "./Components/OfficialArtist";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Message />
      <OfficialArtist />
    </>
  );
}

export default App;
