const API_KEY: string = "AIzaSyDxja4HbPG0mqj9scaVDoZ-uT9imlf7ags"; // You can load this from environment in a real setup
const BASE_URL: string = "https://www.googleapis.com/youtube/v3";

type Params = {
  [key: string]: string | number | boolean;
};

const youtubeApi = {
  baseUrl: BASE_URL,
  apiKey: API_KEY,

  endpoints: {
    playlists: `${BASE_URL}/playlists`,
    playlistItems: `${BASE_URL}/playlistItems`,
    videos: `${BASE_URL}/videos`,
    search: `${BASE_URL}/search`,
    channels: `${BASE_URL}/channels`,
  },

  // Example fetch helper
  fetchFromYoutube: async (endpoint: string, params: Params = {}) => {
    const url = new URL(endpoint);
    url.searchParams.set("key", API_KEY);

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error("YouTube API error");
    return res.json();
  },
};

export default youtubeApi;
