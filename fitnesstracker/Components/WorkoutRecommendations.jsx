import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform, StatusBar } from "react-native";
import NavbarTop from "./NavbarTop";
import Navbar from './Navbar';

/**
 * WorkoutRecommendations
 *
 * Top-level functional React component that renders a screen listing workout plans.
 * - Exports a default React component function for use with React Navigation or other routing.
 * - Accepts an optional "navigation" prop. When present, navigation.navigate is used to change screens.
 * - All interactive elements call console.log when navigation is not provided so the component remains testable.
 */

/* Static placeholder dataset representing workout plans.
   - Each item has an id (unique key), planName (string), workoutType (array of strings), and description (string).
   - The array shape mirrors typical backend records and is easy to replace with fetched data.
*/
const PLANS = [
  {
    id: "plan_full_body",
    planName: "Full Body Routine",
    workoutType: ["Full Body"],
    description:
      "Full-body sessions each workout — good for frequency and general conditioning.",
  },
  {
    id: "plan_core_focus",
    planName: "Core Focused",
    workoutType: ["Core", "Stability"],
    description:
      "Short sessions that prioritize core stability, posture, and accessory strength.",
  },
  {
    id: "plan_push_pull_legs",
    planName: "Push / Pull / Legs",
    workoutType: ["Push", "Pull", "Legs"],
    description:
      "A 3-day split emphasizing compound lifts for balanced development.",
  },
  {
    id: "plan_leg_split",
    planName: "Leg Split",
    workoutType: ["Legs"],
    description:
      "Part of the push/pull/leg split workout routine focused on quad and hamstring strength.",
  },
];

/**
 * Component function
 * - Receives props; only navigation is used by this component, but more props can be accepted without changes.
 * - Returns the full layout tree that composes the screen.
 */
export default function WorkoutRecommendations({ navigation }) {
  /**
   * renderPlan
   * - Render callback used by FlatList for each plan item.
   * - Receives an object with "item" corresponding to one entry from PLANS.
   * - Produces a card-like layout containing title, types, description, and two action buttons.
   *
   * Implementation details:
   * - planName is displayed prominently as the card title.
   * - workoutType is an array; it's rendered via join(", ") to produce a short tag-like string.
   * - description is a multi-line summary explaining the plan.
   * - The "View" button triggers navigation to a detail screen or logs the action.
   * - The "Add to Log" button triggers navigation to a manager screen or logs the action.
   */
  const renderPlan = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.planTitle}>{item.planName}</Text>
        <Text style={styles.planTypes}>{item.workoutType.join(", ")}</Text>
      </View>

      <Text style={styles.planDescription}>{item.description}</Text>

      <View style={styles.cardActions}>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={() =>
            navigation
              ? navigation.navigate("WorkoutDetail", {
                  planId: item.id,
                  planName: item.planName,
                })
              : console.log("View plan detail", item.planName)
          }
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={`View details for ${item.planName}`}
        >
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
    
        <TouchableOpacity //giving add to log connection to database
  style={[styles.button, styles.secondaryButton]}
  onPress={async () => {
    try {
      const response = await fetch("http://localhost:5000/api/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planName: item.planName,
          workoutType: item.workoutType,   // array
          description: item.description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Failed:", data);
        alert("Failed to add workout to log.");
        return;
      }

      console.log("Saved:", data);
      alert(`${item.planName} added to workout log!`);

    } catch (error) {
      console.error("Network error:", error);
      alert("Could not connect to backend");
    }
  }}
  accessible={true}
  accessibilityRole="button"
  accessibilityLabel={`Add ${item.planName} to workout log`}
>
  <Text style={styles.buttonText}>Add to Log</Text>
</TouchableOpacity>
      </View>
    </View>
  );

  /**
   * Main render return
   * - Root container View holds title, subtitle, scrollable list, and a fixed bottom overlay box.
   * - FlatList is given flex: 1 to occupy available vertical space between header and overlay.
   * - The overlay box is absolutely positioned so it remains fixed while the list scrolls underneath.
   */
  return (
    <View style={{flex:1}}>
      <NavbarTop navigation={navigation} />
    <View style={styles.container}>
      <Text style={styles.title}>Workout Recommendations</Text>

      <Text style={styles.subtitle}>
        Catalog of preloaded plans. Select a plan to view details or add it to
        your workout log.
      </Text>

      <FlatList
        data={PLANS} // data source for the list
        keyExtractor={(p) => p.id} // unique key extractor to optimize list rendering
        renderItem={renderPlan} // item renderer function defined above
        contentContainerStyle={styles.listContent} // padding for list content
        style={styles.list} // style that constrains list area (flex: 1)
        showsVerticalScrollIndicator={false} // hide vertical scrollbar for cleaner UI
      />

      {/* Bottom overlay box that contains the centered create button.
          The overlay uses absolute positioning so it floats above the list content.
          The inner button maintains the rounded rectangle appearance and color scheme.
      */}
      <View style={styles.bottomBox} pointerEvents="box-none">
        {/* TouchableOpacity here is the actionable element within the overlay.
            pointerEvents on the parent ensures touches pass to this button while items
            under the overlay are visually obscured.
        */}
        <TouchableOpacity
          style={styles.createButtonInner}
          onPress={() =>
            navigation ? navigation.navigate("WorkoutCreate") : console.log("Create custom plan")
          }
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Create a custom workout plan"
        >
          <Text style={styles.buttonText}>Create Custom Plan</Text>
        </TouchableOpacity>
      </View>
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
