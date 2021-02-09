<!-- Make A Game -->
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

Markdown hard copy: [Make A Game][Markdown-URL]

## Introduction
The easiest way to learn how to use the resources of *Tougher Together Common Assets* and Github files, is to make a game. You will have to have a basic understanding of the tools in [Dungeon Master Tools and Tips] Roll20 Handout. This handout is a summary about the general steps. If you run into issues do not hesitate to ask your fellow dungeon masters for help.

You can open the [PDF version](https://github.com/Tougher-Together-DnD/common-assets/blob/main/Make%20a%20Tougher%20Together%20Game.pdf) of this handout up in another window and follow along as you create a game.

### Write an outline
The first part to creating a new game is to create a rough outline of the campaign you will be running. Even if you plan to use a module, read through the module making changes or notes about it. This outline is to help direct your creative process, so keep your group of players, or intended group, in mind.

### Create a Campaign Setting Guide (Optional)
Even if you are running an official module it can be a good warm opening to the campaign if your players have a document describing the campaign setting. It can be as along or as short as you *need*. Try for under 20 pages. The Guide should give enough information to players so that they understand the atmosphere, terrain, type of enemies, type of interactions and lore relevant to their place in the world.

Again will will do the tried and true trick of writing this content in *markdown*. This content is your creation, by using markdown it is portable to other game mechanics. You can use your content in real life games, roll20, or another VTT. Once the structure and text have been made, render this markdown into HTML applying style. You can use any text editor to make the campaign document. Some like *VS Code* have addon for working with markdown, like previews and rendering.

Lets keep it simple. [NaturalCrit's Homebrewery][Homebrewery-URL] is an online tool you can write your markdown in, and see the rendered html. And its will be styled like the Players Handbook or other DnD similar products. it also has an option to export the document as pdf. That's exactly what you need.

1. **Begin with markdown template as a guide**. Start with the [Tougher [Together Homebrewery Template](https://raw.githubusercontent.com/Tougher-Together-DnD/common-assets/main/Templates/Homebrewery%20Campaign%20Setting%20Template.md). Paste that markdown into [NaturalCrit's Homebrewery][Homebrewery-URL]. Read through it to get a general idea of the tricks you can do. For an example of an already written campaign you can refer to [The Green Isles Campaign Setting -Markdown](https://raw.githubusercontent.com/Tougher-Together-DnD/invasion-of-eirinn/main/Green%20Isles%20Campaign%20Setting%20(Homebrewery).md).

2. **Write your campaign** Fleshing out the world in this way will help your players and save you time and frustration later on.
   
3. **Save your markdown locally** It's easy to mistakenly overwrite previous work in the Homebrewery. This content is your creation, so keep it for any your games.

4. **Save as PDF** And then share it with your players.

### Setup Discord
Now that you have the world fleshed out, we need to begin on the mechanics of it. Technically the technology to play it. If you are running the game in real life adapt as appropriate.

1. **Add Discord Channel**. On the [Tougher Together Discord](https://discord.gg/fPqrtEXz8t) add a text, roleplay, and voice channel in discord for the game. Follow the naming convention set: all lowercase hyphen for text chat, Capitalize and spaces for voice. Example: "friday-cos", "friday-cos-roleplay" and "Friday CoS". All of them should be private, and only people with the role (Friday-CoS following the example )can access those channels.

This is also a good time to pin in the channel your campaign guide and other important messages.

### Setup Roll20 Campaign
Adjust this setup to fit you and your players' needs.

1. **Create Roll20 Game** Load what modules you want, name the game. Once created set up default Game settings.

1. **Add a Banner and Title** The banner is used in "My Games" and "looking for group" listings. Many modules come with built in banners. But, if the campaign is custom or you want to set yourself apart create a banner. Using [Krita][Krita-URL] (a free art program) open the [Tougher Together LFG Template][LFG-Template-URL]. Its set up so you can drag and drop images (png or JPEG by default) in the Images layer.

Adjust the image as you desire. The title of a game always accompanies the image, so I prefer to leave off title text.

Export as JPEG (PNG is higher quality but of little use after the image is rescaled by Roll20) and upload to Roll20 as the game's banner.

1. **Add Game Description** Roll20's game description is a text field taking markdown. It gets rendered in a consistent style for all games. So you will need to avoid fancy tricks. Use the [Tougher Together's Game Description Template](https://raw.githubusercontent.com/Tougher-Together-DnD/common-assets/main/Roll20%20Game%20Files/Forum%20Posts/Game%20Description.md) to get started.

1. **Add Forum Posts** In the same [Github folder](https://github.com/Tougher-Together-DnD/common-assets/tree/main/Roll20%20Game%20Files/Forum%20Posts) as the Game Description you can find the templates for "APPLY HERE", "Character Introduction", "DM Introduction" and "Important Links". Now these Forum posts use the Roll20 text editor,

\page
An atrocious piece of junk. So using the above markdown templates create your posts in markdown, render on Homebrewery, and copy/paste the rendered html into Roll20 editor.

The last post stickied will be on top. Within the Campaign Forums sticky "Character Introductions", then sticky and close "Important Links". Under the Looking for Group Listing sticky "APPLY HERE" and if you want, then sticky and close "DM Introduction"

1. **Upload the Status Markers** Many of the macros and configurations of Tougher Together use a custom set of status markers. If you have not set up custom markers do so with the [EasySee Token Markers](https://github.com/Tougher-Together-DnD/common-assets/tree/main/Roll20%20Game%20Files/Images/Token%20Markers).

** Pro-Tip: Delete the default, add the EasySee, then readd the default tokens. This way when a player clicks on a token they will see the default icons first. As a DM try to avoid using these default tokens and letting the players use them. **

### Add Game Content
Now that the game is created we need to load it up with charcaters, maps, macros, roll tables, and more.

1. **Create a Landing Page** Landing pages give a polished look to your game. They give the players a place to go when outside of sessions. Using [Krita][Krita-URL] again grab the [Tougher Together Landing Page Template](https://github.com/Tougher-Together-DnD/common-assets/blob/main/Templates/Krita%20Art%20Templates/Landing%20Page%20Template.kra) and craft a starting point. You can take the default and just change the Title Text. But get creative. Move things around, add little trinkets on the table. Get it to look like the theme of your game. The way it will work is it is a flat image with see through cut outs. On the map layer you will put the avatars, or portraits, of your players underneath. Their pictures will be visible from the top and create a "Hero Card" effect.

Export as PNG (PNG has transparency(see through) unlike JPEG) and load it into Roll20.

** Pro-Tip hotlink the image using the VTT "Create Token from URL link", then when you change the page on the remote host it will change in game automatically. **

1. **Create a Folder Structure** Create the folder and subfolders you will organize your campaign into. I prefer to have "GM Notes", "PARTY", "Lighting Options", and "Languages" as a minimum.
   
1. **Import Assets** If you can't use the transmogrifier to import assets from the *Common Assets* game you will need to create character sheets and use [VTT Enhancement Suite][VTT Enhancement Suite-URL] to overwrite them. You will want to move characters, maps, macros, roll tables, and handouts in that order.

* [Character Sheet JSON files](https://github.com/Tougher-Together-DnD/common-assets/tree/main/Roll20%20Game%20Files/Character%20Sheets)
* [Maps](https://github.com/Tougher-Together-DnD/common-assets/tree/main/Roll20%20Game%20Files/Images/Maps)
* [Macro JSON files](https://github.com/Tougher-Together-DnD/common-assets/tree/main/Roll20%20Game%20Files/Macros)
* [Roll Tables](https://github.com/Tougher-Together-DnD/common-assets/tree/main/Roll20%20Game%20Files/Roll%20Tables)
* [Handout Markdowns](https://github.com/Tougher-Together-DnD/common-assets/tree/main/Roll20%20Game%20Files/RAW%20Markdown/Handouts)

Things like Languages and Range3D will require extra work by the DM to have working. These are listed in a separate folder on Github.

* [Special Setup](https://github.com/Tougher-Together-DnD/common-assets/tree/main/Special%20Setup)

### Invite Your Players to the Game
Invite your players make the final adjustments to their sheets and tokens.

Have Fun!

<!-- Github Links -->
[Markdown-URL]: https://github.com/Tougher-Together-DnD/common-assets/blob/main/Roll20%20Game%20Files/RAW%20Markdown/Handouts/Make%20A%20Game.md "Make a game markdown."
[LFG-Template-URL]: https://github.com/Tougher-Together-DnD/common-assets/blob/main/Templates/Krita%20Art%20Templates/Roll20%20LFG%20Image%20Template.kra
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
