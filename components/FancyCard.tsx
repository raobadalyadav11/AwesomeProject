import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View >
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardEvaluted]}>
                <Image
                    source={require('../public/second.png')}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Party Show</Text>
                    <Text style={styles.cardLabel}>Pink Party</Text>
                    <Text style={styles.cardDes} >Hey is the Pink Party for the college related function like know about this why but know about this party</Text>
                    <Text style={styles.cardTime}>12 min later</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   
    headingText: {
        fontSize: 30,
        fontFamily: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardEvaluted: {
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage: {
        height: 180,
        // width:400,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        resizeMode:'cover',
        backgroundColor:'white'
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: "orange",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 6

    },
    cardLabel: {
        color: "grey",
        marginBottom: 6,
        fontSize: 15
    },
    cardDes: {
        color: "black",
        fontSize: 16,
        flexShrink: 1,
        marginTop: 6
    },
    cardTime: {
        color: "yellow",
        fontSize:16,
        fontWeight:'black'
    }
})