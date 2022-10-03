
import './App.css';
import Profil from './profil/profil';
function App() {
const HandleName = nom => alert(nom);
  return (
    <div className="App">
    <Profil nm="Amal REKIK MELLEF" bio="une ingénieure en électromécanique" pf="ingénieur Electromécanique" al={HandleName}/>
    </div>
  );
}

export default App;
