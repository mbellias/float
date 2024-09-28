import { Pressable, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link
        href='/login'
        asChild
      >
        <Pressable>
          <ThemedText type='subtitle'>
            I have an account, Login &rarr;
          </ThemedText>
        </Pressable>
      </Link>
      <ThemedText
        type='default'
        style={{ margin: 10 }}
      >
        Or
      </ThemedText>
      <Link
        href='/sign-up'
        asChild
      >
        <Pressable>
          <ThemedText
            type='subtitle'
            style={{ alignItems: 'center' }}
          >
            I don't have an account, Sign up &rarr;
          </ThemedText>
        </Pressable>
      </Link>
    </View>
  );
}
