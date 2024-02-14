const songTitle = document.getElementById("songtitle");
const playButton = document.getElementById('play-pause');
const backwardButton = document.getElementById('backward');
const forwardButton = document.getElementById('forward');
const song = document.getElementById('song-audio');
const quote = document.getElementById('quote')
const lyric = document.getElementById('lyrics')

const lastSongId = 3;
let isPlaying = false;
let playingSongId = 1;

const quotes = [
  "\"Taylor Swift\'s seventh track on evermore is supposedly a hindsight about the Scott and Scooter Braun scandle she had been through over the making of the album. In this song she elaborates on how she had been feeling about the lawsuit and the robbery of her masters. It is one of the most personal and mature songs in the album, and that\'s why it\'s place has been guarded in this Top 3.\"",
  "\"Cowboy Like Me is the eleventh track on the album and it is one of the few songs that touches on the topic of love. Taylor Swift tells a story about two supposedly fictional con-artists that have fallen in lone with each other. By the end of the song this story leaves us with a beautiful message about love, that even these two treacherous people could have been taken up by the blow of love. Forever is the sweetest con.\"",
  "\"Evermore is the last song on the album, and it closes it prodigiously. Being also the title-track of the album, this song touches on the chaos that Taylor had been struck by few years ago which led her to release her also acclaimed album called \"reputation\", it talks about hurt and anxiety but the plot twistes by the end and taylor tells us that this pain wouldn't be for evermore.\"",
]

