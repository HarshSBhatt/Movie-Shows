import { useRouter } from "next/router";
import Link from "next/link";
import isEmpty from "lodash/isEmpty";
import { API_KEY } from "utils/constant";
import FlipMove from "react-flip-move";
import SelectedShow from "components/Show";

function Show({ result, reviews }) {
  // console.log(result);
  // console.log(reviews);
  const router = useRouter();
  return (
    <div>
      {!isEmpty(result) ? (
        <FlipMove className="my-2 sm:grid">
          <SelectedShow result={result} reviews={reviews} />
        </FlipMove>
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

  const request = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());

  const reviews = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}/reviews?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());

  const showRes = request.success === false ? {} : request;
  const reviewsRes = reviews.success === false ? {} : reviews;
  return {
    props: {
      result: showRes,
      reviews: reviewsRes,
    },
  };
}
