import { FormGroup, FormLabel, TextField } from '@mui/material'
import { FormGroupProps } from '../../interfaces/FormGroupProps'

const TextFieldGroup = ({label,name,placeholder,rows,handleChange, multiline}:FormGroupProps) => {
  return (
    <FormGroup>
    <FormLabel>{label}</FormLabel>
    <TextField 
        type='text'
        name={name}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        margin='normal'
        onChange={handleChange}
        required
    />
</FormGroup>
  )
}

export default TextFieldGroup