import { useRouter } from "next/router";
import requests from "utils/requests";

function Navbar() {
  const router = useRouter();
  const currentGenre = router.query.genre;
  const listOfCategory = Object.entries(requests)?.map(([key, { title }]) => {
    const isCurrent = currentGenre === key;
    return (
      <div
        key={key}
        onClick={() => {
          router.push(`/?genre=${key}`);
        }}
        className={`last:pr-16 sm:last:pr-32 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-gray-500 ${
          isCurrent && "text-bold text-white tracking-wider scale-125"
        }`}
      >
        {title}
      </div>
    );
  });
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-lg whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {listOfCategory}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"></div>
    </nav>
  );
}

export default Navbar;
