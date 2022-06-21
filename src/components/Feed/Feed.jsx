import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  var tweets = props.tweets
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox tweetText={props.tweetText} setTweetText={props.setTweetText} tweets={tweets} userProfile={props.userProfile} setTweets={props.setTweets}/>

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
        tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet}/>
        ))
      }</div>
    </div>
  )
}
