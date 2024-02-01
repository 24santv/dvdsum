import * as React from 'react';
import semuq1 from './assets/semuq1.jpg';
import volc from './assets/volc1.jpg';
import acat from './assets/acat.jpg';
import Slide1 from './assets/Slide1.jpg';
import Slide2 from './assets/Slide2.jpg';
import Slide3 from './assets/Slide3.jpg';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent' ,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function StackR() {
  return (
    <div>
      <Stack
      justifyContent="center"
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>
            <img src={Slide1} />
        </Item>
        <Item>
        <img src={Slide2} />
        </Item>
        <Item>
        <img src={Slide3} />
        </Item>
      </Stack>
    </div>
  );
}
