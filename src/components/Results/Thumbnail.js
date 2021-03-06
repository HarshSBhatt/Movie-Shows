import { forwardRef } from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { IMAGE_BASE_URL } from "utils/constant";

const Thumbnail = forwardRef(({ result, onClick }, ref) => {
  const src =
    `${IMAGE_BASE_URL}${result.backdrop_path || result.poster_path}` ||
    `${IMAGE_BASE_URL}${result.poster_path}`;

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      onClick={onClick}
    >
      <Image layout="responsive" src={src} height={1080} width={1920} />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-xl text-white tracking-wider transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 transition-all duration-200 ease-in group-hover:opacity-100 uppercase text-sm">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
