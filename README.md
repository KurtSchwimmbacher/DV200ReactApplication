# Adventurer's Almanac - a Dungeons and Dragons themed React App

## Video Explanation
- The link below is to google drive version of a recording where I showcase and explain some of the key features of this website
- https://drive.google.com/file/d/1-5WoQzsqvYWvj98kGJeHJ21AYchJlkYP/view?usp=sharing

## Overview

Adventurer's Almanac is a React Application that makes use of the Chart.js library and the Dnd 5e API to take data relating to dungeons and dragons classes and display statistics about those classes compared to each other on the Compare Page and how the class changes as it levels up on the Timeline Page.

## Features

- **Dashboard**: Highlights the features of the wesbite graphically
- **Compare**: Allows for the comparison of two classes selected by the users and displays data using chart. in a selection of radar charts, bar graphs and donut charts
- **Timeline**: Allows for the viewing of the statistics of one class as it levels up. The data is shown in a Line Graph ranging from level 1 to level 20. 

## Setup and Installation

1. **Clone the Repository**: 
git clone https://github.com/KurtSchwimmbacher/DV200ReactApplication.git

2. **Frontend Setup**:
- Navigate to the `dndstats` directory:
  ```
  cd DV200ReactApplicatoin/dndstats
  ```
- Install dependencies:
  ```
  npm install axios
  npm install react-bootstrap
  npm install chart.js
  npm install react-router-dom
  ```
- Start the backend server:
  ```
  npm start
  ```


3. **Open the Application**:
- Once the frontend servers is running, open your browser and navigate to `http://localhost:3000` to access Adventurer's Almanac.

## Technologies Used
- React
- Axios
- React Router
- React Bootstrap
- Chart.js
- Dnd 5e API
- **Styling**:
- CSS (with optional frameworks like Bootstrap or Material-UI)

## Usage

1. **Explore Compare Page**:
- Use the modals on the Compare Page to to select two classes to compare.
- Adjust the level slider to control which levels the classes being compared should be.
- Browse displayed data comparing two classes.

2. **Explore Timeline Page**:
- Use the dropdown to select a single class to view a timeline off.
- Use the secondary dropdown to select the field to be viewed over levels , such as as healh over levels.
- View the displayed data over levels 1 to 20 on the timeline graph displayed.

## Visual Designs
- All graphs used on this website are renderd by chart.js
- The class illustrations used for the compare page and the carousel on the dashboard page were edited versions of instagram user yaniir's (https://www.instagram.com/_yaniir_/) class illustrations
- The icons used in this 
## Credits

This project was developed by Kurt Schwimmbacher as an assignment for Open Window DV200. 

## License

This project is licensed under the [MIT License](LICENSE).

