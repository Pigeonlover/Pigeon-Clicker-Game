# Pigeon Clicker Game
---

## How the game works:
- You start the game with a stat of SPS (Seeds Per Second) of 1.
- When you click the pigeon, the seeds' amount will diminish (because you're 'feeding' the pigeon).
- After 2 seconds, the pigeon will 'poop', and your poop count will go up.
- Each upgrade in the shop costs a certain amount of poop. Every time you upgrade, your SPS will increase, as well as how much each of your mouse clicks is worth. The costs of the upgrades will also go up by certain percentages to keep the game challenging.
- The ultimate goal of this game is to collect as much pigeon poop as possible ^v^

---
---

## What did I achieve?
1) I really got into the appearance of the game and gridded whatever element I could grid, so everything would look like the idea I had in my mind. It was a lot of work, but I am very satisfied that it came out exactly as I envisioned.
2) I was able to ```fetch``` data from the API provided, and siplay that data on the DOM.
3) I was able to add shop upgrades, and for them to interact correctly with all the other variables and DOM elements as planned.
4) I added some simple animations to the pigeon image and the upgrade buttons, using CSS ```:active``` and ```scale```. When the user clicks them, the imae will become smaller then return to its original size, so the user gets some feedback each click. It should make the action more satisfying 😄.
5) The user's game stats are saved in their browser's local storage, so they can continue playing even after closing the game and won't lose their progress.
6) The SPS go up and update automatically each second, so the user doesn't need to do anything to keep accumulating seeds.
7) The game data saves every time the pigeon is clicked.

---

## What wasn't I happy with?

1) I made quite a big mistake: I just skim-read the assignment brief before starting to code the game. When I was pretty much done with it, I went back to read the brief in more detail to make sure I had everything in. That's when I saw that fetching some data from the provided API and using it for at least one upgrade was one of the basic requirements. It's my fault as all that time whilst I was making the game I thought it was just optional, so I made my game with completely custom upgrades... Anyways, I put the API code at the end of my JS file (commented out so the 'core' of my game doesn't get messed up with it) so at least it shows I know how to fetch API data and display them on the DOM. I sadly didn't have much time left, so I couldn't actually re-do it.
2) The game looks perfect on desktop... On mobile devices, not so much. I didn't have enough time for making different layouts, but in the future I want to make a ```@media query``` and re-organise the layout so it looks better on smaller screens. Also, one of my friends that play-tested the game said that on mobile, if you tap the pigeon too quickly, it will automatically zoom in and zoom out the screen - continuously. Which would be very annoying and break the rythm of the game. I need to find out if there's a way to disable that feature for a future update.
3) My original idea was for everything to be visible on the screen (so no scrolling), but I didn't manage to achieve that. It was very frustrating because I tried many ways and combinations, and it still didn't work. Maybe it was from using marging and paddings, but I am not exactly sure 😆. I think next time I'll make sure to use ```grid``` for spacing, too (by using thin columns and rows between elements), so I won't need to mess around with paddings and margins.

---

## Conclusion

I absolutely **loved** this assignment. I think you probably know by now, but my (small) coding experience is pretty much all from trying to make browser-based games. This assignment was simply perfect for me and I had a blast. I think I spent way too much time and energy on the CSS (all Friday was pretty much just me doing CSS for 5 hours...), and I don't know if I could have achieved the same look with something simpler, but I am very happy overall. I think this is the most 'complete' project to date I've ever done and I am very proud of myself. 
It was very satisfying to have everything we've learned until now (variables, objects, functions, setIntervals, etc...) come together in one.
In my excitement I have shared it with friends that play-tested it and I've received lots of compliments (yay!), but also lots of useful feedback. For example, as mentioned before, the issue with the mobile zooming, but also that the pop-out messages felt a bit annoying as they would pause the game completely and the user needs to click 'Ok' to make it go away. I was suggested to get rid of those and maybe add a banner that just fades away after X amount of seconds so that they, and I quote, "*can just keep click-spamming the fat pigeon.*".
I also have ideas myself for future updates, such as adding achievements, accessories to decorate the pigeon, and a 'Save' button so the user can choose themselves if they want to save any data in their local storage or not. Eventually, I might even release it to the market :D

---
---

## References
- For help with ```active``` : https://www.w3schools.com/cssref/sel_active.php
- For ```scale``` : https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale
- For a refresher on ```fetch```, I re-checked Manny's class demo as well as: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- As a refresher in ```localStorage```, this article was useful to me: https://javascript.info/localstorage 
