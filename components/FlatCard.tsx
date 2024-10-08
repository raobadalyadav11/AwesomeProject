import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View >
                    <Text style={styles.headingText}>FlatCard</Text>
                    <View style={styles.container}>
                        <View style={[styles.card, styles.cardOne]}>
                            <Text>Red</Text>
                        </View>
                        <View style={[styles.card, styles.cardTwo]}>
                            <Text>Green</Text>
                        </View>
                        <View style={[styles.card, styles.cardThree]}>
                            <Text>Blue</Text>
                        </View>

                        <View style={[styles.card, styles.cardOne]}>
                            <Text>Red</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FlatCard

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: "row",
       
    },
    headingText: {
        fontSize: 30,
        fontFamily: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        height: 100,
        width: 100,
        margin: 8,
        borderRadius: 10

    },
    cardOne: {
        backgroundColor: "red"
    },
    cardTwo: {
        backgroundColor: "green"
    },
    cardThree: {
        backgroundColor: "blue"
    }

})