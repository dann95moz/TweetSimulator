import { Delete } from "@mui/icons-material";
import { TweetItem } from "../../interfaces/tweetItem";
import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import styles from "./TweetList.module.scss";
interface TweetListProps {
  tweets: TweetItem[];
  setTweetsList: (
    value: TweetItem[] | ((prevTweets: TweetItem[]) => TweetItem[])
  ) => void;
}
const TweetList = ({ tweets, setTweetsList }: TweetListProps) => {
  const handleDelete = (i: number) => {
    const newTweetList = tweets.filter((t, index) => index !== i);

    setTweetsList(newTweetList);
    
  };

  return (
    <Grid container spacing={3} p={10}>
      {tweets.map(
        (tweet, index) =>
          tweet && (
            <Grid item md={3} sm={6} xs={6} key={index}>
              <Card >
                <CardContent
                 sx={{
                     display: "flex", 
                     justifyContent: "space-between",
                      alignItems:'center'
                      }}>
                    <div>
                    <h5 className={styles.text}>{tweet.name}</h5>
                  <h6 className={styles.text}>{tweet.tweet}</h6>
                  <Typography variant='h6' 
                  sx={{
                    fontSize:'0.6rem',
                    textAlign:'right',
                     color:'#a2a2a2',
                      marginRight:'1.5rem'
                    }}
                      >Tweeted at :{new Date(tweet.date).toLocaleTimeString()}</Typography> 

                    </div>

                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(index)}
                >
                  <Delete />
                </IconButton>
                </CardContent>
              </Card>
              
            </Grid>
          )
      )}
    </Grid>
  );
};

export default TweetList;
