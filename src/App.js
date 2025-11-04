
import CompteList from "./components/CompteList";
import CompteForm from "./components/CompteForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Gestion des Comptes</h1>
      <CompteForm />
      <CompteList />
    </div>
  );
}

export default App;
