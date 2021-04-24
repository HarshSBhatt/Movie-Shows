import { useRouter } from "next/router";
import Link from "next/link";
import isEmpty from "lodash/isEmpty";
import { API_KEY } from "utils/constant";
import FlipMove from "react-flip-move";
import Movie from "components/Show/Movie";
import TV from "components/Show/TV";

function Show({ result }) {
  // console.log(result);
  const router = useRouter();
  const mediaType = router.query.mediaType;
  const renderView =
    mediaType === "movie" ? <Movie result={result} /> : <TV result={result} />;
  return (
    <div>
      {!isEmpty(result) ? (
        <FlipMove className="my-2 sm:grid">{renderView}</FlipMove>
      ) : (
        <div className="h-auto text-center p-8">
          <p className="uppercase text-lg font-bold tracking-wider">
            No detail found
          </p>
          <Link href="/">
            <p className="text-base uppercase mt-4 cursor-pointer hover:underline">
              Go to home
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Show;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const mediaType = context.query.mediaType;
  const isValidMediaType = mediaType === "movie" || mediaType === "tv";

  const request = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());

  const res = request.success === false ? {} : request;

  return {
    props: {
      result: isValidMediaType ? res : {},
    },
  };
}
