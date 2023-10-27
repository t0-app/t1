import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
  Text as RNText,
  TextProps as RNTextProps,
  View as RNView,
  ViewProps as RNViewProps,
} from 'react-native';

const dStyle = { borderWidth: 1, borderColor: 'gray' };

export interface ViewProps extends RNViewProps {}

export function View({ ...props }: ViewProps) {
  return <RNView style={dStyle} {...props} />;
}

export interface TextProps extends RNTextProps {}

export function Text({ ...props }: ViewProps) {
  return <RNText style={dStyle} {...props} />;
}

export interface ActivityIndicatorProps extends RNActivityIndicatorProps {}

export function ActivityIndicator({ ...props }: ViewProps) {
  return <RNActivityIndicator style={dStyle} {...props} />;
}
