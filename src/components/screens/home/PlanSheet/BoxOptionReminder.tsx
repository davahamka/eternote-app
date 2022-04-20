import React from 'react';
import { Box, Pressable, Text } from 'native-base';

type Props = {
  active?: boolean;
  onPress: () => void;
};

const BoxOptionReminder: React.FC<Props> = ({ active, children, onPress }) => {
  return (
    <Pressable width='48%' onPress={onPress}>
      <Box
        borderWidth='1'
        rounded='lg'
        borderColor={active ? '#6A6A6A' : '#6A6A6A'}
        display='flex'
        justifyContent='center'
        alignItems='center'
        bg={active ? 'neutral.metal' : '#fff'}
        height='48px'>
        <Text color={active ? 'white' : 'neutral.characoal'}>{children}</Text>
      </Box>
    </Pressable>
  );
};

export default BoxOptionReminder;
