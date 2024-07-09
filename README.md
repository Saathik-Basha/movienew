# :movie_camera: CritHub App :movie_camera:
### Promineo Tech Front End Software Development Bootcamp Project
### :computer: [Demo Site](https://main.d36wjzmwy6fosf.amplifyapp.com/)[*]
### :movie_camera: [Demo Video](https://youtu.be/_2VNm0B31OY)


## :notebook: Description

##### The CritHub app is a CRUD app which allows users to add reviews to a list of movies displayed on a grid of cards.

The user can use a form found on each of the movie cards to select a star rating, enter their name, and write a review that will be rendered onto the card once the 'Submit' button is clicked. Reviews created appear by mutating state.

##### This app was created with React as a project for the Front End Software Developer bootcamp program at [Promineo Tech](https://promineotech.com/).

## :star: Features

##### Movie Card
* All of the movie objects stored in an array are rendered in a grid of cards.
* Each card renders the movie poster image, the title, director name(s), release year, runtime, genre badges, and age rating.

##### Review Form
* The review form is rendered on the movie card below the movie's metadata.
* The review form features a star rating component which animates as the user selects a star rating.
* The form takes the star rating, user name, and typed review.

##### Rendered Reviews
* Once the 'Submit' button is clicked, the reviews are rendered at the bottom of the card in a scrollable div.  

## :rocket: How to Use

### Demo

Access a demo of this app [here](https://main.d36wjzmwy6fosf.amplifyapp.com/).

### `npm start`

If running on your local host, run `npm install`, then `npm start`.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## :jigsaw: Technologies
This app was created using React. [Bootstrap](https://getbootstrap.com/) and [React-Bootstrap](https://react-bootstrap.github.io/) were used as syling libraries. The demo of this app was deployed using [AWS Amplify](https://aws.amazon.com/amplify/).

[*] Note: Unfortunately the header images are not displaying properly in the demo. However, the rest of the app is functional, otherwise.
