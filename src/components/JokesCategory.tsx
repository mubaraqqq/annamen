import { useGetJokesQuery } from "../api/api";

const JokesCategory = () => {
  const { data, isLoading } = useGetJokesQuery();

  console.log(data);

  //   if (isLoading) return <div>Loading...</div>;

  return <div>JokesCategory</div>;
};

export default JokesCategory;