// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function DetailScreen({ navigation }) {
    return (
        <View>
            <Text>This is the Detail Screen</Text>
            <Button
                title="Go to Home Screen"
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
    );
}

export default DetailScreen;
