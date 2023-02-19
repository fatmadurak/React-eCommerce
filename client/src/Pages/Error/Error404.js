import React from 'react'
import { Alert,AlertIcon,AlertDescription } from '@chakra-ui/react'

function Error404() {
  return (
    <div>
  
  <Alert status='error'>
  <AlertIcon />
  <AlertDescription>Page is not founded...</AlertDescription>
  </Alert>

    </div>
  )
}

export default Error404