import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
    return (
        <View style={styles.header}>
            <View style={styles.primaryBox}>
                <Text style={styles.heading}>Rozvoz po Chebu</Text>
            </View>
            <View style={styles.invisibleWhiteBox} />
            <View style={styles.invisiblePurpleBox} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    header: {},
    primaryBox: {
        height: 200,
        width: "100%",
        backgroundColor: "#C00051",
        borderBottomRightRadius: 40,
    },
    invisibleWhiteBox: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
    },
    invisiblePurpleBox: {
        width: 50,
        height: 50,
        backgroundColor: "#C00051",
        position: "absolute",
        bottom: 0,
        zIndex: -1,
        elevation: -1,
    },
    heading: {
        color: "#fff",
        fontSize: 30,
        marginTop: 60,
        marginLeft: "7%",
        fontFamily: "RobotoSlab_400Regular",
    },
});
