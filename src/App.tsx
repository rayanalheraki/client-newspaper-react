import "./App.css";
import Layout from "./components/Layout";
import HomePage from "@/components/HomePage";

function App() {
  return (
    <Layout>
      {/* Home Page , path: "/" */}
      <HomePage />
    </Layout>
  );
}

export default App;
