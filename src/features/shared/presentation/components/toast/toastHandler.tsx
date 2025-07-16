import React from 'react'
import { Toaster } from 'react-hot-toast'

function ToastHandler() {
  return (
    <Toaster
        position="top-right"
        containerClassName='mt-10'
        reverseOrder={false}
        gutter={8}
        toastOptions={{
            className: '',
            duration: 1500,
            style: {
            background: 'rgb(24 30 36)',
            color: '#fff',
            },
            success:{
                style: {
                    background: '#4caf50',
                    color: '#fff',
                },
            },
            error: {
                style: {
                    background: '#f44336',
                    color: '#fff',
                },
            },
        }}
    
    
    />
  )
}

export default ToastHandler