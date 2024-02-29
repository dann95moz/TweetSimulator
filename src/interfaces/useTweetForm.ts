import { Dispatch, SetStateAction } from "react";
import { TweetItem } from "./tweetItem";
import { AlertColor } from "@mui/material";

export interface UseTweetProps {
    
   
    setIsOpen: (isOpen: boolean) => void;
    setTweetsList: Dispatch<SetStateAction<TweetItem[]>>
    setToastProps: Dispatch<SetStateAction<{
        severity: AlertColor;
        message: string;
    }>>
    setIsToastOpened: (isOpened: boolean) => void;
  }