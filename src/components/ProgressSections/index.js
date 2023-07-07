import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Progress = () => {
  const colors = ["red", "pink", "green", "purple", "blue"];

  return (
    <View style={styles.progressContainer}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Dimensions</Text>

        <View style={styles.sectionTextContainer}>
          <View style={[styles.colorBar, { backgroundColor: colors[0] }]} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionText}>Area: 10 cm²</Text>
          </View>
        </View>

        <View style={styles.sectionTextContainer}>
          <View style={[styles.colorBar, { backgroundColor: colors[1] }]} />
          <View style={styles.textContainer}>
          <Text style={styles.sectionText}>Length: 5 cm</Text>
          </View>
        </View>

        <View style={styles.sectionTextContainer}>
          <View style={[styles.colorBar, { backgroundColor: colors[2] }]} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionText}>Width: 2 cm</Text>
          </View>
        </View>
      </View>


      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Depth</Text>

        <View style={styles.sectionTextContainer}>
          <View style={[styles.colorBar, { backgroundColor: colors[3] }]} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionText}>Depth max: 3 cm</Text>
          </View>
        </View>


        <View style={styles.sectionTextContainer}>
          <View style={[styles.colorBar, { backgroundColor: colors[4] }]} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionText}>Depth avg: 2 cm</Text>
          </View>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 25,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    width: "100%",
    elevation: 3,
  },
  textContainer: {
    flexDirection: "row",
    marginLeft: 5,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    marginRight: 5,
  },
  colorBar: {
    width: 10,
    height: 16,
    borderRadius: 2,
    marginRight: 5,
  },
});

export default Progress;
