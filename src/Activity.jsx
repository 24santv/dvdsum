import * as React from 'react';
import TextRating from './Rating';
import ZeroWidthStack from './Comments';
import IconContainer from './Stars';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent' ,
  padding: theme.spacing(1),
  textAlign: 'center',
  contentAlign: 'center',
}));

export default function Activity() {
  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        <Item>
             <ZeroWidthStack></ZeroWidthStack>
        </Item>
        <Item>
            <TextRating></TextRating>
        </Item>
        <Item>
            <IconContainer></IconContainer>
        </Item>
      </Stack>
    </Box>
  );
}