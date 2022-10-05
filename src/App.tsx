import { Route, Routes } from "react-router-dom";
import { useGetJokesQuery } from "./api/api";
import "./App.css";
import JokesCategory from "./components/JokesCategory";
import Layout from "./components/Layout";
import { useAppDispatch } from "./hooks/hooks";
import { updateJokesInStore, updateLoading } from "./store/jokesSlice";

function App() {
  // const { data, isLoading } = useGetJokesQuery();
  // const dispatch = useAppDispatch();

  // if (data) {
  //   // console.log(data);
  //   dispatch(updateJokesInStore(data));
  // }
  // if (isLoading) dispatch(updateLoading(isLoading));
  // if (!isLoading) dispatch(updateLoading(isLoading));

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
