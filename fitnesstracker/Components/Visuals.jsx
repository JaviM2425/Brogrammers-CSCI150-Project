import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from './Navbar';

export default function Visuals({ navigation }) {
    return (
        <View style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.title}>Visuals</Text>
            </View>
            <Navbar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});