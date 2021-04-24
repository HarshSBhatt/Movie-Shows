import { forwardRef } from "react";
import Image from "next/image";
import { IMAGE_BASE_URL } from "utils/constant";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Movie = forwardRef(({ result }, ref) => {
  const src =
    `${IMAGE_BASE_URL}${result.backdrop_path || result.poster_path}` ||
    `${IMAGE_BASE_URL}${result.poster_path}`;
  return (
    <div
      ref={ref}
      className="group cursor-pointer transition duration-200 ease-in transform"
    >
      <Image layout="responsive" src={src} height={1080} width={1920} />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="my-1 text-xl text-white tracking-wider font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center uppercase text-sm">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Movie;
