import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View style={styles.container}>
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
    container:{
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    headingText: {
        fontSize: 30,
        fontFamily: 'bold',
        paddingHorizontal: 8
    },
    card: {},
    cardEvaluted: {},
    cardImage: {
        height: 180,
        width:400,
        // resizeMode:'cover'
    },
    cardBody: {},
    cardTitle:{},
    cardLabel:{
    },
    cardDes:{},
    cardTime:{

    }
})