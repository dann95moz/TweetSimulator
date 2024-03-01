import { Alert, AlertColor, Snackbar, SnackbarProps } from '@mui/material'

interface SnackBarProps extends SnackbarProps{
onClose: () => void
severity: AlertColor
}

const TweetSnackBar = ({open,onClose, message, action,severity}:SnackBarProps) => {
  return (
    <Snackbar
    anchorOrigin={{vertical:'top',horizontal:'right'}}
    open={open}
    autoHideDuration={3000}
    onClose={onClose}
    message={message}
    action={action}
>
    <Alert onClose={onClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
    </Alert>
</Snackbar>
  )
}

export default TweetSnackBar