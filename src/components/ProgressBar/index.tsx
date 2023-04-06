import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { styles } from './styles';

interface Props {
  total: number;
  current: number;
}

export function ProgressBar({ total, current }: Props) {
  const percentage = useSharedValue(0);

  const progressBarAnimatedStyle = useAnimatedStyle(() => {
    return  {
      width: `${percentage.value}%`
    }
  })

  useEffect(() => {
    percentage.value = withTiming(Math.round((current / total) * 100), { duration: 1000 });
  }, [current]);

  return (
    <View style={styles.track}>
      <Animated.View style={[styles.progress, progressBarAnimatedStyle]} />
    </View>
  );
}