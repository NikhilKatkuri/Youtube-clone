import Image from "next/image";
import { FC } from "react";

interface Props {
  loader?: boolean;
}
const FeedTypeVid: FC<Props> = ({ loader }) => {
  return (
    <>
      {loader ? (
        <div className="w-full flex flex-col gap-3 animate-pulse">
          {/* Thumbnail */}
          <div className="w-full aspect-video bg-gray-300 rounded-lg"></div>

          {/* Video Info */}
          <div className="flex gap-3">
            {/* Text Info */}
            <div className="flex flex-col gap-2 w-[90%]">
              <div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>
              <div className="w-1/2 h-3 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-3 cursor-pointer group *:transition-all *:duration-200 *:ease-in-out">
          {/* Thumbnail */}
          <div className="w-full aspect-video bg-gray-300 rounded-lg overflow-hidden ">
            <Image
              src="/<add image here>"
              alt="hq720"
              height={90 * 2}
              width={160 * 2}
              className="h-full w-full scale-100 group-hover:scale-105"
            />
          </div>

          {/* Video Info */}
          <div className="flex gap-3">
            {/* Text Info */}
            <div className="flex flex-col gap-2 w-[90%]">
              <div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>
              <div className="w-1/2 h-3 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedTypeVid;
