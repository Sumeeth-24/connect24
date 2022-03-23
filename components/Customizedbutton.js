import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const Customizedbutton = props => {
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
        backgroundColor: '#FFD700',
        paddingVertical: 12,
        paddingHorizontal: 30,
        marginTop: 300
        },

        buttonText: {
            color: 'white',
            fontFamily: 'open-sans',
            fontSize: 23
        }
});

export default Customizedbutton;
