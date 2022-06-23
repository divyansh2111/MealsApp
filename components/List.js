import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
  return data.map((item) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.listText}>{item}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e9bfbf",
  },
  listText: {
    color: "#622626",
    textAlign: "center",
  },
});
