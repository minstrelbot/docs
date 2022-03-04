---
sidebar_position: 3
---

# Links

Links to the next section for the choices in the story are provided to the bot in the form of a YAML array.

### Example Format:
```yml
links:
  - id: folder/file
    name: Name on the Button
  - id: folder/folder/file
    name: Another Choice for the Button
```

Each item in the links section must contain the following properties:

| key | description |
| --- | --- |
| id | The path of the file to link to. |
| name | The name of the choice to display on the button. |

You can have up to 4 links on a story section, plus the [Flee](../players/fleeing.md) option