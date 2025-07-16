# TraveMapper

This app has functionality similar to Google Maps, where the user can set a starting point and destination, and then the different routes will be displayed on the map embedded into the web page.

This application is the project assignment and belongs to the API chapter of the HackYourFuture curriculum.

The application uses:

- Google Places API to provide real-time location suggestions as the user types.
- Maps Embed API to show the map with the route between the origin and destination points.

It demonstrates how to access an API from the front-end and how you might handle errors in a user-friendly way.

## Getting Started

### Local Setup

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
#1 Clone this repository (alternatively, just download and unpack the file archive)
$ git clone https://github.com/YaroslavKazeev/TravelMapper.git

#2 Go into the repository
$ cd TravelMapper

#3 Install Node.js if not installed globally
$ npm install
```

#4 Put the env.js file with the Google API key into the root directory of the app

#5 Open `index.html` in your web browser

## Running the App

### What You'll See

- Two text input fields for the starting point and destination location names.
- Clickable suggestion of the location names as soon as the user makes input.
- The placeholder with the picture of the map will be replaced with the embedded Google map when the user clicks the "Go" button.
- Several routes are shown on the map.
- Error handling when requests fail

> **Note**: This app uses the public Google APIs, which has rate limits for unauthenticated requests.

## Code Architecture

The folder structure as used in this repo is similar to the one mostly used in REACT-based projects:

```text
public\
src\
└── pages\
└── util\
└── views\
└── app.js
└── constants.js
index.html
```

This application follows the **Page/View/State Model**. This architecture separates concerns by dividing the application into three main components: Page, View, and State. Each component has its own responsibilities, which makes the code easier to maintain and understand.

At the highest root level, there are files and folders for project configuration and documentation. Only the native application components are displayed in the code architecture tree above. Each of these folders has its own README file. The entry point is the index.html file, which downloads the application to the browser.

Some files and folders belong to third-party software used in the project. For example, package.json defines Node libraries.js; hidden folders configure Git, GitHub client, VSC extensions, etc.
