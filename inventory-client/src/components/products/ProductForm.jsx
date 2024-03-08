import React from 'react'
import { Box, Button, Stack } from '../../ui'
import { Link } from 'react-router-dom'

export const ProductForm = () => {
  return (
    <Box justifyContent="center">
        <Stack>
        
        <Link to="/products"><Button variant="contained">Back</Button></Link>
        
        <h1>Product Form</h1>
        </Stack>
    </Box>
  )
}
