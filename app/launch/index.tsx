import { Link } from 'expo-router';
import { Text, View } from 'components/style';

export default function Launch() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Launch - /</Text>
      <Link href="/(tabs)/page1" style={{ color: 'blue' }}>
        (tab)/page1
      </Link>
      <Link href="/(tabs)/page2/" style={{ color: 'blue' }}>
        (tab)/page2
      </Link>
    </View>
  );
}
