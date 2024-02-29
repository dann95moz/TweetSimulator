import { ChangeEvent, FormEvent, useState } from 'react';
import { TweetItem } from '../interfaces/tweetItem';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../consts/consts';
import { UseTweetProps } from '../interfaces/useTweetForm';

export const useTweet = ({setIsOpen, setTweetsList, setToastProps, setIsToastOpened}:UseTweetProps) => {
    const [tweet, setTweet] = useState<TweetItem>({} as TweetItem);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newTweet = {...tweet, date: new Date() };
        setTweet(newTweet);
        setTweetsList((prevTweets: TweetItem[]) => [...prevTweets, newTweet]);
        setIsOpen(false);
        setToastProps({severity: 'success', message:SUCCESS_MESSAGE});
        setIsToastOpened(true);
    }

    const handleInvalid = () => {
        setToastProps({severity: 'error', message:ERROR_MESSAGE});
        setIsToastOpened(true);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTweet(prevTweet => ({
            ...prevTweet,
            [e.target.name]: e.target.value,
        }));
    }

    return { tweet, handleSubmit, handleInvalid, handleChange };
}