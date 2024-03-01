import { TweetItem } from '../../interfaces/tweetItem'
import { Typography } from '@mui/material'

interface TweetListProps{
    tweets: TweetItem[]
}

const TweetlList = ({ tweets }:TweetListProps) => {
    return tweets.map((tweet, index) => tweet && <Typography component={'h3'} key={index} color={'white'}>{tweet.name}</Typography>)

}

export default TweetlList

