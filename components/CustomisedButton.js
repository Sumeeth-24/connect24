import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const CustomisedButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2196F3',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginBottom: 25
        },
        buttonText: {
            color: 'white',
            fontFamily: 'open-sans',
            fontSize: 18,
            marginLeft: 100
        }
});

export default CustomisedButton;
