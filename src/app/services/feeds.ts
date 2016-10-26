export interface IBookFeedMeta {
      url : string;
      length: number;
      type : string;
}

export interface IBookFeed {
      title : string;
      description : string;
      link : string;
      url : string;
      created : number;
      enclosures : IBookFeedMeta[];
}

