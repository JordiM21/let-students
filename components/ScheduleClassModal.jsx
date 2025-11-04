'use client'

import { useState, forwardRef, useImperativeHandle } from 'react'
import { Modal, Fade, Backdrop, Box, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const ScheduleClassModal = forwardRef((_, ref) => {
  const [open, setOpen] = useState(false)

  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSfB8IfhE26H3Qxng2ORCRAhwK_I7PbbdWQIsU6bChVV92hheA/viewform?usp=header'

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // 👇 expose handleOpen to any parent using ref
  useImperativeHandle(ref, () => ({
    openModal: handleOpen,
  }))

  return (
    <Modal
      className="z-50"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      disableScrollLock
      slotProps={{
        backdrop: {
          timeout: 300,
          sx: { backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' },
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 750,
            height: '80vh',
            bgcolor: 'background.paper',
            borderRadius: 4,
            boxShadow: 24,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              bgcolor: '#173330',
              color: 'white',
              p: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
              Formulario Clase de Prueba
            </Typography>

            <IconButton onClick={handleClose} sx={{ fill: 'white' }}>
              <CloseIcon sx={{ fill: 'white' }} />
            </IconButton>
          </Box>

          {/* Content with iframe */}
          <Box sx={{ flex: 1, overflow: 'hidden' }}>
            <iframe
              src={formUrl}
              width="100%"
              height="100%"
              title="Formulario clase gratuita"
              className="border-0 w-full h-full"
              loading="lazy"
            />
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
})

ScheduleClassModal.displayName = 'ScheduleClassModal'
export default ScheduleClassModal
