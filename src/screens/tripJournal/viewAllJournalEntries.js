import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import colors from "../styles/colors";

const ViewAllJournalEntries = () => {
	const selectedMode = colors['light'];

	const styles = StyleSheet.create({
		mainContainer: {
			backgroundColor: selectedMode.background,
			height: '100%',
			width: '100%'
		}
	})
	return (
		<SafeAreaView style={styles.mainContainer}>
			<ScrollView>

			</ScrollView>
		</SafeAreaView>
)
}

export default ViewAllJournalEntries;