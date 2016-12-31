---
layout: project
title: The Reckoner App
description: High School Newspaper App
tools: Android, Java, XML
link: https://play.google.com/store/apps/details?id=ca.thereckoner.thereckoner
date: 2015-08-9
---

### About

The Reckoner is Marc Garneau C. I.'s award-winning student-run newspaper. The Reckoner regularly publishes articles on its website at [thereckoner.ca](http://thereckoner.ca/), and also releases a bi-monthly printed newspaper. During my time there, I was the Director of Web Development of the Fifth Guard, in charge of all technological aspects such as maintaining the website. To start of my last year at high school, some staff members and I developing an Android app, so that users have access the newspaper's content with ease.

Although I have used Java before, this was my first time working in a mobile environment, and I found it interesting to learn what goes into make a mobile app, and seeing how it differs from what I've done before.

### Development

The app was developed using Android Studio from scratch. It retrieves data from the website using a Wordpress REST API, then parses the JSON data into articles. It also shows a notification whenever a new article is posted by checking periodically whether the latest post id on the web matches that of the app (locally stored every time the app is opened).

We went by a simple scrum system, accomplishing a small portion of the project every day. We set up a schedule for a three week time frame, so that we finish before the school year started. We split up into groups based on the different type of work to be done, such as programming, graphics, layout, and testing.

For the first week, we introduced ourselves to Android Studio and picked libraries and tools that we would be needing (the Wordpress API plugin and a Java JSON parser). On the coding side, we incrementally learned how to make certain modules, and creating small programs to test them, such as displaying HTML using Android WebView and handling HTTP requests. We designed the flow of the app, determining what pages will link to others, and laying down basic features.

The next week, we started making graphics, both for use in the app and on the Google Play Store.
