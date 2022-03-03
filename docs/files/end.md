# end.md

This file is the last file read in a story.

## Metadata

| Key   | Description                                                       | Type   | Required | Default |
| ----- | ----------------------------------------------------------------- | ------ | -------- | ------- |
| name  | The name of the section as displayed to the users.                | string | yes      |         |
| audio | The key of the audio file to play when this section is triggered. | string | yes      |         |

## Content
The content of this file is the section played when a game ends, either after fleeing or from a section that has `end: true` set.