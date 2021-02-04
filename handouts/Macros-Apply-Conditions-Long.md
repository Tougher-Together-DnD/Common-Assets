<br>

***You can access these macros under the "Attributes and Abilities" Tab***  
<br>

**Character Sheet Macros**  
These Macros are depreciated and reserved for backup.

* Apply-Conditions-Long
* Condition-Remove-All
* Condition-Blinded
* Condition-Charmed
* <mark>Status</mark>-Concentration
* Condition-Deafened
* Condition-Exhaustion
* Condition-Frightened
* Condition-Grappled
* Condition-Incapacitated
* <mark>Spell</mark>-Inspiration
* Condition-Invisible
* Condition-Paralyzed
* Condition-Petrified
* Condition-Poisoned
* Condition-Prone
* Condition-Restrained
* Condition-Stunned
* COndition-Unconscious

**Required API:**  
***All Macros*** [TokenMod](https://github.com/Roll20/roll20-api-scripts/tree/master/TokenMod)

# Intent    
Until I started using the [CombatMaster API Script](https://github.com/Roll20/roll20-api-scripts/tree/master/CombatMaster), I would apply *conditions* and *statuses* with a collection of macros. It would use the TokenMod API to apply the status marker then report to chat a brief description of the conditions game mechanics.

CombatMaster can be unruly to work with. It may even be bothersome to some players.

With this collection nice looking explanations and token markers can still be used.

Currently the token markers mirror the default icons of CombatMaster. These macros and that API can be ran in parallel. 2 different descriptions will appear in chat tho.

I suggest you change code to apply EasySee icons instead of the default markers. And add more conditions and statuses to reflect the scenarios your game will experience.
