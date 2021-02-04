<br>

***You can access these macros under the "Attributes and Abilities" Tab***  
<br>

**Character Sheet Macros**  
These Macros are intended for the Players. Set them to "Show in Macro Bar", then right click on the button and rename or color to hearts content. Crafting a Player control panel on the bottom of the screen.

*\*Some macros are duplicated in [Macros: DM] handout, or [global lists](https://github.com/Tougher-Together-DnD/common-assets/tree/main/macro-configs).*

* Ability-Check*
* Calendar<sup>4</sup>
* Carry-Tokens-Menu<sup>1</sup>
* Combat-Master-Menu<sup>2</sup> <sup>3</sup>
* Combat-Master-Next-Turn<sup>2</sup> <sup>3</sup>
* Get-Range<sup>7</sup>
* Heal-Target<sup>6</sup>
* PC-Info
* Quick-Calculator
* Resize-Full<sup>5</sup>
* Resize-Half<sup>5</sup>
* Roll-Initiative
* Saving-Throw*
* Show-URL-Image
* Skill-Check*
* Special-Effect
* Whisper-DM
* Whisper-Target-Token

**Required API:**  
<sup>1</sup> [CarryTokens](https://github.com/Roll20/roll20-api-scripts/tree/master/CarryTokens)  
<sup>2</sup> [CombatMaster](https://github.com/Roll20/roll20-api-scripts/tree/master/CombatMaster)  
<sup>3</sup> [libTokenMarkers](https://github.com/Roll20/roll20-api-scripts/tree/master/CarryTokens)  
<sup>4</sup> [Multi-World-Calendar](https://github.com/Tougher-Together-DnD/common-assets/blob/main/api-scripts/Multi-World-Calendar.js)  
<sup>5</sup> [Resize-Token](https://github.com/Tougher-Together-DnD/common-assets/blob/main/api-scripts/Token-Resize.js)  
<sup>6</sup> [TokenMod](https://github.com/Roll20/roll20-api-scripts/tree/master/TokenMod)  
<sup>7</sup> [True-Range](https://github.com/Tougher-Together-DnD/common-assets/blob/main/api-scripts/True-Range.js)  
**\*** If it does not work copy/paste [failsafe code](https://github.com/Tougher-Together-DnD/common-assets/blob/main/macro-configs/failsafe-ability-saving-skills.txt).

# Intent   
Using a character sheet is a Roll20 trick for managing macros. Tools such as the transmogrifier only allow moving Pages, Characters, Decks, Handouts
, Rolltables, and Jukeboxplaylist.

Macros can not be moved from one game to another using the Roll20 migration tool.

By placing the macros in a character sheet, and moving that character around, this can be accomplished.

### Pros:
* Can move character sheets without a subscription.
* Different sheets can be used for different sets of macros, making management easier.
* Macros stored this way can be toggled for "Show in Macro Bar" and renamed in the game's User Interface (UI).

### Cons:
* Character sheets are resource intensive. They have many fields and logic that will go mostly unused if only storing macros. Could negatively impact game performance.
* Macros toggled to "Show as Token Action" only appear when a token representing this character sheet are selected. As opposed to macros in *Collections* tab. They will appear when ***ANY*** Token is selected.

# Work Flow
Create a character sheet. Under the **Attributes and Abilities** Tab add macros.

When doing nested macros, be sure to reference other macros in the same character sheet as ~Macro-Name. As opposed to #Macro-Name for globally accessible macros stored under the **Collections** tab of the game.

Add macros that only the "Controller" of this character should use. You can edit the sheet so the "Can Be Edited & Controlled By" field includes select users or by all players.

Macros for universal token actions or you want to control availability to the players during play reserve for **Collections** Tab.

Using the [VTT Enhancement Suite](https://justas-d.github.io/roll20-enhancement-suite/index.html) global macros can be exported/imported as JSON files. Extremely handed tool (no subscription needed).

Name the macro sheet, add appropriate notes and save. Then move the sheet to your new game.

# Moving Options

**A. VTT Enhancement Suite**  
*No Subscription available*, you can export the macro sheet using the VTT tools. 

This will create a JSON file of the data that you can import into games you create. Or have DM permission that allow you to create characters. You can also over write blank character sheets with this JSON data.

**Concerns:** Character sheets change over time. The VTT team have to work to accommodate those changes and features. And Roll20 has no interest in making that easy for them. Hence some things will break during transfer.

**B. Character Vault**  
*You have a Subscription, but Game Creator does not*. The creator of the game set game settings to allow importing of characters with limited vault access. The Game creator can have a free account and paying Roll20 users can export from their Vaults into that game.

You can move the macro sheet into your paid for vault and export it into other games.

**C. Transmogrifier**
*You are game creator and are a Roll20 Subscriber.* As mentioned earlier the Roll20 migration tool, transmogrifier, will move characters from one game to another that you are own.

This probably the the quickest and most intuitive way.
