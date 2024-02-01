import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import airbnb from './assets/airbnb.jpg'
import active from './assets/active.jpg'

const Item = styled(Paper)(({ theme }) => ({
  fontFamily: "second",
  color: '#ffffff' ,
  padding: theme.spacing(1),
  textAlign: 'center',
  width: '40%' ,
  backgroundColor: 'transparent' ,
}));

export default function ResponsiveStack2() {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>
        <p>At our jungle hotel, ensuring the happiness and satisfaction of every guest is our 
              top priority. We go the extra mile to take care of our customers, especially the little ones. Every day,
               we host exciting events for the kids, creating a lively and joyful atmosphere.</p> 

        </Item>
        <Item>
        <p>For our active guests, we organize a variety
                of outdoor events, ensuring there's always something fun and adventurous happening.</p>

        </Item>
        <Item>However, we also understand the importance 
                of relaxation, and for those seeking tranquility, we offer serene spas and ultimate relaxation setups. Additionally,
               for those who prefer a more private experience, we have Airbnb options available, 
               ensuring that every guest finds their perfect blend of excitement and relaxation in our jungle paradise.</Item>
      </Stack>
    </div>
  );
}