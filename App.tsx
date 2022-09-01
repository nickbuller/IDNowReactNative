/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  NativeModules,
} from 'react-native';

import styles from './styles';

const IdNowCore = (NativeModules as any).IdnowCore;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('TST-GLGFY');
  const [error, setError] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Radial IDNow</Text>
      <Text>Input Ident Token:</Text>
      <TextInput
        style={styles.textBox}
        value={token}
        onChange={e => {
          setToken(e.nativeEvent.text);
        }}
      />
      {loading ? (
        <Text style={styles.statusText}>
          Starting the identification process...
        </Text>
      ) : (
        <TouchableOpacity
          style={styles.button}
          disabled={loading}
          onPress={async () => {
            setError('');
            try {
              setLoading(true);
              const res = await IdNowCore.startIdent(token, 'en');
            } catch (e) {
              setError(e.message );
              setLoading(false);
            }
          }}>
          <Text style={styles.buttonText}>Start identification process</Text>
        </TouchableOpacity>
      )}
      {error ? <Text>Status: {error}</Text> : null}
    </SafeAreaView>
  );
};

export default App;
