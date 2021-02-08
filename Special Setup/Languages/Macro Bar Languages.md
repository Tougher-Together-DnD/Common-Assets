<!-- Macro Bar: Languages -->
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

Character sheet JSON hard copy: [Macro Bar: Languages][Character Sheet]

### Macros*
*Note: Macros to be shared between Players and Dungeon Masters, or are intended as universal token actions, should be loaded into game under "Collections" tab.*

* Speak-Tongues
* Speak-Tongues-DM

#### Required API Scripts: 
<span>*</span> Requires special setup

### Languages
Your race indicates the Languages your character can speak by default, and your Background might give you access to one or more additional Languages of your choice. Note these Languages on your character sheet.

Choose your Languages from the Standard Languages table, or choose one that is Common in your campaign. With your DM’s permission, you can instead choose a language from the Exotic Languages table or a Secret language, such as thieves’ cant or the tongue of druids.

Some of these Languages are actually families of Languages with many dialects. For example, the Primordial language includes the Auran, Aquan, Ignan, and Terran dialects, one for each of the four elemental planes. Creatures that speak different dialects of the same language can communicate with one another. Get with your DM to see if your language can be considered a Dialect of another.

### Supported Languages
*The Following Languages have been loaded into the game for your characters to use.*

<!-- GM when you add or remove a language from this list, also add/remove to the attribute text of this sheet. -->
<!-- Attribute Text: known_languages = Abyssal|Celestial|Dark-Speech|Deep-Speech|Draconic|Druidic|Dwarvish|Elvish|Giant|Gnomish|Goblin|Halfling|Infernal|Kraul|Leonin|Loxodon|Minotaur|Orc|Primordial|Sylvan|Thieves-Cant|Undercommon|Vedalken -->
* [Language: Abyssal]
* [Language: Celestial]
* [Language: Dark-Speech]
* [Language: Deep-Speech]
* [Language: Draconic]
* [Language: Druidic]
* [Language: Dwarvish]
* [Language: Elvish]
* [Language: Giant]
* [Language: Gnomish]
* [Language: Goblin]
* [Language: Halfling]
* [Language: Infernal]
* [Language: Kraul]
* [Language: Leonin]
* [Language: Loxodon]
* [Language: Minotaur]
* [Language: Orc]
* [Language: Primordial]
* [Language: Sylvan]
* [Language: Thieves-Cant]
* [Language: Undercommon]
* [Language: Vedalken]  

### Character Sheet Setup
Usually your DM will add an attribute to your character sheet called "known_languages" with a value matching your character proficiencies. For instance if your character can read/write Dwarvish, Elvish, and Giant; the *known_languages* would equal Dwarvish|Elvish|Giant.  Each language separated by a Vertical Bar ("|")

### Remarks
If you don't see a language in the supported list, or you notice one of the languages is not as fleshed out as others. Get with your DM to update the core files.

<!-- *********************************************************************** -->
<!-- GM NOTES AREA -->
### About
Using character sheets and roll tables to obscure chat messages and give the feel of different languages is a [Stupid Roll20 Trick](https://app.roll20.net/forum/post/5899495/stupid-roll20-tricks-and-some-clever-ones/?pageforid=5932164#post-5932164).

Importing the raw JSON character sheets and roll tables is covered in the GM notes of [Macro Bar: Dungeon-Master]. This sheet will focus on setting up the campaign to use languages.

#### Pros:
* Adds a level immersion for your players.
* Can be accomplished with a free account.

#### Cons:
* Character sheets are resource intensive. They have many fields that will go unused with this technique. A lot of characters may negatively impact Roll20 performance.
* Players will need to be added to the "Can Be Edited and Controlled By" permission list to speak in that language. They may inadvertently or purposefully alter the document. *Always load from the Github Files*
* Character sheets need to have an additional attribute added.

### Setup

1. Using the [Character Sheet Template][Markdown-Template] to create the Body of the languages character sheet. Which will be named "Language: %%LANGAUGE-NAME%%". Replacing %%LANGUAGE-NAME%% with the name of the language. This will also be the reference of the roll table. Therefore use a name that can also be a roll table title. You have to hyphenate spaces and not use special characters. "Thieves' Cant" becomes Character sheet: "Language: Thieves-Cant" with a roll table called "Language-Thieves-Cant".

1. Using the [Roll Table Template][Roll-Table-Template] craft a random table of the words that will obscure the real chat message. Languages already created can be gotten on the [Tougher Together Github](https://github.com/Tougher-Together-DnD/common-assets/tree/main/Special%20Setup/Languages) repo. Then use the [VTT Enhancement Suite][VTT Enhancement Suite-URL] to import code.

1. Add the language to the Table of Contents above, and to the bar ("|") speperated list of *THIS* Character sheets *known_languages* attribute.

1. Save the Files you have made as RAW versions. Import/Create the languages on in your Game.

1. Add the *known_languages* attribute to your players with a value of their languages separated by bars.

1. Copy the Macros from this sheet into your campaign's macros, so they can be token actions on every token.

<!-- Github Links -->
[Character Sheet]: https://github.com/Tougher-Together-DnD/common-assets/tree/main/Special%20Setup/Languages/Macro%20Bar%20Languages.json "JSON config for "Macro Bar: Languages" character sheet."
[Markdown-Template]: https://github.com/Tougher-Together-DnD/common-assets/blob/main/Special%20Setup/Languages/Templates/Language%20Sheet%20Template.md
[Roll-Table-Template]: https://github.com/Tougher-Together-DnD/common-assets/blob/main/Special%20Setup/Languages/Templates/Roll%20Table%20Import%20Template.txt

<!-- External Tools -->
[Github-URL]: https://github.com/Tougher-Together-DnD/common-assets
[Firefox-URL]: https://www.mozilla.org
[VTT Enhancement Suite-URL]: https://addons.mozilla.org/en-US/firefox/addon/roll20-enhancement-suite/