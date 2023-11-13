import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import MovieCard from "../components/MovieCard";
// import { useFetchMovies } from "../src/hooks";
import { IMovie } from "../src/types";

const Home: NextPage = () => {
  const { data } = useQuery({
    queryKey: ["datas"],
    queryFn: () => fetch("/api/movies").then((res) => res.json()),
  });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex flex-wrap justify-center">
      {data?.results?.map((movieData: IMovie) => (
        <MovieCard {...movieData} />
      ))}
    </div>
  );
};

export default Home;
