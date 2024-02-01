import * as React from 'react';
import semuq1 from './assets/oldh1.jpg';
import volc from './assets/old.jpg';
import acat from './assets/contruction.jpg';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent' ,
    textAlign: 'center',
  }));

export default function AboutPack() {
  return (
    <div>
      <Stack
      justifyContent="center"
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>
            <img src={semuq1} />
        </Item>
        <Item>
        <img src={volc} />
        </Item>
        <Item>
        <img src={acat} />
        </Item>
      </Stack>
    </div>
  );
}