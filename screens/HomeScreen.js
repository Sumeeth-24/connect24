import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomisedButton from '../components/CustomisedButton';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
           
           <CustomisedButton onPress={() => {
               props.navigation.navigate({routeName: 'Gesture'});
           }}>Sign</CustomisedButton>
           <CustomisedButton  onPress={() => {
                props.navigation.navigate({routeName: 'Talking'});
           }}>Speak</CustomisedButton>
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

export default HomeScreen;
