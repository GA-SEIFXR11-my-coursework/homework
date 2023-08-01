# react-reamp

**Use class components**

### Part 1

- Display the album art, title, and artist of each track in the [songs.js](./src/assets/songs.js) array
- When a track is clicked:
  - Change the style of the track component to visually indicate that it's the current song
  - Add text at the bottom to say `Now playing: <name of song>`

![](https://i.imgur.com/Wuaq2HQ.png)

### Part 2

- [Read this](https://jscurious.com/play-audio-with-htmlaudioelement-api-in-javascript/) to learn how to use the `Audio` constructor.
- Create an `AudioPlayer` component that plays the current song. Make sure to stop the current song before playing a new one or, depending on your implementation, when the component unmounts.
- Add Play and Pause buttons.
- Remember to remove your event listeners when the component unmounts if you use any.

### Extensions

Check out what [Audio Events](https://www.w3schools.com/tags/ref_av_dom.asp#midcontentadcontainer) you can listen for to accomplish these extensions. Take a look at the `loadedmetatada`, `timeupdate`, and `ended` events in particular.

1. Auto play the next song.
2. Show the song's progress as time codes or a slider (check out [`<input type="range" />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)). You'll need the `currentTime` and `duration` properties of the `Audio` object for this.
3. Add a seek bar to allow the user to jump to a specific part of the song. You can use the `onChange` prop if you implement this with `<input type="range" />`.

---

### Preview

https://sei-reamp.netlify.app


