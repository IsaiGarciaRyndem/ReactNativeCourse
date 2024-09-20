import { StatusBar } from 'expo-status-bar';
import {Alert, Button, Platform, StyleSheet, Text, View} from 'react-native';
import * as Notifications from 'expo-notifications'
import {useEffect} from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    };
  }
});

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to show notifications has not been granted.");
      }
/*      const pushTokenData = await  Notifications.getExpoPushTokenAsync();
      console.log(pushTokenData);

      if(Platform.OS === 'android'){
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT
        })
      }*/
    })();
  }, []);

  useEffect(() => {
   const subscription1 =  Notifications.addNotificationReceivedListener((notification) => {
      console.log('NOTIFICATION RECIVED');
      console.log(notification);
      const userName = notification.request.content.data.userName;
      console.log(userName)
    });

   const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
     console.log('NOTIFICATION RESPONSE RECIVED');
     console.log(response);
     const userName = response.notification.request.content.data.userName;
     console.log(userName)
   });

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { userName: 'Max' }
      },
      trigger: { seconds: 2 },
    });
  }
  return (
    <View style={styles.container}>
      <Button
          title="Press to schedule a notification"
          onPress={async () => {
            await schedulePushNotification();
          }}
      />
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

