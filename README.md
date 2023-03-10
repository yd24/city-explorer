# City Explorer

[Live site](https://incomparable-mermaid-7d9342.netlify.app/)

**Author**: Daniel Yoon

**Version**: 1.7.0

## Overview
This application allows users to explore areas they haven't been to before. Input a location and see a map and coordinates for the area!


## Getting Started
* First, clone this repository from Github and ensure that node and npm are installed.
* Afterwards, run npm install to install the dependencies on package.json.
* Rename the .env.sample file to .env and set REACT_APP_LOCATIONIQ_API_KEY= to your API Key from LocationIQ.
* Run npm start to run the app!

## Architecture
This application uses React to render the webpage, React-Bootstrap for styling UI elements, and LocationIQ API for obtaining geodata. 

## Change Log

* 03-06-2023 2:35pm - Application now displays latitude and longitude for a searched location.
* 03-06-2023 9:00pm - Application now displays a static map for the searched location.
* 03-06-2023 10:00pm - Application now displays errors for invalid requests.
* 03-07-2023 11:00pm - Updated visual layout for application.
* 03-07-2023 4:30pm - Application now displays forecast data for the location, if available.
* 03-07-2023 9:31pm - Application now display alerts for errors from server requests.
* 03-09-2023 11:30pm - Application now displays movie data related to the location, if available.
* 03-10-2023 10:00pm - Refactor movie component and handle errors better

## Credit and Collaborations
Developed by: Daniel Yoon

Background image from [Deva Darshan on Unsplash](https://unsplash.com/photos/v0zwX1aPlHI)

**WRRC Diagram made w/ Trey Young**

https://docs.google.com/drawings/d/1Tkxp3Tv0wyyU8MDvq5erv-_a8AJENkYlkxesk4n3XBg/edit?usp=sharing


## Feature #1 Locations

* Estimate of time needed to complete: 30 min

* Start time: 2:15pm

* Finish time: 2:35pm

* Actual time needed to complete: 20 min

## Feature #2 Map

* Estimate of time needed to complete: 30 min

* Start time: 2:35pm, 8:00pm

* Finish time: 9:00pm

* Actual time needed to complete: 1 hour

## Feature #3 Error Message

* Estimate of time needed to complete: 15 min

* Start time: 9:00pm

* Finish time: 10:00pm

* Actual time needed to complete: 1 hour

## Feature #4 Forecast Data

* Estimate of time needed to complete: 1 hour

* Start time: 2:30pm

* Finish time: 4:30pm

* Actual time needed to complete: 2 hours

## Feature #4 Movie Data

* Estimate of time needed to complete: 1 hour

* Start time: 9:30pm

* Finish time: 11:30pm

* Actual time needed to complete: 2 hours
