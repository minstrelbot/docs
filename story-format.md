# Story Format

Stories in the bot are split up into folders, each story gets its own folder.   
Every single part of a story has its own `.md` file, and is written using markdown to format it

The folder must consist of the following files:   
MAIN.md - This is for the main information and description about your story  
intro.md - First section that is played  
end.md - Very last section played at the end of the story after deaths/winning   
README.md - Notes about the story, authors, etc. This one is just for documentation

After that, you can build out folders and subfolders and files for each part of the story

### Story File

A story file will look something like this

{% code title="intro.md" %}
```text
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

