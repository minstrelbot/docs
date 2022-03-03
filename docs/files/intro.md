# intro.md

This file is the first file read when a story is started in the bot.  
The structure is the same as a story file, with the exception that this file is the one the bot will play first when the story is started.

## Metadata

| Key   | Description                                                                                  | Type    | Required | Default |
| ----- | -------------------------------------------------------------------------------------------- | ------- | -------- | ------- |
| name  | The name of this section as displayed to the users.                                          | string  | yes      |         |
| links | A list of linked sections for the bot to continue to after this story. See [Links](../links) | array   | yes      |         |
| audio | The key of the audio file to play when this section is triggered.                            | string  | yes      |         |
| flee  | Should the player should have the ability to flee.                                           | boolean | no       | false   |
| end   | Does this path will lead to the end instead of to more sections                              | boolean | no       | false   |

## Content
The content of this file is the first part of the story when you play.
See [Story File](./story) for more information