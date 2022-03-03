---
sidebar_position: 2
---

# Basics

Stories in Minstrel are split up into folders, with each story being in a separate folder linked on the stories repository on [GitHub](https://github.com/minstrelbot/stories).

Every part of a story is written in a separate Markdown file.

<hr />

## Folder Structure

A story folder must consist of the following files:   
* [`MAIN.md`](files/MAIN) - This is for the main information and description about your story  
* [`intro.md`](files/intro) - First section that is played  
* [`end.md`](files/end) - Very last section played at the end of the story after deaths/winning   
* [`README.md`](files/README) - Notes about the story, authors, etc for documentation on the website and GitHub

After that, you can build out folders and subfolders and files for each part of the story.

<hr />

## File Structure

Each file follows the same basic format:
```
---
key: value
key2: value2
---

Content
```

### Metadata
The top half of the file (between the two sets of hyphens) is metadata about the file.  
This is where the data about that file is stored for the bot to read.

:::info

This format is called YAML, and when you use it in a Markdown file, that block of YAML is referred to as "gray matter".

:::

### Content
The bottom half of the file is the content, and generally contains the actual content for the story, such as the next chapter in the story or the text for a description of the story.  
[Formatting in this section uses basic Discord formatting, which you can find more about by clicking here.](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-)