import { useGetJokesQuery } from "./api/api";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const { data, isLoading } = useGetJokesQuery();

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
