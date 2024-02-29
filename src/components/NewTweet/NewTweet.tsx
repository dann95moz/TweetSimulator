import { Alert, AlertColor, Fab, IconButton, Snackbar, Typography } from '@mui/material'
import { Add, Close } from '@mui/icons-material'

import styles from './NewTweet.module.scss'
import { TweetItem } from '../../interfaces/tweetItem'
import { TWEETS_STORAGE_KEY } from '../../consts/consts'
import TweetDialog from '../TweetDialog/TweetDialog'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../Hooks/useLocalStorage'




const NewTweet = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isToastOpened, setisToastOpened] = useState(false);
    const [tweetsList, setTweetsList] = useLocalStorage(TWEETS_STORAGE_KEY, [])
    const [tweet, setTweet] = useState<TweetItem>({ name:'', tweet:'' });
    const [toastProps, setToastProps] = useState<{severity: AlertColor; message:string }>({ severity: 'error', message:'' });

    useEffect(() => {
        const savedTweets = localStorage.getItem(TWEETS_STORAGE_KEY);
        if (savedTweets) {
            setTweetsList(JSON.parse(savedTweets));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(TWEETS_STORAGE_KEY, JSON.stringify(tweetsList));
    }, [tweetsList]);

  



    const handleCloseToast = () => {
        setisToastOpened(false);
    }

    const action = (
        <IconButton
            size="small"
            aria-label="close toast"
            color="inherit"
            onClick={handleCloseToast}
        >
            <Close fontSize="small" />
        </IconButton>
    );

    return (
        <div className={styles.btn}>
         {tweetsList.map((tweet, index) => tweet && <Typography component={'h3'} key={index} color={'white'}>{tweet.name}</Typography>)}
            <Fab className={styles.btn__openModal} onClick={() => setIsOpen(true)} color='primary' aria-label='add new tweet'>
                <Add/>
            </Fab>
<TweetDialog
tweet={tweet}
isOpen={isOpen}
setIsOpen={setIsOpen}
setTweet={setTweet}
setIsToastOpened={setisToastOpened}
setTweetsList={setTweetsList}
setToastProps={setToastProps}
/>
            <Snackbar
                anchorOrigin={{vertical:'top',horizontal:'right'}}
                open={isToastOpened}
                autoHideDuration={3000}
                onClose={handleCloseToast}
                message={toastProps.message}
                action={action}
            >
                <Alert onClose={handleCloseToast} severity={toastProps.severity} variant="filled" sx={{ width: '100%' }}>
                    {toastProps.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default NewTweet
