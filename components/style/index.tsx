import {
  Text as RNText,
  TextProps as RNTextProps,
  View as RNView,
  ViewProps as RNViewProps,
} from 'react-native';

export interface ViewProps extends RNViewProps {}

export function View({ ...props }: ViewProps) {
  return <RNView style={{ borderWidth: 1, borderColor: 'red' }} {...props} />;
}

export interface TextProps extends RNTextProps {}

export function Text({ ...props }: ViewProps) {
  return <RNText style={{ borderWidth: 1, borderColor: 'red' }} {...props} />;
}
