import { Route, Routes } from "react-router-dom";
// import { useGetJokesQuery } from "./api/api";
import "./App.css";
import JokesCategory from "./components/JokesCategory";
import Layout from "./components/Layout";

function App() {
  // const { data, isLoading } = useGetJokesQuery();

  // console.log(data);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="jokes/:category" element={<JokesCategory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
