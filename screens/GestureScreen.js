import React from 'react';
import { View,  StyleSheet} from 'react-native';

import ImgPicker from '../components/ImageSelector';

const GestureScreen = props => {
    return (
        <View style={styles.screen}>

           <ImgPicker />
          
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

export default GestureScreen;
