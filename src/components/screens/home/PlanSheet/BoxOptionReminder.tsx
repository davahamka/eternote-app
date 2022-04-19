import React from 'react';
import { Box, Text } from 'native-base';

const BoxOptionReminder: React.FC = ({ children }) => {
  return (
    <Box
      width='48%'
      borderWidth='1'
      rounded='lg'
      borderColor='#6A6A6A'
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='48px'>
      <Text color='neutral.characoal'>{children}</Text>
    </Box>
  );
};

export default BoxOptionReminder;
