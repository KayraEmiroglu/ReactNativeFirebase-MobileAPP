import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PrivacyPolicyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
      diam sed ex rutrum, eu lacinia turpis mattis. Mauris eget turpis odio.
      Fusce scelerisque est sit amet ex tincidunt, in pellentesque ligula
      posuere. Donec iaculis lorem eu mi volutpat, at malesuada nisl finibus.
      Duis quis mi malesuada, pharetra est sit amet, ultrices sem. Sed sed
      mauris lectus. Sed eget leo et ligula iaculis interdum eu in felis. Morbi
      consectetur purus vitae enim feugiat feugiat. Nam placerat mauris at nisi
      iaculis, in euismod velit tincidunt. Morbi euismod ipsum nec lacus
      convallis, id iaculis nisl faucibus. Vivamus dapibus, ligula a egestas
      cursus, justo nunc egestas ipsum, a lobortis turpis nisi vitae urna. Nunc
      feugiat leo lectus, ac tincidunt mi aliquet sed.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default PrivacyPolicyScreen;
