export default interface Feed {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: string;
        height: string;
      };
      medium: {
        url: string;
        width: string;
        height: string;
      };
      high: {
        url: string;
        width: string;
        height: string;
      };
      standard: {
        url: string;
        width: string;
        height: string;
      };
      maxres: {
        url: string;
        width: string;
        height: string;
      };
    };
    channelTitle: string;
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
  };
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: string;
    contentRating: string[];
    projection: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}
