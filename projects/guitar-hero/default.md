In 2005, Harmonix released one of the year's biggest surprises: Guitar Hero. This rhythm game let players jam out to licensed songs using a unique guitar controller. As the genre exploded, sequels, spin-offs, and competitors flooded the market, eventually leading to the downfall of these plastic instrument games.

However, from that downfall rose a devoted community. Fans reverse-engineered the games to create custom tracks, mods, and even full remakes to keep the rhythm alive. One cool side effect? Thousands of songs have been charted, with all their game data hiding in plain sight.

This is Redevelop It, and today, I decided to make my own Guitar Hero game.

## Getting Started: Controllers

Before diving into code, I had to tackle controller compatibility. With so many versions across different consoles, not all guitars are created equal. Some connect via console controllers (like the Wii), while others plug directly into devices.

I used my childhood PlayStation 2 guitars, along with cheap adapters I found on Amazon. If you’re trying this yourself, a quick search should help you find a solution for your setup.

Once connected, I fired up my development tools, created some 3D models, and laid out the game environment.

## The Basics: How Guitar Hero Works

The core gameplay is surprisingly simple:
- Notes appear at the top of the screen and scroll down.
- When a note reaches the "hitbox" area, the player must press the corresponding button and strum.
- Missing notes or mistimed strums break your streak and cost points.

Implementing this was straightforward, but the real challenge was determining when to spawn notes. For that, we needed to dig into song files.

## Loading Songs and Parsing Data

I grabbed a song file for Crab Rave (because, of course), extracted the contents, and found a treasure trove of data:
- Album cover
- Chart file (the key to note data)
- Song details (name, length, etc.)
- Audio file

## Parsing Song Information

The song details file provided basic metadata: song name, duration (163 seconds), and more. The chart file held the real magic—lines of seemingly random letters and numbers, which turned out to be note data.

Each note had:
- A timestamp (when it should appear)
- A note type (green, red, yellow, blue, orange)
- A sustain length (for long notes)

## Understanding Ticks: Timing in Guitar Hero

Unlike standard timers, Guitar Hero doesn't measure time in seconds. It uses ticks, similar to Minecraft's tick system. Ticks per second vary based on the song. Each note's timestamp is based on ticks, not seconds. I found documentation explaining how to convert ticks to real-time values. With this info, I wrote functions to handle conversions and accurately sync notes with the music.

## Building the Rhythm Game

With the data parsed, it was time to assemble the gameplay loop:
- Load the song directory.
- Display album art and song info.
- Load the audio file.
- Parse the chart file to extract note data.
- Spawn notes based on tick timestamps.

The game tracked when to spawn notes, how long to hold sustains, and when to end the song.

## Playtesting and Lessons Learned

After a weekend of coding, I had a working prototype. It wasn't perfect—the code was messy, bugs were everywhere, and some notes didn't register correctly. But it worked, and that was incredibly satisfying.

# What I Learned:

Reverse-engineering community charts opens up endless possibilities. You can reuse these systems for new rhythm games, VR projects, or even learning tools. Documentation from modders is a goldmine for understanding old game mechanics.

# Beyond Guitar Hero

While Clone Hero already exists and does this better, making my own version taught me a lot about game development, file parsing, and timing systems.