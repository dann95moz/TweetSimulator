import { Dispatch } from "react";
import { TweetItem } from "../tweetItem";

export interface TweetState {
    tweet:TweetItem;
    setTweet: Dispatch<React.SetStateAction<TweetItem>>;
}