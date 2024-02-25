// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>This is the Home Screen</Text>
            <Button
                title="Go to Detail"
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
    );
}

export default HomeScreen;
