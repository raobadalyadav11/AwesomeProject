import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

export default function ActionCard() {
    function OpenWebsite(websiteUrl:string){
        Linking.openURL(websiteUrl);
    }
  return (
    <View>
        <Text style={styles.headingText}>Blog Card</Text>
    <View style={styles.card}>
      {/* Image section */}
      <Image
        style={styles.cardImage}
        source={require('../public/first.png')}
      />
      
      {/* Content Section */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>React Native Blog Card</Text>
        <Text style={styles.cardDescription}>
          This is a sample blog card designed using React Native. You can use this card to showcase articles, posts, or any other content on your mobile application.
        </Text>

        {/* Read More Button */}
        <TouchableOpacity style={styles.readMoreButton}>
          <Text onPress={(()=>OpenWebsite('https://www.google.com'))} style={styles.readMoreText}>Read More</Text>
          
        </TouchableOpacity>
      </View>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
    headingText:{
        color:'black',
        fontWeight:'bold',
        fontSize:30,
        paddingHorizontal:12
    },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Adds shadow effect on Android
    margin: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  readMoreButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  readMoreText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
