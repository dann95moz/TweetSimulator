import {  Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { DialogProps } from '../../interfaces/Props/TweetDialogProps.interface'
import { useTweet } from '../../Hooks/useTweetForm';
import TweetForm from '../TweetForm/TweetForm';

const TweetDialog = ({isOpen,setIsOpen, setTweetsList,  setToastProps,setIsToastOpened}:DialogProps) => {

    const {  handleSubmit, handleInvalid, handleChange } = useTweet({ setIsOpen, setTweetsList, setToastProps, setIsToastOpened });

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
    <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
        <DialogTitle component={'h2'}>Enviar Tweet</DialogTitle>
        <DialogContent>
            <TweetForm handleChange={handleChange} />
        </DialogContent>
        <DialogActions>
            <Button type='submit'>Agregar tweet</Button>
        </DialogActions>
    </form>
</Dialog>
  )
}

export default TweetDialog