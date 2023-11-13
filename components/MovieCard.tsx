import Image from "next/image";
import { TMDB_MOVIE_PREFIX } from "../src/constants/movies_constants";
import { IMovie } from "../src/types";

const MovieCard = (props: IMovie) => {
  const { original_title: title = "", poster_path: poster = "" } = props;
  return (
    <div className="mx-2 my-3 w-[150px] rounded-lg pb-1 transition ease-in hover:scale-110 hover:bg-slate-600 hover:text-slate-200">
      <Image
        src={`${TMDB_MOVIE_PREFIX}${poster}`}
        width="150px"
        height="225px"
        className="rounded-lg"
      />
      <h3 className="text-md overflow-ellipsis font-semibold">{title}</h3>
    </div>
  );
};

export default MovieCard;

/**
 
 {
    "adult": false,
    "backdrop_path": "/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
    "genre_ids": [
        27,
        53
    ],
    "id": 951491,
    "original_language": "en",
    "original_title": "Saw X",
    "overview": "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
    "popularity": 1072.723,
    "poster_path": "/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
    "release_date": "2023-09-26",
    "title": "Saw X",
    "video": false,
    "vote_average": 7.393,
    "vote_count": 1010
}
 */
