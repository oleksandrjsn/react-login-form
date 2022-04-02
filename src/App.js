import { AuthProvider } from "./context/auth/context";
import RoutesList from "./router/RoutesList";


function App() {
  return (
    <AuthProvider>
      <RoutesList />
    </AuthProvider>
  );
}

export default App;
