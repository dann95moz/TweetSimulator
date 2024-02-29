import { Dispatch, SetStateAction } from "react";
import { TweetItem } from "../tweetItem";
import { AlertColor } from "@mui/material";
import { OpenState } from "../states/openState";
import { TweetState } from "../states/tweetState";

export interface DialogProps extends OpenState,TweetState{

    setTweetsList: Dispatch<SetStateAction<TweetItem[]>>
    setToastProps: Dispatch<SetStateAction<{
        severity: AlertColor;
        message: string;
    }>>
    setIsToastOpened:Dispatch<React.SetStateAction<boolean>>
}