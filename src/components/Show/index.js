import { forwardRef } from "react";
import Image from "next/image";
import { IMAGE_BASE_URL } from "utils/constant";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const SelectedShow = forwardRef(({ result, reviews }, ref) => {
  const src =
    `${IMAGE_BASE_URL}${result.backdrop_path || result.poster_path}` ||
    `${IMAGE_BASE_URL}${result.poster_path}`;
  return (
    <div ref={ref} className="group transition duration-200 ease-in transform">
      <Image layout="responsive" src={src} height={1080} width={1920} />
      <div className="p-2">
        <h2 className="my-1 text-xl text-white tracking-wider font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="text-sm text-justify py-3 pr-4">{result.overview}</p>
        <p className="flex items-center uppercase text-sm">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
      <div className="px-2 flex items-center">
        <StarIcon className="h-5" />
        <span className="ml-1 text-sm font-semibold tracking-wider">
          {result.vote_average}/10
        </span>
      </div>
      {result.genres?.length && (
        <div className="p-2 flex flex-col sm:flex-row justify-center sm:items-center sm:justify-start">
          <h3 className="font-bold tracking-widest">Genre</h3>
          <div className="mt-2 sm:mt-0 sm:ml-2 text-white text-sm whitespace-nowrap space-x-2 sm:space-x-4">
            {result.genres.map((genre) => (
              <span
                key={genre.id}
                className="text-xs font-semibold tracking-wider transition ease-out rounded border-2 border-solid border-gray-400 text-gray-400 hover:text-black hover:bg-white hover:border-white px-1 py-0.5"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default SelectedShow;
