<!-- Macro Bar: Range3D -->
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

Character sheet JSON hard copy: [Macro Bar: Range3D][Character Sheet]

### Macros
*Note: Macros to be shared between Players and Dungeon Masters, or are intended as universal token actions, should be loaded into game under "Collections" tab.*

* Get-Range \* <sup>1</sup>

#### Required API Scripts:  
<span>\*</span> Requires special setup   
<span>1</span> [Range3D v1.03 MOD][Range3D-URL] *Custom Download*

<!-- *********************************************************************** -->
<!-- GM NOTES AREA -->
### About
Using this API Script and a bit of work, you can add a third dimension to your games. By storing elevation and depth information in Bar 3, tokens can be compared to get accurate ranges between them.

#### Pros:
* Readable way of representing Z-dimension distances on a flat map.
* Calculates accurate distances.

#### Cons:
* Requires a subscription for API scripts.
* Every character sheet represented by a token, needs its default token changed, where Bar 3 is visible.
  
### Setup
1. Upload API Script to game. [Range3D v1.03 MOD][Range3D-URL] is a modded version that takes the value of Bar 3 to perform the math on. It then converts distances into the map units.

1. Using the "Game Settings" page set the "Game Default Settings" tokens to have Bar 3 0/0 "Visible ot Everyone". Also set the "Default Sheet Settings" to make bar 3 min and max values 0. Creatures grabbed from the compendium will have the 3rd bar as desired 

1. Launch the game and use the "Apply Default Settings" to all the layers. This will change every token on any of your maps to begin displaying the third bar as desired.

1. Unfortunately, Characters in Modules, or Addons, when drop on the map will continue to produce the character sheets default token. This is the most tedious step. Find the token page and go through each token adding the 3rd bar as desired. Then be sure to make it the default token. This can be made easier to perform by opening the character sheets up and using the [VTT Enhancement Suite][VTT Enhancment Suite-URL] to change the token.

### Usage
Setting the macro of this sheet in the macro bar, or copy it as a token action in the *Collection* tab. Select a token and activate the macro. You will be asked to click the target and chat message will record the distance.

<!-- Github Links -->
[Character Sheet]: https://github.com/Tougher-Together-DnD/common-assets/blob/main/Special%20Setup/Range3D/Character%20Sheets/Macro%20Bar%20Range3D.json "JSON config for "Macro Bar: Range3D" character sheet."

<!-- API URLs -->
[Range3D-URL]: https://raw.githubusercontent.com/Tougher-Together-DnD/common-assets/main/Special%20Setup/Range3D/API%20Script/Range3D%20v1.03%20MOD.js

<!-- External Tools -->
[Github-URL]: https://github.com/Tougher-Together-DnD/common-assets
[Firefox-URL]: https://www.mozilla.org
[VTT Enhancement Suite-URL]: https://addons.mozilla.org/en-US/firefox/addon/roll20-enhancement-suite/
