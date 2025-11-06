import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavbarTop from "./NavbarTop";
import Navbar from './Navbar';

export default function WorkoutRecommendations({ navigation }) {
    return (
        <View style={{flex:1}}>
            <NavbarTop navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.title}>Workout Recommendations</Text>
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