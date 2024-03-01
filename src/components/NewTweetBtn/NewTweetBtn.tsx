import { Fab } from "@mui/material"
import { Add } from "@mui/icons-material"
import styles from './NewTweetBtn.module.scss'
import { Dispatch, SetStateAction } from "react"
interface BtnProps{
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
const NewTweetBtn = ({setIsOpen}:BtnProps) => {
  return (
    <Fab className={styles.btn__openModal} onClick={() => setIsOpen(true)} color='primary' aria-label='add new tweet'>
    <Add/>
</Fab>
  )
}

export default NewTweetBtn