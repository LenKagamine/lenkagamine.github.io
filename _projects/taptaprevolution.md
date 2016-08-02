---
layout: project
title: Tap Tap Revolution
description: Console Rhythm Game
tools: C++
github: Tap-Tap-Revolution
date: 2015-06-19
---

### About

Tap Tap Revolution is a rhythm game written in C++ without any special graphics. Instead, it uses the standard C++ console for all graphics purposes.

This was my summative project for the Grade 10 Computer Engineering (TEJ3M) course. Originally, the game was built with a controller with five buttons for input, rather than using a keyboard. The controller also had two seven segment displays, which showed the current score. It was connected to the computer via the now superseded parallel port. The current code is a port of the original game for the parallel port controller.

The game will detect a song if there is a .mp3 file and a .txt file with the same name in the songs directory.

I also had a separate program that would generate a song data file. However, both the executable and the source have since been lost.

### Gameplay

- When selecting a song, use w and s to move the cursor up and down (indicated by `->`).
- Alternatively, press the number next to the desired option.
- The five columns correspond to the keys d, f, spacebar, j, and k. They are defined in Game.cpp.
- When the notes start falling, press the correct key to play the note (+1 point). If the key isn't pressed quickly enough, the note will be missed (-1 point).

### Development

Game.cpp handles the entire loading and playing portion of the game. All of the game's mechanics, including parsing the data files and drawing the notes and the grid, happen here.

Utils.cpp is a group of utility methods, such as searching for songs, adjusting the console's size, and changing colour.

Main.cpp is where the remainder of the code lies. The intro and all the menus are set here.

To compile: Tap Tap Revolution makes a lot of Windows API calls to manipulate the console size, change colour, etc. It plays music using the MCI command `mciSendString()`, which requires `-lwinmm`.
