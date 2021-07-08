# Uploading to the Bot

In Pathfinder, we use a combination of YAML and Markdown for the files that contain the story and metadata that the bot reads to run the story.  
Each story has its own repository on GitHub, with official stories being published under the [pathfinderbot](https://github.com/pathfinderbot) organization. 

## Repository Requirements: 

Each repository containing a story must have the following files:

* `MAIN.md` - This file has the data that is shown in the story picker, as well as profile badges and other metadata
* `intro.md` - This file is the first file that is read when a story is started
* `end.md` - This file is the very last file that is played after the conclusion of the story. This can be used for credits or teasers for a sequel, just to give some ideas. This is NOT where the ending of the story should happen, such as a victory or death.
* `flee.md` - This file is played if the player chooses the "Flee" option to end the story early. \(Note: after `flee.md` is played, then `end.md` is played as well.\)
* Audio folder



