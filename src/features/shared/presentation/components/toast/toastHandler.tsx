import React from 'react'
import { Toaster } from 'react-hot-toast'

function ToastHandler() {
  return (
    <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={10}
        containerClassName="mt-16 sm:mt-20 mr-2 sm:mr-4"
        toastOptions={{
            duration: 3000,
            
            className: '!bg-base-200 !text-white !border !border-white/5 !shadow-2xl !rounded-2xl !font-sans',
            
            style: {
                background: '#1E1E1E',
                color: '#fff',
                padding: '16px 24px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)',
                fontSize: '0.95rem',
                fontWeight: 500,
                maxWidth: '400px',
            },

            success: {
                iconTheme: {
                    primary: '#FF9F43', 
                    secondary: '#1E1E1E', 
                },
                style: {
                    borderLeft: '4px solid #FF9F43', 
                }
            },

            error: {
                iconTheme: {
                    primary: '#EF4444',
                    secondary: '#1E1E1E',
                },
                style: {
                    borderLeft: '4px solid #EF4444',
                }
            },

            loading: {
                iconTheme: {
                    primary: '#A6ADBB',
                    secondary: '#1E1E1E',
                },
            }
        }}
    />
  )
}

export default ToastHandler;