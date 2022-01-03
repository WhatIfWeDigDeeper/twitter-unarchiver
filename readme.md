# Twitter Archive Report

Given a user's Twitter archive unzipped in this directory, it will generates a text file with the following data from each tweet

```text

ISO date
tweet URL
full_text

```

First, download and unzip your Twitter archive in this directory.

Pass in your user handle

```bash
npm run generate whatifwedigdeep
```

The script will generate a file `{userHandle}_tweets.txt`

## Ideas for enhancement

1. unzip archive
2. npm publish
3. use tj/commander
4. support report formats
   1. `--csv` generate from all fields
   2. `--txt` default
