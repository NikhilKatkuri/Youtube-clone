import Image from "next/image";
import { FC } from "react";
import Feed from "@/types/feed";
import { formatCount } from "@/utils/formatter";
import moment from "moment";
interface Props {
  loader?: boolean;
  feedData?: Feed;
}

const FeedTypeVid: FC<Props> = ({ loader, feedData }) => {
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
              src={feedData?.snippet.thumbnails.high.url ?? "/hq720.avif"}
              alt="Video Thumbnail"
              height={Number(feedData?.snippet.thumbnails.high.height) ?? 180}
              width={Number(feedData?.snippet.thumbnails.high.width) ?? 320}
              priority
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
                priority
                className="rounded-full object-cover h-full w-full"
              />
            </div>

            {/* Text Info */}
            <div className="flex flex-col gap-1 w-[90%]">
              <div className="text-sm font-medium text-gray-900 line-clamp-2">
                {feedData?.snippet.title ??
                  " Example Video Title - This is where your dynamic title will go"}
              </div>
              <div className="text-sm text-gray-900 my-1">
                <h1 className="">{`${
                  feedData?.snippet.channelTitle ?? "Channel Name"
                }`}</h1>
                <p className="text-gray-500">
                  {`${formatCount(
                    feedData?.statistics.viewCount ?? 12222
                  )} views • ${moment(
                    feedData?.snippet.publishedAt ?? "2025-04-16T13:29:20Z"
                  ).fromNow()}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedTypeVid;
