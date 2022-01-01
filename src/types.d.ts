// type ObjectAny = { [key in string]?: any };
type Variant = {
  bitrate?: string;
  content_type?: string;
  url?: string;
};

type VideoInfo = {
  aspect_ratio?: string[];
  variants?: Variant[];
  duration_millis?: string;
};

type Dimensions = {
  w: string;
  h: string;
  resize: string;
};

type Media = {
  expanded_url?: string;
  indices?: string[];
  url?: string;
  media_url?: string;
  id_str?: string;
  id?: string;
  media_url_https?: string;
  sizes?: {
    thumb?: Dimensions;
    medium?: Dimensions;
    large?: Dimensions;
    small?: Dimensions;
  };
  type?: string;
  display_url?: string;
  source_status_id?: string;
  source_user_id?: string;
  source_user_id_str?: string;
  source_status_id_str?: string;
  video_info?: VideoInfo;
  additional_media_info?: {
    embeddable?: boolean;
    monetizable?: boolean;
    title?: string;
    description?: string;
  };
};

type Symbolic = {
  text?: string;
  indices?: string[];
};

type UserMention = {
  name?: string;
  screen_name?: string;
  indices?: string[];
  id_str?: string;
  id?: string;
};

type Hashtag = {
  text: string;
  indices: string[];
};
type Url = {
  url?: string;
  expanded_url?: string;
  display_url?: string;
  indices?: string[];
};

type Entities = {
  hashtags?: Hashtag[];
  symbols?: Symbolic[];
  user_mentions?: UserMention[];
  urls?: Url[];
  media?: Media[];
};

export type Tweet = {
  tweet: {
    retweeted?: boolean;
    source?: string;
    entities?: Entities;
    display_text_range?: string[];
    favorite_count?: string;
    id_str?: string;
    truncated?: boolean;
    retweet_count?: string;
    id?: string;
    created_at?: string;
    media?: Media[];
    favorited?: boolean;
    full_text?: string;
    possibly_sensitive?: boolean;
    in_reply_to_user_id?: string;
    in_reply_to_user_id_str?: string;
    in_reply_to_status_id?: string;
    in_reply_to_status_id_str?: string;
    in_reply_to_screen_name?: string;
    lang?: string;
    extended_entities?: { media?: Media[] };
  };
};
