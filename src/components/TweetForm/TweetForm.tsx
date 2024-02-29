import { FormControl, FormGroup, TextField } from '@mui/material'
import { ChangeEventHandler } from 'react'
interface Props{
    handleChange: ChangeEventHandler<HTMLInputElement>
}
const TweetForm = ({handleChange}:Props) => {
  return (
    <FormControl>
        <FormGroup>
            <TextField 
            type='text'
            name='name'
            placeholder='Escribe un tweet'
            onChange={handleChange}
            required
            />
        </FormGroup>
        <FormGroup>
            <TextField 
            type='text'
            name='tweet'
            multiline
            rows={6}
            placeholder='Escribe un tweet'
            margin='normal'
            onChange={handleChange}
            required
            />
        </FormGroup>
    </FormControl>
  )
}

export default TweetForm