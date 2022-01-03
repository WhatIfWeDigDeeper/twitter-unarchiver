import { Tweet } from './types';

const extractContent = (userHandle: string) => (tweet: Tweet): string =>
`${new Date(tweet!.tweet!.created_at as string).toISOString()}
https://twitter.com/${userHandle}/status/${tweet.tweet.id_str}
${tweet.tweet.full_text}
`;

export function getFullTextTweets(userHandle: string, tweets: Tweet[]): string {
  const getUserContent = extractContent(userHandle);
  return tweets
    .map(getUserContent)
    .join('\n\n');
}
