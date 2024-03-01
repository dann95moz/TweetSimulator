import {  AlertColor, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import TweetDialog from '../../components/TweetDialog/TweetDialog'
import {  useState } from 'react'
import TweetForm from '../../components/TweetForm/TweetForm'
import { useTweet } from '../../Hooks/useTweetForm'
import TweetlList from '../../components/TweetList/TweetlList'
import NewTweetBtn from '../../components/NewTweetBtn/NewTweetBtn'
import TweetSnackBar from '../../components/TweetSnackBar/TweetSnackBar'
import { useTweets } from '../../Hooks/useTweets'




const NewTweet = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isToastOpened, setIsToastOpened] = useState(false);
    const { tweetsList, setTweetsList } = useTweets()
    const [toastProps, setToastProps] = useState<{severity: AlertColor; message:string }>({ severity: 'error', message:'' });
    const {  handleSubmit, handleInvalid, handleChange } = useTweet({ setIsOpen, setTweetsList, setToastProps, setIsToastOpened });

    const handleCloseToast = () => {
        setIsToastOpened(false);
    }

    return (
        <div >
         <TweetlList tweets={tweetsList}/>
<NewTweetBtn
setIsOpen={setIsOpen}/>
<TweetDialog
isOpen={isOpen}
setIsOpen={setIsOpen}>
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
    message={toastProps.message}
/>

        </div>
    )
}

export default NewTweet
