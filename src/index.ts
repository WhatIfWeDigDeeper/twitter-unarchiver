import { writeFileSync } from 'fs';
import * as process from "process";
import { getFullTextTweets } from './twitterParser';

if (process.argv.length < 2 || !process.argv[2]) {
  console.error('Please pass your username');
  process.exit(1);
}

const userHandle = process.argv[2].replace('@', '');
const fullTextTweets = getFullTextTweets(userHandle);

writeFileSync(`${userHandle}_tweets.txt`, fullTextTweets);
