import { Alert, AlertColor, Button, DialogActions, DialogContent, DialogTitle, Snackbar } from '@mui/material'
import { TWEETS_STORAGE_KEY } from '../../consts/consts'
import TweetDialog from '../TweetDialog/TweetDialog'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import TweetForm from '../TweetForm/TweetForm'
import { useTweet } from '../../Hooks/useTweetForm'
import TweetlList from '../TweetList/TweetlList'
import NewTweetBtn from '../NewTweetBtn/NewTweetBtn'
import TweetSnackBar from '../TweetSnackBar/TweetSnackBar'
import CloseBtn from '../atoms/CloseBtn/CloseBtn'




const NewTweet = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
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



    return (
        <div >
         <TweetlList tweets={tweetsList}/>
<NewTweetBtn setIsOpen={setIsOpen}/>
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
<TweetSnackBar
    open={isToastOpened}
    onClose={handleCloseToast}
    severity={toastProps.severity}
/>
            <Snackbar
                anchorOrigin={{vertical:'top',horizontal:'right'}}
                open={isToastOpened}
                autoHideDuration={3000}
                onClose={handleCloseToast}
                message={toastProps.message}
                action={<CloseBtn onClick={handleCloseToast}/>}
            >
                <Alert onClose={handleCloseToast} severity={toastProps.severity} variant="filled" sx={{ width: '100%' }}>
                    {toastProps.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default NewTweet
