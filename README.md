# HackerNews Package
Public Hacker News data in near real time.
* Domain: news.ycombinator.com

## TOC: 
* [getItem](#getItem)
* [getUser](#getUser)
* [getTopStories](#getTopStories)
* [getNewStories](#getNewStories)
* [getBestStories](#getBestStories)
* [getAskStories](#getAskStories)
* [getAskStories](#getAskStories)
* [getShowStories](#getShowStories)
* [getJobStories](#getJobStories)
* [getUpdates](#getUpdates)
 
<a name="getItem"/>
## HackerNews.getItem
Stories, comments, jobs, Ask HNs and even polls are just items.

| Field | Type  | Description
|-------|-------|----------
| itemId| Number| Required: The item's unique id. Required.

<a name="getUser"/>
## HackerNews.getUser
Users are identified by case-sensitive ids.

| Field   | Type  | Description
|---------|-------|----------
| username| String| Required: The user's unique username. Case-sensitive. Required.

<a name="getTopStories"/>
## HackerNews.getTopStories
Up to 500 top stories.

No arguments.

<a name="getNewStories"/>
## HackerNews.getNewStories
Up to 500 new stories.

No arguments.

<a name="getBestStories"/>
## HackerNews.getBestStories
Up to 500 best stories.

No arguments.

<a name="getAskStories"/>
## HackerNews.getAskStories
Up to 200 of the latest Ask HN stories.

No arguments.

<a name="getAskStories"/>
## HackerNews.getAskStories
Up to 200 of the latest Ask HN stories.

No arguments.

<a name="getShowStories"/>
## HackerNews.getShowStories
Up to 200 of the latest Show HN stories.

No arguments.

<a name="getJobStories"/>
## HackerNews.getJobStories
Up to 200 of the latest Job stories.

No arguments.

<a name="getUpdates"/>
## HackerNews.getUpdates
The item and profile changes.

No arguments.

