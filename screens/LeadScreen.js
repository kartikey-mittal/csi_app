import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, Card } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;

const DATA = [
  { id: '1', title: 'Name', subtitle: 'Position', imageUrl: 'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg' },
  { id: '2', title: 'Name', subtitle: 'Position', imageUrl: 'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg' },
  { id: '3', title: 'Name', subtitle: 'Position', imageUrl: 'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg' },
  { id: '4', title: 'Name', subtitle: 'Position', imageUrl: 'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg' },
  { id: '5', title: 'Name', subtitle: 'Position', imageUrl: 'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg' },
  { id: '6', title: 'Name', subtitle: 'Position', imageUrl: 'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg' },
  // Add more data as needed
];

const LeadScreen = () => {
  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.center}>
      <Text style={styles.header}>Leads</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const cardWidth = 1 * windowWidth / 2 - 20; // 20 is for margin between cards
const imageSize = cardWidth - 20; // Adjust the image size as needed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#031830'
  },
  header: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 5,
    fontWeight:800,
    color:'white'
    
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    justifyContent: 'center',
    paddingBottom:50
  },
  card: {
    margin: 10,
    width: cardWidth,
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2, // To make the image circular
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});

export default LeadScreen;
