import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Slide1 from './assets/Slide1.jpg';
import Slide2 from './assets/Slide2.jpg';
import Slide3 from './assets/Slide3.jpg';
import Slide4 from './assets/Slide4.jpg';
import Slide5 from './assets/Slide5.jpg';
import Slide6 from './assets/Slide6.jpg';
import Grid from '@mui/material/Grid';
import { Home } from '@mui/icons-material';

export default function StandardImageList() {
  return (
    <Grid className="Banana">
    <ImageList sx={{ maxwidth: "100%", height: "50%", msOverflowStyle: 'none', scrollbarWidth: 'none', }} cols={3} rowHeight={500} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
          
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Grid>
  );
}

const itemData = [
  {
    img: Slide1,
    title: 'Breakfast',
    
  },
  {
    img: Slide2,
    title: 'Burger',
  },
  {
    img: Slide3,
    title: 'Camera',
  },
  {
    img: Slide4,
    title: 'Coffee',
  },
  {
    img: Slide5,
    title: 'Hats',
  },
  {
    img: Slide6,
    title: 'Honey',
  },
];