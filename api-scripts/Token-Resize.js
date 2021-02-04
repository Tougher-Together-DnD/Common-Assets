//


var TokenResize = TokenResize || (function() {
    'use strict';
 
    var version  = '0.2.0',
        lastUpdate = 1440332940,
        schemaVersion = 0.7,
        gridSize = 70,


    
    CheckInstall = function() {
        log('-=> TokenResize v'+version+' <=-  ['+(new Date(lastUpdate*1000))+']');
        
        if( ! _.has(state,'TokenResize') || state.TokenResize.version !== schemaVersion) {
            log(' > Updating Schema to v'+schemaVersion+' <');
            switch(state.TokenResize && state.TokenResize.version) {
                case 0.1:
                    state.TokenResize.config.AutoResize = false;
                    state.TokenResize.version = schemaVersion;
                    break;
                default:
                    state.TokenResize = {
                        version: schemaVersion,
                        config: {
                            PlayerResize: false,
                            isSelected: true,
                            AutoResize: false
                        },
                    };
                    break;
            }
        }
    },


    ch = function (c) {
        var entities = {
            '<' : 'lt',
            '>' : 'gt',
            "'" : '#39',
            '@' : '#64',
            '{' : '#123',
            '|' : '#124',
            '}' : '#125',
            '[' : '#91',
            ']' : '#93',
            '"' : 'quot',
            '-' : 'mdash',
            ' ' : 'nbsp'
        };
 
        if(_.has(entities,c) ){
            return ('&'+entities[c]+';');
        }
        return '';
    },


    getConfigOption_AutoResize = function() {
        var text = (state.TokenResize.config.AutoResize ? 'On' : 'Off' );
        return '<div>'
            +'<b>Auto Resize:</b> '
            +'<a href="!tr --auto-resize">'
                +text
            +'</a>'
        +'</div>';
    },


    getConfigOption_PlayerResize = function() {
        var text = (state.TokenResize.config.PlayerResize ? 'On' : 'Off' );
        return '<div>'
            +'<b>Player Resize:</b> '
            +'<a href="!tr --player-resize">'
                +text
            +'</a>'
        +'</div>';
    },


    getConfigOption_isSelected = function() {
        var text = (state.TokenResize.config.isSelected ? 'Off' : 'On' );
        return '<div>'
            +'<b>Selection Required:</b> '
            +'<a href="!tr --is-selected">'
                +text
            +'</a>'
        +'</div>';
    },


    getAllConfigOptions = function() {
        return getConfigOption_AutoResize() + getConfigOption_PlayerResize() + getConfigOption_isSelected();
    },


    showHelp = function(who) {
            
        sendChat('','/w '+who+' '
        +'<div style="border: 1px solid black; background-color: white; padding: 3px 3px;">'
            +'<div style="font-weight: bold; border-bottom: 1px solid black;font-size: 130%;">'
                    +'TokenResize v'+version
                +'<div style="clear: both"></div>'
            +'</div>'
            +'<div style="padding-left:10px;margin-bottom:10px;margin-top:10px;">'
                +'<p>TokenResize allows players to resize their tokens when unlocked.'
            +'</div>'
            +'<b>Commands</b>'
            +'<div style="padding-left:10px;">'
                +'<div style="padding-left: 10px;padding-right:20px">'
                    +'<b><span style="font-family: serif;"> !tr</span></b> '+ch('-')+' Command to activate script. Used in conjunction with the following options:'
                    +'<ul>'
                        +'<li><b><span style="font-family: serif;">--help</span></b> '+ch('-')+' Shows the Help screen</li>'
                        +'<li><b><span style="font-family: serif;">--auto-resize</span></b> '+ch('-')+' Sets whether TokenResize will auto resize based upon a token'+ch("'")+'s weight size on its rollable table.</li>'
                        +'<li><b><span style="font-family: serif;">--player-resize</span></b> '+ch('-')+' Sets whether TokenResize allows for players to resize.</li>'
                        +'<li><b><span style="font-family: serif;">--is-selected</span></b> '+ch('-')+' Sets whether TokenResize requires selection.</li>'
                    +'</ul>'
                +'</div>'
            +'</div>'
            +getAllConfigOptions()
        +'</div>'
        );
    },
    
    autoChange = function(obj, prev) {


        if ('card' !== obj.get("subtype") && obj.get("sides") && '' !== obj.get("represents")) {
            var aid = obj.get("imgsrc"),
                tid = findObjs({
                    type: 'tableitem',
                    avatar: aid
                }, { caseInsensitive: true })[0],
                    weight,
                    pheight;
                if(tid) {
                    weight = tid.get("weight");
                    pheight = obj.get("height");
                    
                    if(tid.get("weight") <= 0 || !state.TokenResize.config.AutoResize) {
                        //showHelp();
                        return;  // Even though we use weight for the tile size, let's make sure there is something there to avoid errors.
                    };
                    if ((gridSize * weight) !== obj.get('width')) {
                        obj.set({
                            width: (gridSize * weight),
                            height: (gridSize * weight)
                        });
                        if ((gridSize * weight) > gridSize) {
                            obj.set({
                                top: (prev.top + ((gridSize / 2) * (weight - (pheight / gridSize)))),
                                left: (prev.left + ((gridSize / 2) * (weight - (pheight / gridSize))))
                            })
                        } else {
                            obj.set({
                                top: (prev.top - ((gridSize / 2) * ((pheight / gridSize) - weight))),
                                left: (prev.left - ((gridSize / 2) * ((pheight / gridSize) - weight)))
                            })
                        }
                    } else {
                        return;
                    }
                }
        }
    },
    
    handleInput = function(msg) {
        var args, who, obj, prev;
 
        if (msg.type !== "api") {
    		return;
		}
        
        var selected = msg.selected;


        who=getObj('player',msg.playerid).get('_displayname').split(' ')[0];
		args = msg.content.split(" ");
    	switch(args[0]) {
            case '!tr':
                switch(args[1]) {
    				case '--auto-resize':
                        state.TokenResize.config.AutoResize=!state.TokenResize.config.AutoResize;
                        sendChat('','/w '+who+' '
                            +'<div style="border: 1px solid black; background-color: white; padding: 3px 3px;">'
                                +getConfigOption_AutoResize()
                            +'</div>'
                        );
                        break;
					case '--player-resize':
                        state.TokenResize.config.PlayerResize=!state.TokenResize.config.PlayerResize;
                        sendChat('','/w '+who+' '
                            +'<div style="border: 1px solid black; background-color: white; padding: 3px 3px;">'
                                +getConfigOption_PlayerResize()
                            +'</div>'
                        );
                        break;


                    case '--is-selected':
                        state.TokenResize.config.isSelected=!state.TokenResize.config.isSelected;
                        sendChat('','/w '+who+' '
                            +'<div style="border: 1px solid black; background-color: white; padding: 3px 3px;">'
                                +getConfigOption_isSelected()
                            +'</div>'
                        );
                        break;
                        
                    case '--help':
        				showHelp(who);
						break;
				}
                if( args[2] && !state.TokenResize.config.PlayerResize && !playerIsGM(msg.playerid) ) {
                    sendChat("", "/desc Check player resize.");
					return;
                } else if ( args[2] && !state.TokenResize.config.isSelected && !selected ) { // Only allows a token to be resized if selected. This prevents players from resizing tokens that don't belong to them.
            		sendChat("", "/desc Select token and try again.");
        			return; // quit if nothing selected
        		} else {
                    if(args[2]){
                        var obj = getObj("graphic", args[1]),
                            ptop = obj.get('top'),
                            pleft = obj.get('left'),
                            pheight = obj.get('height'),
                            weight = args[2];
    						if( (gridSize * weight) !== obj.get('width') ) {
        			            obj.set({
            					width: (gridSize * weight),
            					height: (gridSize * weight)
        			            })
                                if( (gridSize * weight) > gridSize ) {
                                    obj.set({
                                        top: (ptop + ((gridSize / 2) * (weight - (pheight / gridSize)))),
                                        left: (pleft + ((gridSize / 2) * (weight - (pheight / gridSize))))
                                    })
                                } else {
                                    obj.set({
                                        top: (ptop - ((gridSize / 2) * ((pheight / gridSize) - weight))),
                                        left: (pleft - ((gridSize / 2) * ((pheight / gridSize) - weight)))
                                    })
                                }
            		        }
                    }
				}
            break;
		} 
	},


	RegisterEventHandlers = function() {
		on('change:graphic', autoChange);
        on('chat:message', handleInput);
	};
 
	return {
		RegisterEventHandlers: RegisterEventHandlers,
		CheckInstall: CheckInstall
	};


}());


on("ready",function(){
	'use strict';
        TokenResize.CheckInstall(); 
        TokenResize.RegisterEventHandlers();
});
