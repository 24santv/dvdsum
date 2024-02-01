import * as React from 'react';
import semuq1 from './assets/menu.jpg';
import volc from './assets/pan.jpg';
import acat from './assets/comida.jpg';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent' ,
    textAlign: 'center',
  }));

export default function SpaPack() {
  return (
    <div>
      <Stack
      justifyContent="center"
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>
            <img src={volc} />
        </Item>
        <Item>

        <img src={semuq1} />
        </Item>
        <Item>
        <img src={acat} />
        </Item>
      </Stack>
    </div>
  );
}