import { writeFileSync } from 'fs';
import * as process from "process";

import { getTweets } from './fileUtil';
import { getFullTextTweets } from './twitterParser';
import { Tweet } from './types';

if (process.argv.length < 2 || !process.argv[2]) {
  console.error('Please pass your username');
  process.exit(1);
}
const userHandle = process.argv[2].replace('@', '');

try {
  const rootDir = __dirname.substring(0, __dirname.lastIndexOf('/'))
  const tweets: Tweet[] = getTweets(rootDir);
  const fullTextTweets = getFullTextTweets(userHandle, tweets);
  writeFileSync(`${userHandle}_tweets.txt`, fullTextTweets);
} catch (err) {
  console.error((err as Error).message);
  process.exit(1);
}
