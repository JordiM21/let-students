import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from '@/public/googleForms.png';
import Image from 'next/image';

export default function FormsCheck() {
  const forms = [
    {
      name: "form 1"
    },
    {
      name: "form 2"
    },
    {
      name: "form 3"
    }
  ]
  return (
    <div className=''>
      <h1 className='text-4xl font-bold text-white text-center py-4'>Google Forms Responses</h1>
      <div className='md:flex space-y-4'>
        {
          forms.map((form) => (
            <Card sx={{ maxWidth: 345 }} className="mx-auto">
              <CardActionArea>
                <Image src={logo} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {form.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </div>
    </div>
  )
}
