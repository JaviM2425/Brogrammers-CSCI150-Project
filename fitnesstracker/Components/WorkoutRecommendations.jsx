import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavbarTop from "./NavbarTop";
import Navbar from './Navbar';

export default function WorkoutRecommendations({ navigation }) {
    return (
        <View style={{flex:1}}>
            <NavbarTop navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.title}>Workout Recommendations</Text>
            </View>
            <Navbar navigation={navigation} />
        </View>
    );
}

/**
 * Stylesheet
 * - All layout and visual properties are defined here using StyleSheet.create.
 * - Separating styles keeps the render function concise and avoids inline styles.
 * - Color variables are duplicated inline for clarity; extract to constants if reused broadly.
 */
const styles = StyleSheet.create({
  /* Root container:
     - flex: 1 makes the component expand to fill its parent (typical screen behavior).
     - backgroundColor is set to white in hex with full alpha.
     - alignItems centers children horizontally.
     - paddingTop accounts for Android status bar height when present to avoid overlap.
     - horizontal padding provides consistent left/right spacing.
  */
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 12 : 20,
    paddingHorizontal: 20,
  },

  /* Title text:
     - Large font size and bold weight for visual hierarchy.
     - Color uses a medium blue to be consistent with actionable elements.
     - marginBottom creates space between the title and subtitle.
  */
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 6,
  },

  /* Subtitle text:
     - Smaller than title, same color to keep consistent branding.
     - width: "100%" keeps wrapping predictable within container padding.
     - textAlign center ensures the text block is centered visually.
  */
  subtitle: {
    fontSize: 14,
    color: "#2196F3",
    textAlign: "center",
    marginBottom: 12,
    width: "100%",
  },

  /* FlatList styles:
     - list uses flex: 1 so it expands to fill available space but leaves room for the overlay.
     - contentContainerStyle adds bottom padding equal to or greater than the overlay height so list items
       can scroll above the overlay without being permanently hidden.
  */
  list: {
    width: "100%",
    flex: 1,
  },
  listContent: {
    paddingBottom: 140,
    paddingTop: 4,
  },

  /* Card style for individual plan items:
     - White background, rounded corners, and padding provide a card appearance.
     - marginBottom separates cards within the list.
     - shadow/elevation provides subtle depth on both iOS (shadow*) and Android (elevation).
     - borderColor and borderWidth create a light outline to distinguish the card from background.
  */
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#e6f0fb",
  },

  /* Card header:
     - Row layout to place title and type tags on opposite ends.
     - justifyContent: "space-between" aligns them at the edges.
  */
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  /* Plan title and tags:
     - planTitle uses heavier weight and larger font to emphasize the plan name.
     - planTypes uses the same blue as the title color and a smaller font to resemble a tag.
  */
  planTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },
  planTypes: {
    fontSize: 12,
    color: "#2196F3",
    fontWeight: "600",
  },

  /* Plan description:
     - Body copy for the card, readable font size and darker gray color for contrast.
  */
  planDescription: {
    fontSize: 14,
    color: "#333",
    marginBottom: 12,
  },

  /* Card action buttons container:
     - Row layout with space between gives each button room to expand evenly.
     - Buttons themselves use flex: 1 to share available horizontal space.
  */
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  /* Reusable button base:
     - flex: 1 ensures the two buttons split the available width.
     - padding and borderRadius create the rounded rectangle touch target.
     - marginHorizontal separates the two buttons visually.
  */
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 4,
  },

  /* Primary and secondary button colors:
     - primaryButton uses the blue color for primary actions.
     - secondaryButton uses a green color for secondary positive actions.
  */
  primaryButton: {
    backgroundColor: "#2196F3",
  },
  secondaryButton: {
    backgroundColor: "#4CAF50",
  },

  /* Bottom overlay box:
     - Absolutely positioned near the bottom with left/right offsets matching container padding.
     - borderRadius softens corners of the overlay box.
     - backgroundColor is solid white to create an opaque panel above list content.
     - shadow/elevation lifts the box visually above list items.
     - alignItems centers its children horizontally.
     - paddingVertical provides vertical breathing room within the box.
  */
  bottomBox: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 6,
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
  },

  /* Inner create button inside the overlay:
     - Width set to 80% of the overlay box to visually center and limit the button width.
     - backgroundColor uses the same blue as other primary actions.
     - paddingVertical improves touch target height.
     - borderRadius matches other rounded elements in the UI.
  */
  createButtonInner: {
    width: "80%",
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  /* Button text:
     - White color for contrast against primary/secondary button backgrounds.
     - Slightly bold weight and 16px size for legibility.
  */
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
