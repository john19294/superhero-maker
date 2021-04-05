var canvas= new fabric.Canvas('myCanvas');
var block_image_width=30;
var block_image_height=30;
var player_x=10;
var player_y=10;//specifying the position in terms of x and y coordinantes
var player_object="";//this variable holds object type data
//In fabric library images are treated as objects
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x

});
canvas.add(player_object);
});



}
function new_image(src_url)//fun with input(parameter) 
{ fabric.Image.fromURL(src_url, function(Img) { 
    //creates an img object from a URL & stores in Img variable 
    block_image_object = Img;//storing Img obj in var block_image_object 
    block_image_object.scaleToWidth(block_image_width);//setting width 
    block_image_object.scaleToHeight(block_image_height);//settinh height 
    block_image_object.set({//setting the top & left margins 
        top:player_y, left:player_x }); canvas.add(block_image_object);//adding the image object to the canvas
     }); }
    player_update();
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
var keypressed=e.keyCode;
if(e.shiftKey==true && keypressed=='80'){
console.log("shift and p pressed together");
block_image_width=block_image_width+10;
block_image_height +=10;
document.getElementById("current_width").innerHTML=block_image_width
document.getElementById("current_height").innerHTML=block_image_height


}
if(e.shiftKey==true && keypressed=='77'){
console.log("shift and m pressed together");
block_image_width=block_image_width-10;
block_image_height -=10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height


}
if(keypressed=='69'){
    new_image('hulk_face.png');

}
if(keypressed=='70'){
    new_image('hulk_left_hand.png');
    }
    if(keypressed=='71'){
        new_image('hulk_legs.png');
        }
        if(keypressed=='72'){
            new_image('hulk_right_hand.png');
            }
            if(keypressed=='73'){
                new_image('hulkd_body.png');
                }
                //end of hulk parts
                if(keypressed=='74'){
                    new_image('ironman_body.png');
                    }
                    if(keypressed=='75'){
                        new_image('ironman_face.png');
                        }
                        if(keypressed=='76'){
                            new_image('ironman_left_hand.png');
                            }
                            if(keypressed=='77'){
                                new_image('ironman_legs.png');
                                }
                                if(keypressed=='78'){
                                    new_image('ironman_right_hand.png');
                                    }
                                    //end of iron man parts
                                    if(keypressed=='79'){
                                        new_image('spiderman_body.png');
                                        }
                                        if(keypressed=='80'){
                                            new_image('spiderman_face.png');
                                            }
                                            if(keypressed=='81'){
                                                new_image('spiderman_left_hand.png');
                                                }
                                                if(keypressed=='82'){
                                                    new_image('spiderman_legs.png');
                                                    }
                                                    if(keypressed=="83"){
                                                        new_image('spiderman_right_hand.png');
                                                    }
                                                    //end of spiderman parts 
                                                    if(keypressed=="84"){
                                                        new_image('thor_face.png');
                                                    }
                                                    if(keypressed=="85"){
                                                        new_image('thor_left_hand.png');
                                                    }
                                                    if(keypressed=="86"){
                                                        new_image('thor_right_hand.png');
                                                    }
                                                    //end of thor parts
                                                    
                                                    
                                                
                                            
                                        
                                
                            
                        
                        
                    
                
                        



}