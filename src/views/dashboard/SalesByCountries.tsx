// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports

import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  title: string
  subtitle: string
  avatarText: string
  avatarColor: ThemeColor
}

const data: DataType[] = [
  {
    subtitle: 'El dia miercoles 23 de agosto se realizaran votaciones para la nueva junta',
    title: 'Reunion para votaciones',
    avatarText: 'JM',
    avatarColor: 'success'
  },
  {
    avatarColor: 'error',
    avatarText: 'UK',
    subtitle: 'Loram ipsum dolor',
    title: 'Titulo de prueba 1'
  },
  {
    subtitle: 'Loram ipsum dolor',
    title: 'Titulo de prueba 2',
    avatarText: 'UK',
    avatarColor: 'error'
  },
  {
    subtitle: 'Loram ipsum dolor',
    title: 'Titulo de prueba 3',
    avatarText: 'UK',
    avatarColor: 'error'
  },
  {
    subtitle: 'Loram ipsum dolor',
    title: 'Titulo de prueba 4',
    avatarText: 'UK',
    avatarColor: 'error'
  },
  {
    subtitle: 'Loram ipsum dolor',
    title: 'Titulo de prueba 5',
    avatarText: 'UK',
    avatarColor: 'error'
  },
  {
    subtitle: 'Loram ipsum dolor',
    title: 'Titulo de prueba 6',
    avatarText: 'UK',
    avatarColor: 'error'
  }
]

const SalesByCountries = () => {
  return (
    <Card
      style={{
        minHeight: '400px'
      }}
    >
      <CardHeader
        title='Noticias'
        titleTypographyProps={{ sx: { lineHeight: '1.2 !important', letterSpacing: '0.31px !important' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent
        sx={{ pt: theme => `${theme.spacing(2)} !important` }}
        style={{
          overflowY: 'auto',
          maxHeight: '335px'
        }}
      >
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(index !== data.length - 1 ? { mb: 5.875 } : {})
              }}
            >
              <Avatar
                sx={{
                  width: 38,
                  height: 38,
                  marginRight: 3,
                  fontSize: '1rem',
                  color: 'common.white',
                  backgroundColor: `${item.avatarColor}.main`
                }}
              >
                {item.avatarText}
              </Avatar>

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ mr: 0.5, fontWeight: 600, letterSpacing: '0.25px' }}>{item.title}</Typography>
                  </Box>
                  <Typography variant='caption' sx={{ lineHeight: 1.5 }}>
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default SalesByCountries
