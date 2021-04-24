import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import { useRouter } from "next/router";

function Results({ results }) {
  const router = useRouter();
  const handleClick = (id, mediaType) => {
    router.push(`/show/${id}?mediaType=${mediaType}`);
  };
  return (
    <FlipMove className="px-1 sm:px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results?.map((result) => {
        const mediaType = result.media_type ? result.media_type : "movie";
        return (
          <Thumbnail
            key={result.id}
            result={result}
            onClick={() => handleClick(result.id, mediaType)}
          />
        );
      })}
    </FlipMove>
  );
}

export default Results;
