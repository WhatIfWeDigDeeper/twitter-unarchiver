import { writeFileSync } from 'fs';
import { getTweets } from './tweet';
import { Tweet } from './types';
import * as process from "process";

if (process.argv.length < 2 || !process.argv[2]) {
  console.error('Please pass your username');
  process.exit(1);
}

const userHandle = process.argv[2].replace('@', '');
const userUrl = `https://twitter.com/${userHandle}/status/`

const extractContent = (tweet: Tweet): string =>
`${new Date(tweet!.tweet!.created_at as string).toISOString()}
${userUrl}${tweet.tweet.id_str}
${tweet.tweet.full_text}
`;

const fullTextTweets = getTweets()
  .map(extractContent)
  .join(`\n\n`);

writeFileSync('full_text_tweets.txt', fullTextTweets);
