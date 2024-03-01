import { Alert, AlertColor, Button, DialogActions, DialogContent, DialogTitle, Fab, IconButton, Snackbar, Typography } from '@mui/material'
import { Add, Close } from '@mui/icons-material'

import styles from './NewTweet.module.scss'
import { TWEETS_STORAGE_KEY } from '../../consts/consts'
import TweetDialog from '../TweetDialog/TweetDialog'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import TweetForm from '../TweetForm/TweetForm'
import { useTweet } from '../../Hooks/useTweetForm'




const NewTweet = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isToastOpened, setIsToastOpened] = useState(false);
    const [tweetsList, setTweetsList] = useLocalStorage(TWEETS_STORAGE_KEY, [])
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

  
    const {  handleSubmit, handleInvalid, handleChange } = useTweet({ setIsOpen, setTweetsList, setToastProps, setIsToastOpened });



    const handleCloseToast = () => {
        setIsToastOpened(false);
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

isOpen={isOpen}
setIsOpen={setIsOpen}

>
<form onSubmit={handleSubmit} onInvalid={handleInvalid}>
        <DialogTitle component={'h2'}>Enviar Tweet</DialogTitle>
        <DialogContent>
            <TweetForm handleChange={handleChange} />
        </DialogContent>
        <DialogActions>
            <Button type='submit'>Agregar tweet</Button>
        </DialogActions>
    </form>
</TweetDialog>
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
