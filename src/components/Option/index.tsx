import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {
  Canvas,
  Path,
  Skia,
  useValue,
  runTiming,
  BlurMask,
  Circle,
  Easing
} from '@shopify/react-native-skia';

import { styles } from './styles';
import { THEME } from '../../styles/theme';
import { useEffect } from 'react';

type Props = TouchableOpacityProps & {
  checked: boolean;
  title: string;
}

const CHECK_SIZE = 28;
const CHECK_STROKE = 2;

export function Option({ checked, title, ...rest }: Props) {
  const circleStrokePercentage = useValue(0);
  const centerCircleRadius = useValue(0);

  const RADIUS = (CHECK_SIZE - CHECK_STROKE) / 2;
  const CENTER_CIRCLE_RADIUS = RADIUS / 2;

  const path = Skia.Path.Make();
  path.addCircle(CHECK_SIZE, CHECK_SIZE, RADIUS);

  useEffect(() => {
    if(checked) {
      runTiming(circleStrokePercentage, 1, { duration: 700 })
      runTiming(centerCircleRadius, CENTER_CIRCLE_RADIUS, { easing: Easing.bounce })
    } else {
      runTiming(circleStrokePercentage, 0, { duration: 700 })
      runTiming(centerCircleRadius, 0, { easing: Easing.bounce })
    }
  }, [checked])

  return (
    <TouchableOpacity
      style={
        [
          styles.container,
          checked && styles.checked
        ]
      }
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>

      <Canvas style={{
        height: CHECK_SIZE * 2,
        width: CHECK_SIZE * 2,
      }}>
        <Path
          path={path}
          color={THEME.COLORS.GREY_500}
          style="stroke"
          strokeWidth={CHECK_STROKE}
        />

        <Path
          path={path}
          color={THEME.COLORS.BRAND_LIGHT}
          style="stroke"
          strokeWidth={CHECK_STROKE}
          start={0}
          end={circleStrokePercentage}
        >
          <BlurMask
            blur={2}
            style="solid"
          />
        </Path>

        <Circle
          cx={CHECK_SIZE}
          cy={CHECK_SIZE}
          r={centerCircleRadius}
          color={THEME.COLORS.BRAND_LIGHT}
        >
          <BlurMask
            blur={4}
            style="solid"
          />
        </Circle>
      </Canvas>
    </TouchableOpacity>
  );
}