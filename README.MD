# Boulder Peak

## Overview

Workout Tracker is a web application built to help users track their workouts. Its main goal is to enable people to log the exercises they perform, the weights used, and the number of repetitions. By doing so, users can continuously monitor their progress and ensure they’re increasing the load on their muscles, keeping their workouts on track for improvement.

## Table of Contents

- [Website](#website)
- [Features](#features)
- [Backend](#backend)
- [Frontend](#frontend)
- [License](#license)

## Website

You can try the application live at: [https://boulder-peak.netlify.app/](https://boulder-peak.netlify.app/).  
We suggest using a mobile device to visit the application, as it was designed specifically for that.

## Features

 - Track workouts and exercises performed.
 - Display useful statistics, such as one-rep max or total weight lifted during a workout.
 - View exercise logs and history to track progress across different muscle groups or exercises.
 - Allow users to create and reuse various workout plans.
 - Provide a rest timer to help users manage proper rest times between sets.

## Backend

Simple Flask backend with almost RESTful APIs for user authentication, workout tracking, etc.

### Setup

1. Navigate to the `server` directory:
    ```sh
    cd server
    ```

2. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required dependencies:
    ```sh
    pip install -r requirements.txt
    ```

6. Run the server:
    ```sh
    flask --app flaskr run --host=0.0.0.0
    ```

### Docker

You can also run the backend using Docker:

1. Build the Docker image:
    ```sh
    docker build -t flaskr-app .
    ```

2. Run the Docker container:
    ```sh
    docker run -p 5000:5000 flaskr-app
    ```

## Frontend

A simple and elegant frontend built with Svelte and Tailwind CSS.

### Setup

1. Navigate to the [svelte-client](http://_vscodecontentref_/1) directory:
    ```sh
    cd svelte-client
    ```

2. Install the required dependencies:
    ```sh
    npm install
    ```

3. Run the development server:
    ```sh
    npm start
    ```

## License

This project is licensed under the **MIT License**.
