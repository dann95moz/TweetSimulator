import {  Dialog} from '@mui/material'
import { PropsWithChildren } from 'react';
import { OpenState } from '../../interfaces/states/openState';

const TweetDialog = ({isOpen,setIsOpen,children}:PropsWithChildren< OpenState>) => {


  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        {children}
  
</Dialog>
  )
}

export default TweetDialog