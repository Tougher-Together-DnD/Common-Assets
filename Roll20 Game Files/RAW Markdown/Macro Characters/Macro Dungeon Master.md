<style>
/* css style for NaturalCrit Homebrew render. */
.phb#p1{ text-align:left; }
.phb#p1:after{ display:none; }
.phb p+p { margin-top: .2em; }
.phb blockquote { margin-top: 1em; margin-bottom: 2em;}
span {font-weight: bold; color: #006699;}
sup {color: #006699;}
ul li {line-height: 2;}
.phb h1, .phb h2, .phb h3, .phb h4 {
    color: #006699;
}
</style>

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="Spacer to push markdown past avatar." height="1">

***You can access these macros under the "Attributes and Abilities" Tab***
<br>

JSON Hard copy: [Macros: Dungeon Master](https://github.com/Tougher-Together-DnD/common-assets/blob/main/Roll20%20Game%20Files/Character%20Sheets/Macros%20Dungeon%20Master.json) 

### Macros
*Note: Macros to be shared between Players and Dungeon Masters, or are intended as universal token actions, should be loaded into game under the "Collection" tab.*

* Ability-Check <span>*</span>
* Apply-Conditions-Short <sup>7</sup>
* Apply-Spells-Short <sup>7</sup>
* Apply-Status-Short <sup>7</sup>
* Calendar <sup>5</sup>
* Carry-Tokens-Menu <sup>1</sup>
* Combat-Master-Menu <sup>2</sup> <sup>3</sup>
* Combat-Master-Next-Turn <sup>2</sup>
* Damage-Target <sup>7</sup>
* Damage-Six-Targets <sup>7</sup>
* Heal-Target <sup>7</sup>
* Magic-Store-Menu <sup>4</sup>
* Make-Default-Token <sup>7</sup>
* NPC-Info
* PC-Info
* Quick-Calculator
* Resize-Full <sup>7</sup>
* Resize-Half <sup>7</sup>
* Roll-Initiative
* Saving-Throw <span>*</span>
* Show-URL-Image
* Skill-Check <span>*</span>
* Special-Effect
* Teleport-Menu <sup>6</sup>
* Toggle-Talking-To-Myself
* Whisper-Target-Token

<span>*</span> Copy/paste macro text from [Failsafe](https://raw.githubusercontent.com/Tougher-Together-DnD/common-assets/main/Roll20%20Game%20Files/Macros/failsafe-ability-saving-skills.txt) if macro breaks after transfer.

#### Required API Scripts: 
<span>1</span> [CarryTokens](https://github.com/Roll20/roll20-api-scripts/tree/master/CarryTokens)  
<span>2</span> [CombatMaster](https://github.com/Roll20/roll20-api-scripts/tree/master/CombatMaster)  
<span>3</span> [libTokenMarkers](https://github.com/Roll20/roll20-api-scripts/tree/master/libTokenMarkers)  
<span>4</span> [Magic Store](https://raw.githubusercontent.com/Tougher-Together-DnD/common-assets/main/Roll20%20Game%20Files/API%20Scripts/Magic%20Store%20v2.0.0.js) *Custom download*  
<span>5</span> [Multi-World Calendar v6.2.0](https://raw.githubusercontent.com/Tougher-Together-DnD/common-assets/main/Roll20%20Game%20Files/API%20Scripts/Multi-World%20Calendar%20v6.2.0.js) *Custom download*  
<span>6</span> [Teleport](https://github.com/Roll20/roll20-api-scripts/tree/master/Teleport)  
<span>7</span> [TokenMod](https://github.com/Roll20/roll20-api-scripts/tree/master/TokenMod)  

### About
Using a character sheet to manage macros is a [Stupid Roll20 Trick](https://app.roll20.net/forum/post/5899495/stupid-roll20-tricks-and-some-clever-ones/?pageforid=7605679#post-7605679). Tools such as the transmogrifier only allow moving pages, characters, decks, handouts , roll tables, and jukebox playlists. However, macros can not be moved.

It is a tedious error proned process to copy and paste macro code between games. Unless you use some ingenuity or tools like the [Firefox](https://www.mozilla.org) addon, [VTT Enhancement Suite](https://addons.mozilla.org/en-US/firefox/addon/roll20-enhancement-suite/).  

#### Pros:
* Manage catagories of macros separated into different character sheets.
* Easily move macros between games.

#### Cons:
* Character sheets are resource intensive. They have many fields that will go unused with this technique. A lot of characters may negatively impact Roll20 performance.
* Selecting ☐ *Show as Token Action* will only show a macro button for a token representing this character sheet. Not for all tokens like macros in the game-wide *Collection* tab. 
* If you want Players to use these macros, they need to be added to "Can Be Edited and Controlled By" permission list. They can inadvertently or purposefully alter the macros.

### Setup
Create a character sheet. Under its *Attributes and Abilities*  tab add macros.

When doing nested macros, be sure to reference other macros in the same character sheet as ~Macro-Name. As opposed to #Macro-Name for game-wide accessible macros stored under the *Collection* tab.

Edit the character sheet by adding the appropriate users in the "In Player's Journal" and "Can Be Edited and Controlled By" fields. This does not have to be done for the GM, as they have permissions to all assets.

### Usage
When you want to copy all your macros to a new game, move or import this character sheet.

#### Free VTT Move
This technique can be used for free, even with games that have different owners, just swap the JSON file.

1. Using [VTT Enhancement Suite](https://addons.mozilla.org/en-US/firefox/addon/roll20-enhancement-suite/) export the character sheet as JSON to your local hard drive.

1. In the new game create a character to hold your macros. Using VTT go to the "Export & Overwrite" tab, there Overwrite the new character with your JSON file. 

#### Character Vault Move
If the owner of the game does not have a Roll20 subscription, their game will have limited vault access.

1. From the Campaign Page, under "Game Settings" they can set *Allow players to import their own Characters?* to "Yes".
   
1. Then a subscribed player can import the Macro Character as they do for any characters.

#### Transmogrifier Move
And finally, the easiest most intuitive move is with the transmogrifier. This only works if you own both games.
