import {
  existsSync,
  readdirSync,
  readFileSync
} from "fs";
import * as path from "path";

import { Tweet } from "./types";

function validateTwitterDirectoryResult(directories: string[]) {
  if (directories.length === 0) {
    throw new Error('No twitter-* directory found');
  }
  if (directories.length > 1) {
    throw new Error(`
      Multiple twitter-* directories found.
      Please only run with one archive at a time`
    );
  }
}

const getDirectoryNames = (predicate: (entryName: string) => boolean) => (source: string) =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirEntry => dirEntry.isDirectory() && predicate(dirEntry.name))
    .map(dirEntry => dirEntry.name);

const getTweetFilePath = (sourceDir: string) =>
  path.join(sourceDir, 'data', 'tweet.js');

function parseTweets(tweetFilePath: string): Tweet[] {
  const tweetFileContent = readFileSync(tweetFilePath, 'utf8');
  const SKIP_ASSIGNMENT = 'window.YTD.tweet.part0 = '.length;
  const tweets = JSON.parse(tweetFileContent.substring(SKIP_ASSIGNMENT));
  return tweets;
}

const getTwitterDirectoryNames = getDirectoryNames(entryName => entryName.startsWith('twitter-'));

export function getTweets(rootDir: string): Tweet[] {
  const directories = getTwitterDirectoryNames(rootDir);
  validateTwitterDirectoryResult(directories);
  const twitterDir = directories[0];
  const tweetFilePath = getTweetFilePath(twitterDir);
  if (!existsSync(tweetFilePath)) {
    throw new Error(`No tweet.js file found at ${tweetFilePath}`);
  }
  return parseTweets(tweetFilePath);
}
