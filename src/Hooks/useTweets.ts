import { useEffect } from "react";
import { TWEETS_STORAGE_KEY } from "../consts/consts";
import { useLocalStorage } from "./useLocalStorage";

export const useTweets = () => {
    const [tweetsList, setTweetsList] = useLocalStorage(TWEETS_STORAGE_KEY, [])

    useEffect(() => {
        const savedTweets = localStorage.getItem(TWEETS_STORAGE_KEY);
        if (savedTweets) {
            setTweetsList(JSON.parse(savedTweets));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(TWEETS_STORAGE_KEY, JSON.stringify(tweetsList));
    }, [tweetsList]);

    return { tweetsList, setTweetsList }
}
