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
After that, you can build out folders and subfolders and files for each part of the story

### Story File

A story file will look something like this

{% code title="intro.md" %}
```md
Name: Intro
Links: 
  - id: closet/1
    name: The Closet
  - id: room/1
    name: The Room
Flee: true
Audio: intro
---
Welcome to Once Upon a Test.
You enter a dark hallway...
On one side is a creepy room, and on the other side is a creepy closet. 
Where do you go?
```
{% endcode %}

### 

Let's break that down into pieces

The first section is listed in between the `---`, and contains all the data for the bot about that file.  
Name - The title name that is shown at the top of that part of the story in the bot  
Flee: whether the bot should have a flee button that will end the story  
End: whether this is the end of the story and the bot should not continue after this  
Audio: the name of the audio file that will be played for this part of the story  
Links: where the next parts of the story is

Below the second `---` is the actual content of the story that is displayed.
