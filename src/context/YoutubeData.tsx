"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import youtubeApi from "../../YoutubeConfig";
import Feed from "@/types/feed";
type YoutTubeContextType = {
  value: string;
  setvalue: (value: string) => void;
  data: null | Feed[];
  fetchVideosByChannelId: (channelId: string) => Promise<unknown>;
  fetchVideoById: (videoId: string) => Promise<unknown>;
  fetchVideosBySearchQuery: (query: string) => Promise<unknown>;
  fetchPopularVideos: (query: string) => Promise<unknown>;
};

const YoutTubeContext = createContext<YoutTubeContextType | undefined>(
  undefined
);

export const YoutTubeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setvalue] = useState<string>("defaultValue");
  const [data, setData] = useState(null);
  // Fetch all videos from a channel using the "search" endpoint
  const fetchVideosByChannelId = async (channelId: string) => {
    try {
      const data = await youtubeApi.fetchFromYoutube(
        youtubeApi.endpoints.search,
        {
          part: "snippet",
          channelId,
          maxResults: 50,
          type: "video",
          order: "date", // newest first
        }
      );
      console.log("Videos by channel:", data.items);
      return data.items;
    } catch (error) {
      console.error("Error fetching videos by channel:", error);
    }
  };

  // Fetch a specific video by ID
  const fetchVideoById = async (videoId: string) => {
    try {
      const data = await youtubeApi.fetchFromYoutube(
        youtubeApi.endpoints.videos,
        {
          part: "snippet,statistics",
          id: videoId,
        }
      );
      console.log("Video by ID:", data.items);
      return data.items[0];
    } catch (error) {
      console.error("Error fetching video by ID:", error);
    }
  };

  // Search for videos using a query
  const fetchVideosBySearchQuery = async (query: string) => {
    try {
      const data = await youtubeApi.fetchFromYoutube(
        youtubeApi.endpoints.search,
        {
          part: "snippet",
          q: query,
          type: "video",
          maxResults: 25,
        }
      );
      console.log("Search videos:", data.items);
      return data.items;
    } catch (error) {
      console.error("Error searching videos:", error);
    }
  };
  const fetchPopularVideos = async () => {
    try {
      const data = await youtubeApi.fetchFromYoutube(
        youtubeApi.endpoints.videos,
        {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          type: "video",
          videoCategoryId: 10,
          maxResults: 100,
        }
      );
      console.log("Search videos:", data.items);
      setData(data.items);
      return data.items;
    } catch (error) {
      console.error("Error searching videos:", error);
    }
  };
  useEffect(() => {
    // Example usage
    fetchPopularVideos();
    // Google Developers
  }, []);

  return (
    <YoutTubeContext.Provider
      value={{
        value,
        setvalue,
        fetchVideosByChannelId,
        fetchVideoById,
        fetchVideosBySearchQuery,
        fetchPopularVideos,
        data,
      }}
    >
      {children}
    </YoutTubeContext.Provider>
  );
};

export const useYoutTubeContext = () => {
  const context = useContext(YoutTubeContext);
  if (!context)
    throw new Error(
      "useYoutTubeContext must be used within a YoutTubeContextProvider"
    );
  return context;
};
