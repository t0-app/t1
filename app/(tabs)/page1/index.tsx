import { Link } from 'expo-router';
import { Text, View } from 'components/style';

export default function Page1() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Page1 - (tab)/page1</Text>
      <Link href="/(tabs)/page2" style={{ color: 'blue' }}>
        (tab)/page2
      </Link>
      <Link href="/" style={{ color: 'blue' }}>
        "/"
      </Link>
    </View>
  );
}
