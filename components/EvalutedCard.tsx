import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EvalutedCard() {
    return (
        <View>
            <Text style={styles.headingText}>EvalutedCard</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card,styles.cardEvaluted]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card,styles.cardEvaluted]}>
                    <Text>To</Text>
                </View>
                <View style={[styles.card,styles.cardEvaluted]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card,styles.cardEvaluted]}>
                    <Text>Me</Text>
                </View>
                <View style={[styles.card,styles.cardEvaluted]}>
                    <Text>More ..</Text>
                </View>
                <View style={[styles.card,styles.cardEvaluted]}>
                    <Text>😁😁</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:8
    },
    headingText: {
        fontSize: 30,
        fontFamily: 'bold',
        paddingHorizontal: 8,
    },
    card:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:100,
        margin:8,
        borderRadius:10,

    },
    cardEvaluted:{
        backgroundColor:"#161373"
    }
})