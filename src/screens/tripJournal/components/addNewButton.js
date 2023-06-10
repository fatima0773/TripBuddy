import { StyleSheet, Text, TouchableOpacity } from "react-native"
import colors from "../../styles/colors";
const AddNewButton = ({handlePress, navigation}) => {
	const selectedMode = colors['light'];

	const styles = StyleSheet.create({
		addButton: {
			backgroundColor: selectedMode.primaryLight, 
			borderRadius: 100, 
			justifyContent: 'center',
			alignItems: 'center', 
			position: 'absolute', 
			bottom: 15,
			right: 15,
			zIndex: 10
		}, 
		buttonText: {
			fontSize: 15,
			color: selectedMode.background,
			fontFamily: 'Poppins-Bold', 
			paddingVertical: 10, 
			paddingHorizontal: 20
		}
	})
	return (
		<TouchableOpacity style={styles.addButton}
		onPress={handlePress}
		>
			<Text style={styles.buttonText}>
				Add New Note
			</Text>
		</TouchableOpacity>
	)
}

export default AddNewButton;