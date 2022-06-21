import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {

  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value)
  }

  const handleOnSubmit = () => {
    const newTweet = {
      id: props.tweets.length,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0
    }
    props.setTweets([...props.tweets, newTweet])
    props.setTweetText("")
  }

  var notValid = false
  if(props.tweetText.length == 0 || props.tweetText.length > 140) {
    notValid = true
  }

  return (
    <div className="tweet-box">
      <TweetInput handleOnChange={handleOnTweetTextChange} value={props.tweetText}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton notValid={notValid} tweetText={props.tweetText} handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  var classColor = ""
  if (props.tweetText.length > 140) {
    classColor = "red"
  }
  var rem = 140 - props.tweetText.length
  if (props.tweetText.length == 0) {
    rem = ""
  }
  return <span className={classColor}>{rem}</span>
}

export function TweetSubmitButton(props) {
  
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} disabled={props.notValid}>Tweet</button>
    </div>
  )
}
