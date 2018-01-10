module.exports.do = function(req, res){
res.status(200).send({
  "package": "HackerNews",
  "tagline": "HackerNews API Package",
  "keywords": ["API", "developer", "hacker", "news", "programmer", "programming", "publication", "update"],
  "description": "Public Hacker News data in near real time.",
  "image": "https://news.ycombinator.com/favicon.ico",
  "repo": "https://github.com/RapidSoftwareSolutions/Marketplace-HackerNews-Package",
  "accounts": {
    "domain": "news.ycombinator.com",
    "credentials": []
  },
  "blocks": [
    {
      "name": "getItem",
      "description": "Stories, comments, jobs, Ask HNs and even polls are just items.",
      "args": [
        {
          "name": "itemId",
          "type": "Number",
          "info": "The item's unique id. Required.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getUser",
      "description": "Users are identified by case-sensitive ids.",
      "args": [
        {
          "name": "username",
          "type": "String",
          "info": "The user's unique username. Case-sensitive. Required.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getTopStories",
      "description": "Up to 500 top stories.",
      "args": [],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getNewStories",
      "description": "Up to 500 new stories.",
      "args": [],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getBestStories",
      "description": "Up to 500 best stories.",
      "args": [],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getAskStories",
      "description": "Up to 200 of the latest Ask HN stories.",
      "args": [],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getShowStories",
      "description": "Up to 200 of the latest Show HN stories.",
      "args": [],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getJobStories",
      "description": "Up to 200 of the latest Job stories.",
      "args": [],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getUpdates",
      "description": "The item and profile changes.",
      "args": [],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    }
  ]
});
};
