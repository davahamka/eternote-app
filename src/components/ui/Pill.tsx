import { Pressable, Text } from 'native-base';
import React from 'react';

type Props = {
  px?: string;
  width?: string;
  active?: boolean;
  activeBgColor?: string;
  activeTextColor?: string;
  defaultBgColor?: string;
  defaultTextColor?: string;
  onPress: () => void;
};

const Pill: React.FC<Props> = ({
  children,
  active,
  width,
  px,
  activeBgColor = 'success',
  activeTextColor = 'white',
  defaultBgColor = '#EDEDED',
  defaultTextColor = '#000',
  onPress,
}) => {
  return (
    <Pressable
      bg={active ? activeBgColor : defaultBgColor}
      width={width ? width : '96px'}
      display='flex'
      paddingY='6px'
      alignItems='center'
      rounded='full'
      justifyContent='center'
      px={px}
      onPress={onPress}>
      <Text
        fontSize='sm'
        fontWeight='medium'
        color={active ? activeTextColor : defaultTextColor}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Pill;