const lyrics = [
    ` Honey, when I'm above the trees
      I see this for what it is
      But now I'm right down in it
      All the years I've given
      Is just shit we're dividing up
      Showed you all of my hiding spots
      I was dancing when the music stopped
      And in the disbelief
      I can't face reinvention
      I haven't met the new me yet\n
      There'll be happiness after you
      But there was happiness because of you
      Both of these things can be true
      There is happiness
      Past the blood and bruise
      Past the curses and cries
      Beyond the terror in the nightfall
      Haunted by the look in my eyes
      That would've loved you for a lifetime
      Leave it all behind
      And there is happiness\n
      Tell me, when did your winning smile
      Begin to look like a smirk?
      When did all our lessons start to look like weapons pointed at my deepest hurt?
      I hope she'll be a beautiful fool
      Who takes my spot next to you
      No, I didn't mean that
      Sorry, I can't see facts through all of my fury
      You haven't met the new me yet\n
      There'll be happiness after me
      But there was happiness because of me
      Both of these things I believe
      There is happiness
      In our history
      Across our great divide
      There is a glorious sunrise
      Dappled with the flickers of light
      From the dress I wore at midnight
      Leave it all behind
      And there is happiness\n
      I can't make it go away by making you a villain
      I guess it's the price I pay for seven years in heaven
      And I pulled your body into mine every goddamn night now I get fake niceties
      No one teaches you what to do
      When a good man hurts you
      And you know you hurt him too\n
      Honey, when I'm above the trees
      I see it for what it is
      But now my eyes leak acid rain
      On the pillow where you used to lay your head
      After giving you the best I had
      Tell me what to give after that
      All you want from me now
      Is the green light of forgiveness
      You haven't met the new me yet
      And I think she'll give you that\n
      There'll be happiness after you
      But there was happiness because of you too
      Both of these things can be true
      There is happiness
      In our history
      Across our great divide
      There is a glorious sunrise
      Dappled with the flickers of light
      From the dress I wore at midnight
      Leave it all behind
      Oh, leave it all behind
      Leave it all behind
      And there is happiness.`,
    `And the tennis court was covered up
    With some tent-like thing
    And you asked me to dance
    But I said, "Dancing is a dangerous game"
    Oh, I thought
    This is gonna be one of those things
    Now I know
    I'm never gonna love again\n
    I've got some tricks up my sleeve
    Takes one to know one
    You're a cowboy like me
    Never wanted love
    Just a fancy car
    Now I'm waiting by the phone
    Like I'm sitting in an airport bar
    You had some tricks up your sleeve
    Takes one to know one\n
    You're a cowboy like me
    Perched in the dark
    Telling all the rich folks anything they wanna hear
    Like it could be love
    I could be the way forward
    Only if they pay for it\n
    You're a bandit like me
    Eyes full of stars
    Hustling for the good life
    Never thought I'd meet you here
    It could be love
    We could be the way forward
    And I know I'll pay for it\n
    You're a cowboy like me
    Perched in the dark
    Telling all the rich folks anything they wanna hear
    Like it could be love
    I could be the way forward
    Only if they pay for it\n
    You're a bandit like me
    Eyes full of stars
    Hustling for the good life
    Never thought I'd meet you here
    It could be love
    We could be the way forward
    And I know I'll pay for it\n
    And the skeletons in both our closets
    Plotted hard to fuck this up
    And the old men that I've swindled
    Really did believe I was the one
    And the ladies lunching have their stories about
    When you passed through town
    But that was all before I locked it down\n
    Now you hang from my lips
    Like the Gardens of Babylon
    With your boots beneath my bed
    Forever is the sweetest con\n
    I've had some tricks up my sleeve
    Takes one to know one
    You're a cowboy like me\n
    And I'm never gonna love again
    I'm never gonna love again
    Mm, mm, oh, oh
    I'm never gonna love again.`,
    `Gray November
    I've been down since July
    Motion capture
    Put me in a bad light\n
    I replay my footsteps on each stepping stone
    Trying to find the one where I went wrong
    Writing letters
    Addressed to the fire\n
    And I was catching my breath
    Staring out an open window
    Catching my death
    And I couldn't be sure
    I had a feeling so peculiar
    That this pain would be for
    Evermore\n
    Hey December
    Guess I'm feeling unmoored
    Can't remember
    What I used to fight for\n
    I rewind the tape but all it does is pause
    On the very moment all was lost
    Sending signals
    To be double crossed\n
    And I was catching my breath
    Barefoot in the wildest winter
    Catching my death
    And I couldn't be sure
    I had a feeling so peculiar
    That this pain would be for
    Evermore
    (Evermore)\n
    Can't not think of all the cost
    And the things that will be lost
    Oh, can we just get a pause?
    To be certain we'll be tall again
    Whether weather be the frost
    Or the violence of the dog days
    I'm on waves, out being tossed
    Is there a line that I could just go cross?\n
    And when I was shipwrecked (can't think of all the cost)
    I thought of you (all the things that will be lost now)
    In the cracks of light (can we just get a pause?)
    I dreamed of you (to be certain we'll be tall again)
    (If you think of all the costs)
    It was real enough (whether weather be the frost)
    To get me through (or the violence of the dog days)
    (Out on waves being tossed)
    But I swear (is there a line that we could just go cross?)
    You were there\n
    And I was catching my breath
    Floors of a cabin creaking under my step
    And I couldn't be sure
    I had a feeling so peculiar
    This pain wouldn't be for
    Evermore
    Evermore (evermore)
    Evermore
    This pain wouldn't be for evermore (evermore)
    Evermore.`,
]

const playlist = ["happiness", "cowboy like me", "evermore"];

lyric.innerText = lyrics[0];

function playSong() {
  song.play();
  playButton.innerText = "􀊆";
  isPlaying = true;
}
function pauseSong() {
  song.pause();
  playButton.innerText = "􀊄";
  isPlaying = false;
}
function playPauseSong() {
  if (isPlaying == false) {
    playSong();
  } else {
    pauseSong();
  }
}
function backwardSong() {
  if (playingSongId === 1) {
    playingSongId = lastSongId;
  } else {
    playingSongId -= 1;
  }
  song.src = "songs/" + playingSongId + ".mp3";
  let pickIndex = playingSongId - 1
  songTitle.innerText = playlist[pickIndex];
  quote.innerText = quotes[pickIndex];
  lyric.innerText = lyrics[pickIndex];
  playSong();
}
function forwardSong() {
  if (playingSongId === lastSongId) {
    playingSongId = 1;
  } else {
    playingSongId += 1;
  }
  song.src = "songs/" + playingSongId + ".mp3";
  let pickIndex = playingSongId - 1
  songTitle.innerText = playlist[pickIndex];
  quote.innerText = quotes[pickIndex];
  lyric.innerText = lyrics[pickIndex];
  playSong();
}

playButton.addEventListener('click', playPauseSong);
backwardButton.addEventListener('click', backwardSong);
forwardButton.addEventListener('click', forwardSong);
