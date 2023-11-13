import ky from "ky-universal";
import { useQuery } from "@tanstack/react-query";
import { TMDB_MOVIES_BASE_URL } from "../../constants/movies_constants";

const fetchMovies = async ({
  currentPage = "",
  listingType = "",
}: {
  currentPage: string;
  listingType: string;
}) => {
  const result = await ky(`${TMDB_MOVIES_BASE_URL}/${listingType}`, {
    searchParams: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY || "",
      page: currentPage,
      language: "en-US",
    },
  }).json();
  return result;
};

const useFetchMovies = ({
  currentPage = "",
  listingType = "",
}: {
  currentPage: string;
  listingType: string;
}) => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      fetchMovies({
        currentPage,
        listingType,
      }),
  });
};

export { fetchMovies, useFetchMovies };
