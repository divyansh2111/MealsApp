import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderButton = ({ onPress, icon, color }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.button}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  button: {
    opacity: 0.75,
  },
});
