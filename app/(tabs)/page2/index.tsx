import { Link } from 'expo-router';
import { Text, View } from 'components/style';

export default function Page1() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Page2 - (tab)/page2</Text>
      <Link href="/(tabs)/page1" style={{ color: 'blue' }}>
        (tab)/page1
      </Link>
      <Link href="/" style={{ color: 'blue' }}>
        "/"
      </Link>
    </View>
  );
}
