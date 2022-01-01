import { getTweets } from './tweet';
import { Tweet } from './types';

const extractContent = (userHandle: string) => (tweet: Tweet): string =>
`${new Date(tweet!.tweet!.created_at as string).toISOString()}
https://twitter.com/${userHandle}/status/${tweet.tweet.id_str}
${tweet.tweet.full_text}
`;

export function getFullTextTweets(userHandle: string): string {
  const getUserContent = extractContent(userHandle);
  return getTweets()
    .map(getUserContent)
    .join('\n\n');
}
