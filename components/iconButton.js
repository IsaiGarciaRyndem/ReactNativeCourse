import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons';

function IconButton({onPress, icon, color, size}) {
    return (
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    );
}
export default IconButton;
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
});
