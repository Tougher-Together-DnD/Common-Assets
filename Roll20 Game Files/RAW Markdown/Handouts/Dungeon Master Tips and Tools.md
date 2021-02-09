<!-- Dungeon Master Tips and Tools -->
<style>
/* CSS style for NaturalCrit Homebrew render. */
.phb#p1{ text-align:left; }
.phb#p1:after{ display:none; }
.phb p+p { margin-top:.2em; }
.phb blockquote { margin-top:1em; margin-bottom:2em; }
.phb h1, .phb h2, .phb h3, .phb h4, sup, span { color:#006699; }
span { font-weight:bold; }
ul li { line-height:2; }
.phb table tbody tr td { border:1px solid #1C6EA4; }
th:empty { display:none; }
</style>

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="" height="1">

Markdown hard copy: [Dungeon Master Tips and Tools][Markdown]

### External Tools:
This is a list of tools helpful in running or creating things for your game.

**[Discord][Discord-URL]** Outsourcing Voice and Video to a dedicated application will reduce the strain of running a game in the browser.

**[VTT Enhancement Suite][VTT Enhancement Suite-URL]** Is a [Firefox][Firefox-URL] addon that is extremely helpful when working with the content in *Common Assets*.

**[Krita][Krita-URL]** Is a free art program. When working with the art templates to make banners, tokens, and other images you will need some kind of art program to edit templates. The templates are saved in Krita format.

**[NaturalCrit's Homebrewery][Homebrewery-URL]** Is an online website that takes Markdown text and style it like the "Player's Handbook".

**[Tougher Together Github][Github-URL]** Is a repository of files and content discussed in the Common Assets handouts.

### Work Flow
These are work flows for making content.

#### Handout and Character Text
The default Text editor of Roll20 is, atrocious. Copy and pasting from txt, word, or rtf all mess up the formatting. Once you get the text to look like you want, it is trapped in Roll20. For these reasons, I use [Markdown](https://www.markdownguide.org/basic-syntax/). All you need is a text editor. In fact you can write it in real time in [NaturalCrit's Homebrewery][Homebrewery-URL] and see a preview of the "rendered" output. You can save the markdown and use it in other places than Roll20. Its a very flexible markup.

Once you have the content penned in markdown, you want to render it into HTML. There are ways to do this. Github, VS Code, or as before right inside [Homebrewery][Homebrewery-URL]. Select all on the rendered page. The stylized version. Then copy paste that into the Handout or Character sheet. The background images will not be pasted. But the colors, header lines, stylized headers and more will work.

When you use the same rendering platform, you get a consistent feel to your handouts.

You can see examples of markdown and templates on the [Tougher Together Github/Templates](https://github.com/Tougher-Together-DnD/common-assets/tree/main/Templates)

### Macros
Macros can not be transmogrified. If you do them the way Roll20 intends, it is copy pasting of your code to new games. This is tedious and error prone. One way is to use Character Sheets to store macros. But this technique is only effective for macros intended for the macro bar. And it only works with transmogrifying in game you created.

Using [VTT Enhancement Suite][VTT Enhancement Suite-URL] you can export you macros as JSON. Then when importing, actually pick and choose which ones you want.

You can see examples of JSON files of macros at [Tougher Together Github/Macros](https://github.com/Tougher-Together-DnD/common-assets/tree/main/Roll20%20Game%20Files/Macros).

### Roll Tables
[VTT Enhancement Suite][VTT Enhancement Suite-URL] is also good when it comes to roll tables. With the added option of pasting an import.

You can create a table using the sample file [Table Template](https://github.com/Tougher-Together-DnD/common-assets/blob/main/Templates/Table%20Template.txt).


It has tools that allow exporting and importing of game files, thereby storing the stuff locally on my own machines. These files lso make it easier and more consistent to move comman asets between games. Even Games not owned by the same person.

<div class='descriptive'>
!import-table --%%TABLE-NAME%% --show  
!import-table-item --%%TABLE-NAME%% --new item one --1 --  
!import-table-item --%%TABLE-NAME%% --new item two --1 --  
!import-table-item --%%TABLE-NAME%% --new item number --1 --  
!import-table-item --%%TABLE-NAME%% --new item another --1 --  
</div>

Replace "%%TABLE-NAME%%" with your table name. Then replace the "new item" lines with your own stuff. The "--1 --" is the weight of the item in the roll table.

Once the table is created, export it as JSON. Now you can import the JSON file in other games. This way we can share roll tables among ourselves.

<!-- Github Links -->
[Markdown]: https://github.com/Tougher-Together-DnD/common-assets/blob/main/Roll20%20Game%20Files/RAW%20Markdown/Handouts/Dungeon%20Master%20Tips%20and%20Tools.md "Dungeon Master Tips and Tools markdown."
[Failsafe-URL]: https://raw.githubusercontent.com/Tougher-Together-DnD/common-assets/main/Roll20%20Game%20Files/Macros/failsafe-ability-saving-skills.txt

<!-- API URLs -->
[CarryTokens-URL]: https://github.com/Roll20/roll20-api-scripts/tree/master/CarryTokens  
[CombatMaster-URL]: https://github.com/Roll20/roll20-api-scripts/tree/master/CombatMaster
[libTokenMarkers-URL]: https://github.com/Roll20/roll20-api-scripts/tree/master/libTokenMarkers
[Magic Store-URL]: https://raw.githubusercontent.com/Tougher-Together-DnD/common-assets/main/Roll20%20Game%20Files/API%20Scripts/Magic%20Store%20v2.0.0.js
[Multi-World Calendar v6.2.0-URL]: https://raw.githubusercontent.com/Tougher-Together-DnD/common-assets/main/Roll20%20Game%20Files/API%20Scripts/Multi-World%20Calendar%20v6.2.0.js
[RecursiveTables]: https://github.com/Roll20/roll20-api-scripts/tree/master/RecursiveTable
[Teleport-URL]: https://github.com/Roll20/roll20-api-scripts/tree/master/Teleport
[TokenMod-URL]: https://github.com/Roll20/roll20-api-scripts/tree/master/TokenMod

<!-- External Tools -->
[Discord-URL]: https://discord.com/
[Firefox-URL]: https://www.mozilla.org
[VTT Enhancement Suite-URL]: https://addons.mozilla.org/en-US/firefox/addon/roll20-enhancement-suite/
[Gimp-URL]: https://www.gimp.org/
[Krita-URL]: https://krita.org/en/
[Github-URL]: https://github.com/Tougher-Together-DnD/common-assets
[Homebrewery-URL]: https://homebrewery.naturalcrit.com/
