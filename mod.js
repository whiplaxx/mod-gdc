javascript:(

function(){

/* == VARIAVEIS == */

/* Variaveis do tema */

/* cor do fundo do canvas e do painel de controle */
var backgroundColor = "black";
/* cor da fonte do texto do painel de controle */
var fontColor = "white";

/* cor de fundo das divisórias do painel de controle (ex: GLYPH SETS, SELECT LAYER) */
var headerDivisionBgColor = "white";
/* cor da fonte das divisórias */
var headerDivisionFontColor = "black";

/* cor da borda do glyph selecionado atualmente (o que aparece no canto esquerdo em baixo) */
var vectorBorderColor = "red";
/* tamanho da borda (em pixel) */
var vectorBorderSize = '1';

/* cor de fundo do menu de seleção de glyphs */
var glyphContBgColor = "#6f6f6f";

/* cores de fundo e fonte dos inputs, selects e buttons do painel */
var fieldsBgColor = "#6f6f6f";
var fieldsFontColor = "white";

/* cor de fundo e fonte dos spans do painel de controle */
var spansBgColor = "white";
var spansFontColor = "black";
/* == # == */


/* == TEMA == */

/* Números das linhas e colunas (no canvas)  */
/* Num funciona não sei pq
var sheet = window.document.styleSheets[0];
sheet.insertRule(".colNum { color: white; } .rowNum { color: white; }", sheet.cssRules.length );
*/

/* Glyph selecionado (no canto esquerdo em baixo) */
document.getElementsByClassName('vector')[0].style.border = vectorBorderSize+"px solid "+ vectorBorderColor ;
document.getElementsByClassName('canvas_container')[0].style.backgroundColor = backgroundColor;

/* O painel de controle */
var controlsContainer = document.getElementsByClassName("controls_container")[0];
controlsContainer.style.backgroundColor = backgroundColor;
controlsContainer.style.color = fontColor;

/* Divisórias no painel de controle */
var headerDivision = controlsContainer.getElementsByTagName("h3");
for( var i = 0; i < headerDivision.length; i++ ){
    headerDivision[i].style.backgroundColor = headerDivisionBgColor;    
    headerDivision[i].style.color = headerDivisionFontColor;    
};

/* Glyphs mostrados no painel de controle (Ex: map keys, glyphs de cada layer da celula selecionada) */
var vectors = controlsContainer.getElementsByClassName("vector");
for( var i = 0; i < vectors.length; i++ ){ 
    vectors[i].getElementsByTagName("svg")[0].style.backgroundColor = "white";
    vectors[i].getElementsByTagName("svg")[0].style.border = vectorBorderSize+"px solid "+ vectorBorderColor ;
};

/* Menu de seleção de glyphs */
document.getElementById("glyphcont").style.backgroundColor = glyphContBgColor;

/* Inputs do painel de controle */
var inputs = controlsContainer.getElementsByTagName("input");
for( var i = 0; i < inputs.length; i++ ){
    inputs[i].style.backgroundColor = fieldsBgColor;
    inputs[i].style.color = fieldsFontColor;
};

/* Buttons do painel de controle */
var buttons = controlsContainer.getElementsByTagName("button");
for( var i = 0; i < buttons.length; i++ ){
    buttons[i].style.backgroundColor = fieldsBgColor;
    buttons[i].style.color = fieldsFontColor;
};

/* Selects do painel de controle */
var selects = controlsContainer.getElementsByTagName("select");
for( var i = 0; i < selects.length; i++ ){
    selects[i].style.backgroundColor = fieldsBgColor;
    selects[i].style.color = fieldsFontColor;
};

/* Spans do painel de controle */
var spans = controlsContainer.getElementsByTagName("span");
for( var i = 0; i < spans.length; i++ ){
    spans[i].style.backgroundColor = spansBgColor;
    spans[i].style.color = spansFontColor;
};

/* == # == */


/* == SHORTCUTS == */

window.glyphSelectNumber = '';

document.onkeydown = function(e){

    /* MUDAR TAMANHO GLYPH */
    if( e.which == 84 ){ /* t */
        document.getElementsByTagName("button")[22].click(); /* diminuir glyph */
    }else if( e.which == 89){ /* y */
        document.getElementsByTagName("button")[23].click(); /* aumentar glyph */
    
    /* MOVIMENTAR A TELA */
    }else if( !e.shiftKey ){
        if( e.which == 74 ){ /* j */
            document.getElementsByClassName("move_x")[0].getElementsByTagName('button')[0].click(); /* esquerda */
        }else if( e.which == 75 ){ /* k */
            if( e.altKey ){ /* + alt */
                document.getElementsByClassName("move_y")[0].getElementsByTagName('button')[0].click(); /* cima */
            }else{
                document.getElementsByClassName("move_y")[1].getElementsByTagName('button')[0].click(); /* baixo */
            };
        }else if( e.which == 76 ){ /* l */
            document.getElementsByClassName("move_x")[0].getElementsByTagName('button')[2].click(); /* direita */
        };

    /* PASSAR PAGINAS DE GLYPHS */
    }else if( e.shiftKey && e.which == 188 ){ /* shift + < */
        document.getElementsByTagName('button')[ 16 ].click(); /* anterior */		
    }else if( e.shiftKey && e.which == 190 ){ /* shift + > */
        document.getElementsByTagName('button')[ 17 ].click(); /* proximo */

    /* SELECIONAR GLYPH */
    }else if( (e.shiftKey && e.which >= 48 && e.which < 58) || e.shiftKey && e.key == 'Dead' ){ /* shift + {numero} */
        if( e.key == 'Dead' ){ var number = 6; }
        else{ var number = e.which % 48; };
        switch( number ){
            case 0: glyphSelectNumber += '0'; break;
            case 1: glyphSelectNumber += '1'; break;
            case 2: glyphSelectNumber += '2'; break;
            case 3: glyphSelectNumber += '3'; break;
            case 4: glyphSelectNumber += '4'; break;
            case 5: glyphSelectNumber += '5'; break;
            case 6: glyphSelectNumber += '6'; break;
            case 7: glyphSelectNumber += '7'; break;
            case 8: glyphSelectNumber += '8'; break;
            case 9: glyphSelectNumber += '9'; break;
            default: break;
        };
        if( glyphSelectNumber != '100' && glyphSelectNumber.length > 2 ){
            glyphSelectNumber = ''; glyphSelectNumber = String(number);
        };
        if( parseInt( glyphSelectNumber ) > 0 ){
            document.getElementById('glyphcont').getElementsByTagName('img')[ parseInt(glyphSelectNumber) - 1 ].click();
        };
    };
};

/* == # == */
}()

)
