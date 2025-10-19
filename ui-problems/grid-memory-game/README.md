// In this coding challenge, the candidate needs to build a memory game where user needs to reveal the auto-hide boxes, remember the color, and select the matching ones.

// Functional Requirements
// Game Component Requirements:

// Total Number of Boxes:

// The main Game component should accept a total number of boxes.
// The Game board should always have 4 columns and rows should be adjusted based on that.
// The total number of boxes must always be divisible by 4 (column length).
// Color Assignment:

// The total number of unique colors should be exactly half the number of boxes.
// Each color should be assigned to two boxes, forming pairs.
// Initial State:

// All boxes should initially have a white background color.
// Revealing Colors:

// When a user clicks on a box, the box's assigned color should be revealed.
// If the user clicks on a second box and the colors do not match, both boxes should reset to a white background after 400 ms.
// If the colors match, the pair should remain revealed for the rest of the game.
// Round Tracking:

// Every pair selection (whether successful or unsuccessful) should count as one round.
// At the end of the game, the user should be informed of the total number of rounds taken to complete the game.
// Reset Functionality:

// The game should include a reset button.
// The reset button should be enabled only at the end of the game, allowing the user to reset and restart the game.

DEVtools

// Create a react app
// Create a color creating util
// Create cell component that takes color only
// Craete an. input for user selection for taking no of cells (should be divisible by 4 else error)
// loop over the items use CSS flex to show 4 items per row (25% of screen * 4 ) then wrap so that next 4 items is in next line
// onclick of cell reveal color of frist cell pass to parent selected color
// on click of second cell pass color to parent 
// if match keep color displayed
// if colors do not match rest the cell
// for round count every click and divide by 2 to get rounds

