import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'
interface BtnProps{
    onClick:() => void
}
const CloseBtn = ({onClick}:BtnProps) => {
  return (
    <IconButton
    size="small"
    aria-label="close toast"
    color="inherit"
    onClick={onClick}
>
    <Close fontSize="small" />
</IconButton>
  )
}

export default CloseBtn