import React, { useState} from 'react';
import { View,  StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Customizedbutton from '../components/Customizedbutton';


const ImgPicker = props => {
 
 // const [pickedImage, setPickedImage] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL, 
      Permissions.CAMERA
      );
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
        return;
    }
     ImagePicker.launchCameraAsync()
    //   allowsEditing: true,
    //   aspect: [16, 9],
    //   quality: 0.5
    // });

    // setPickedImage(image.uri);
    // props.onImageTaken(image.uri);
  };

  return (
    <View style={styles.screen}>
     
     <Customizedbutton onPress={takeImageHandler}>
          Open Camera
     </Customizedbutton>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ImgPicker;