$( () => {
    
    $.widget('custom.buttonWidget', {

        options: {
            red: 255,
            green: 255,
            blue: 255
        },

        _create: function() {
            this.element.addClass('custom-colorize');

            this.changer = $('<button>', {
                text: 'Meme',
                class: 'custom-colorize-changer'
            })
            .appendTo( this.element)
            .button();

            this._on( this.changer, {
                click: "change"
            });

            this._refresh();
        },

        _refresh: function() {
            this.element.css('background-color', 'rgb(' + 
            this.options.red + ', ' + 
            this.options.green + ', ' +
            this.options.blue + ')');
        },

        change: function() {
            if (this.options.green == 255 && this.options.blue == 255 && this.options.red == 255) {
               this.options = {
                    red: 255,
                    green: 0,
                    blue: 0
                }
                this._refresh();
            } else {
                this.options = {
                    red: 255,
                    green: 255,
                    blue: 255
                }
                this._refresh();
            }
        },

        _setOption: function(key, value) {
            switch (key) {
                case 'width':
                this._button.width(value);
                break;
                case 'color':
                this._button.css('background-color', value);
                break;
            }
        }
    });

    $('.draggable').buttonWidget();
    // $('.draggable').buttonWidget('option', {width: 100, color: '#ff0000'});
    
});

//     $.widget("custom.buttonWidget", {
//         _create: function() { 
//            this._button = $("<button>"); 
//            this._button.text("custom widget");
//            this._button.width(this.options.width) 
//            this._button.css("background-color", this.options.color);
//            this._button.css("position", "absolute");   
//            this._button.css("left", "0");
//            this._button.css("top", "0")             
//            $(this.element).append(this._button);
//         },
//         _setOption: function(key, value) { 
//         switch (key) { 
// /*             case "width": 
//             this._button.width(value); 
//             break;  */
//             case "color":
//             this._button.css("background-color",value);
//             break;
//             case "move":
//             this._button.css("left", value);
//             break;
//             }
//         },

// /*         moveDerp: function(distance) {
//             var x = (document.documentElement.clientWidth/2) -200;
//             this._button.css("left", x );
//         } */

//      });
//      $("#div-for-custom-widget").buttonWidget();
//      $("#div-for-custom-widget").buttonWidget("option", {move:"300px", color:"#de8cff"});
// /*      $("#div-for-custom-widget").buttonWidget("moveDerp"); */
// });