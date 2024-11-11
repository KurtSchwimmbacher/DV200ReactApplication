![ClearView Header Image](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/Adventurer's_Almanac_Banner.png)

- - - -

# About Adventurer's Almanac

Adventurer's Almanac is a React Application that makes use of the Chart.js library and the Dnd 5e API to take data relating to dungeons and dragons classes and display statistics about those classes compared to each other on the Compare Page and how the class changes as it levels up on the Timeline Page.

## Built With
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)](https://react.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
[![ReactBootstrap](https://img.shields.io/badge/ReactBootStrap-41E0FD?style=for-the-badge&logo=reactbootstrap&logoColor=black)](https://react-bootstrap.netlify.app/)
[![ReactRouter](https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white)](https://reactrouter.com/en/main)
[![ChartJS](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=Chart.js&logoColor=white)](https://www.chartjs.org/)

### API: https://5e-bits.github.io/docs/api

## How To Install
Prerequisites
```
Node.js (version 20.18.0 or later)
```
```
Git or Github
```
```
A code editor (e.g., Visual Studio Code, Sublime Text)
```


Step 1: Clone the Repository
```
git clone https://github.com/KurtSchwimmbacher/DV200ReactApplication.git
```
Step 2:  Install frontend dependencies in Terminal
```
cd dndstats
```
```
npm install( axios, Chart.js, react-bootsrap, react-chartjs-2, react-router )
```
Step 3: Start the server in the Terminal
```
npm start
``` 


## Features

| Page                  | Description                                                              |
| --------------------- | --------------------------------------------------------------           |
| Home Page             | - Highlights the other functionality of the app and data used            |
|                       | - Links to other pages of the app and the API used                       |
| Compare Page          | - Allows users to select 2 different Dungeons and Dragons classes        |
|                       | - Shows comparitive data between the two chosen classes                  |
|                       | - Allows Users to change the levels of the chosen classes on select data |
| Timeline Page         | - Allows Users to select a single Dungeons and Dragons class             |
|                       | - Allows Users to select a field to be shown on the timeline graph       |
|                       | - Shows Users a progress of chosen data set across the classes' levels   |
  

# UI Design
### Home Page
![Home Page](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/UI_Designs/UI_Design_Dashboard.png)

### Compare Page
![Compare Page](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/UI_Designs/UI_Design_Compare_1.png)
![Compare Page](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/UI_Designs/UI_Design_Compare_2.png)
![Compare Page](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/UI_Designs/UI_Design_Compare_3.png)
![Compare Page](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/UI_Designs/UI_Design_Compare_4.png)
![Compare Page](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/UI_Designs/UI_Design_Compare_5.png)

### Timeline Page
![Timeline Page](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/UI_Designs/UI_Design_Timeline_1.png)
![Timeline Page](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/UI_Designs/UI_Design_Timeline_2.png)
![Timeline Page](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/UI_Designs/UI_Design_Timeline_3.png)

## Development Process

### Highlights
* UI that is reminiscient of DNDBeyond - Dungeons and Dragons official website 
* Bento Box layout to lean into the dashboard feel
* Custom Cursor and other imagery to lean into Adventure / D&D feel

### Challenges
* Having the Select Class Butttons on the Compare Page reflect the image of the selected class posed to be difficult
* Curating the graphs to show data in a coherent way involved a lot of planning and data manipulation to get correct

## Future Implementations
* Add Data of D&D based games such as Baldurs Gate 3, Solasta, Divinity etc.
* Improving the Timeline UI to match the UI of the rest of the Page more cohesively

## Technical Docoments


## Mockups
### Home Page Mockup
![Home Mockup](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/Mockups/Mockup_Dashboard.png)

### Compare Page Mockup
![Compare Mockup](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/Mockups/Mockup_Compare.png)

### Timeline Page Mockup
![Timeline Mockup](https://github.com/KurtSchwimmbacher/DV200ReactApplication/blob/main/dndstats/src/assets/ReadMeAssets/Mockups/Mockup_Timeline.png)

## Demonstration
https://drive.google.com/file/d/1-5WoQzsqvYWvj98kGJeHJ21AYchJlkYP/view?usp=sharing

### License
[MIT](LICENSE) © Kurt Schwimmbacher

### Author
Kurt Schwimmbacher - 231002@virtualwindow.co.za

### Contribution
In order to contribute to this project, clone the project according the instructions layed out above and create a new branch.

