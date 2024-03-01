import { FormControl} from '@mui/material'
import { ChangeEventHandler } from 'react'
import TextFieldGroup from '../TextFieldGroup/TextFieldGroup'
interface Props{
    handleChange: ChangeEventHandler<HTMLInputElement>
}
const TweetForm = ({handleChange}:Props) => {
  return (
      <FormControl>
        <TextFieldGroup
         name='name'
         placeholder='Escribe un tweet'
         handleChange={handleChange} 
         label='Tweet Title'
        />
        <TextFieldGroup
         name='tweet'
         label='Tweet Content'
         multiline
         rows={6}
         placeholder='Escribe un tweet'
         handleChange={handleChange}
           
        />
    </FormControl>
  )
}

export default TweetForm