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
            {/* Channel Icon */}
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

            {/* Text Info */}
            <div className="flex flex-col gap-2 w-full">
              <div className="w-4/5 h-4 bg-gray-300 rounded-md"></div>
              <div className="w-1/3 h-3 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-3 cursor-pointer group">
          {/* Thumbnail */}
          <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/hq720.avif"
              alt="Video Thumbnail"
              height={180}
              width={320}
              className="h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          {/* Video Info */}
          <div className="flex gap-3">
            {/* Channel Icon */}
            <div className="w-10 h-10 bg-gray-300 rounded-full relative">
              <Image
                src="https://yt3.ggpht.com/ytc/AIdro_kXrVzf2kng6Bt3fDoTQur3nO0uITlQpQYpnFjviaOOtG-Tqfo3rW8xJWXn5hrlnURcGA=s88-c-k-c0x00ffffff-no-rj"
                alt="https://yt3.ggpht.com/ytc/AIdro_kXrVzf2kng6Bt3fDoTQur3nO0uITlQpQYpnFjviaOOtG-Tqfo3rW8xJWXn5hrlnURcGA=s88-c-k-c0x00ffffff-no-rj"
                width={32}
                height={32}
                className="rounded-full object-cover h-full w-full"
              />
            </div>

            {/* Text Info */}
            <div className="flex flex-col gap-1 w-[90%]">
              <div className="text-sm font-medium text-gray-900 line-clamp-2">
                Example Video Title - This is where your dynamic title will go
              </div>
              <div className="text-xs text-gray-500 ">
                Nikhil katkuri • 1.2M views • 2 days ago
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedTypeVid;
