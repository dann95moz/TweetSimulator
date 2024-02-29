import { useState } from "react";
import { TweetItem } from "../interfaces/tweetItem";

export const useLocalStorage = (key: string, initialValue: TweetItem[]): [TweetItem[], (value: TweetItem[] | ((prevTweets: TweetItem[]) => TweetItem[])) => void] => {
    console.log('trigger');
    
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: TweetItem[] | ((prevTweets: TweetItem[]) => TweetItem[])) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
};
