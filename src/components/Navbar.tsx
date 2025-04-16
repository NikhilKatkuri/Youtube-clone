"use client";
import { FC, useEffect, useState } from "react";
import YouTubeLogo from "./logo/YouTubeLogo-nik";
import RoundedBtn from "./ui/rounded-btn";
import RoundedBadge from "./ui/rounded-bandage";
import Image from "next/image";
import { useScreenContext } from "@/context/ScreenContext";

const Navbar: FC = () => {
  const { Dimention ,isSidebar, setisSidebar} = useScreenContext();
  const [isSearchBar, setisSearchBar] = useState<boolean>(false);
  useEffect(() => {
    if (Dimention.width > 700) {
      setisSearchBar(false);
    }
  }, [Dimention]);
  return (
    <div
      className={`h-full w-full flex flex-1 items-center ${
        isSearchBar ? "justify-center" : "justify-between"
      }  max-w-screen overflow-hidden `}
    >
      {(!isSearchBar || Dimention.width >= 700) && (
        <div className="flex items-center gap-4">
          <RoundedBtn onClick={()=>{setisSidebar(!isSidebar)}}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                aria-hidden="true"
              >
                <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
              </svg>
            </span>
          </RoundedBtn>
          <YouTubeLogo brand={true} link="/" />
        </div>
      )}
      <div
        className={`${
          isSearchBar
            ? "grid grid-cols-[40px_1fr_40px] min-[500]:gap-4 gap-1 px-2 w-full"
            : "hidden gap-4 items-center"
        }    min-[700]:flex  `}
      >
        {isSearchBar && (
          <RoundedBtn
            onClick={() => {
              setisSearchBar(!isSearchBar);
            }}
            className="hover:bg-black/10 min-[700]:hidden"
          >
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
          </RoundedBtn>
        )}
        <div className="flex items-center justify-center shadow-xs   rounded-full overflow-hidden h-10 px-0 py-0 ">
          <div
            className={`${
              isSearchBar
                ? "px-3 rounded-full"
                : "px-4 pl-6  border-r-[1px] rounded-l-full"
            }  flex flex-1 border-2  border-black/10 h-full `}
          >
            <input
              type="text"
              placeholder="Search"
              className="outline-0 text-base w-full lg:w-[28rem]"
            />
          </div>
          <button
            className={`${
              isSearchBar ? "w-10 hidden" : "w-16"
            } justify-center bg-black/3 hover:bg-black/5 border-2 border-black/10 border-l-[1px] rounded-r-full h-full flex items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <RoundedBtn className="bg-black/5 hover:bg-black/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
          </svg>
        </RoundedBtn>
      </div>
      {(!isSearchBar || Dimention.width >= 700) && (
        <>
          <div className="flex items-center gap-1  lg:gap-4">
            {/* mobile type navs --search --microphone */}
            <div className="flex items-center min-[700]:hidden">
              {/* search */}
              <RoundedBtn
                onClick={() => {
                  setisSearchBar(!isSearchBar);
                }}
                className="hover:bg-black/5 p-2 rounded-full button-transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </RoundedBtn>
              {/* !search */}
              {/* microphone */}
              <RoundedBtn className="hover:bg-black/5 p-2 rounded-full button-transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
                </svg>
              </RoundedBtn>
              {/* !microphone */}
            </div>

            {/* !mobile type navs --search --microphone */}
            {/* create icon */}

            <button className="hidden px-3 py-2 rounded-full bg-black/4 hover:bg-black/10 md:flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                aria-hidden="true"
                className="size-5"
              >
                <path d="M20 12h-8v8h-1v-8H3v-1h8V3h1v8h8v1z"></path>
              </svg>
              <span className="font-medium text-[14px] leading-1">Create</span>
            </button>
            {/* !create icon */}
            {/* bell icon */}
            <RoundedBtn className="custom hover:bg-black/5 p-2 rounded-full button-transition relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  d="m13.497 4.898.053.8.694.4C15.596 6.878 16.5 8.334 16.5 10v2.892c0 .997.27 1.975.784 2.83L18.35 17.5H5.649l1.067-1.778c.513-.855.784-1.833.784-2.83V10c0-1.666.904-3.122 2.256-3.902l.694-.4.053-.8c.052-.78.703-1.398 1.497-1.398.794 0 1.445.618 1.497 1.398ZM6 10c0-2.224 1.21-4.165 3.007-5.201C9.11 3.236 10.41 2 12 2c1.59 0 2.89 1.236 2.993 2.799C16.79 5.835 18 7.776 18 10v2.892c0 .725.197 1.436.57 2.058l1.521 2.535c.4.667-.08 1.515-.857 1.515H15c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879s-1.559-.316-2.121-.879C9.316 20.56 9 19.796 9 19H4.766c-.777 0-1.257-.848-.857-1.515L5.43 14.95c.373-.622.57-1.333.57-2.058V10Zm4.5 9c0 .398.158.78.44 1.06.28.282.662.44 1.06.44s.78-.158 1.06-.44c.282-.28.44-.662.44-1.06h-3Z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <RoundedBadge className="top-1 right-1">1</RoundedBadge>
            </RoundedBtn>
            {/* bell icon */}
            {/* user image */}
            <button className="hover:bg-black/5 p-1 hover:scale-[1.05] rounded-full button-transition">
              <Image
                src="https://yt3.ggpht.com/ytc/AIdro_kXrVzf2kng6Bt3fDoTQur3nO0uITlQpQYpnFjviaOOtG-Tqfo3rW8xJWXn5hrlnURcGA=s88-c-k-c0x00ffffff-no-rj"
                alt="https://yt3.ggpht.com/ytc/AIdro_kXrVzf2kng6Bt3fDoTQur3nO0uITlQpQYpnFjviaOOtG-Tqfo3rW8xJWXn5hrlnURcGA=s88-c-k-c0x00ffffff-no-rj"
                width={32}
                height={32}
                className="rounded-full"
              />
            </button>
            {/* user image */}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
