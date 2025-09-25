require('dotenv').config()
const express = require("express")


const app = express()
const port = 2000
const githubData = {
  "login": "Tirthrajsinh007",
  "id": 179387381,
  "node_id": "U_kgDOCrE79Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/179387381?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Tirthrajsinh007",
  "html_url": "https://github.com/Tirthrajsinh007",
  "followers_url": "https://api.github.com/users/Tirthrajsinh007/followers",
  "following_url": "https://api.github.com/users/Tirthrajsinh007/following{/other_user}",
  "gists_url": "https://api.github.com/users/Tirthrajsinh007/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Tirthrajsinh007/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Tirthrajsinh007/subscriptions",
  "organizations_url": "https://api.github.com/users/Tirthrajsinh007/orgs",
  "repos_url": "https://api.github.com/users/Tirthrajsinh007/repos",
  "events_url": "https://api.github.com/users/Tirthrajsinh007/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Tirthrajsinh007/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-08-25T13:16:22Z",
  "updated_at": "2025-09-25T14:15:40Z"
}

app.listen(process.env.PORT ,()=> {
    console.log(`app is listning on port ${port}`);
    
})
app.get('/',(req,res) => {
    res.send("hello everyone")
})
app.get('/githubdata', (req,res) =>{
    res.json(githubData)
})

app.get('/twitter',(req,res)=>{
    res.send("this is twitter")
})
