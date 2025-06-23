import { View, Text, StyleSheet } from "react-native";

export function ErrorFallbackText() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.description}>
        An unexpected error occurred. The team is investigating this issue.
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 12,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});