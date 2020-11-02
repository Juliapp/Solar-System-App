import React from 'react';

import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import WelcomeRoutes from './src/Routes/Welcome.Routes';

export default function App() {
  const [fontsLoadead] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoadead) {
    return null;
  }

  /*
  if(is not logged){
    return <Welcome/>
  }else{
    return <Routes/>
  }
  
  */

  return <WelcomeRoutes />;
}

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
