class Form{
    constructor(){
        this.button = createButton('Play')
        //this.greeting = createElement('h2');
        // this.title = createElement('h2');
        // this.reset = createButton('Reset')
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        
      }
    
      display(){
        this.button.position(300, 200);
        // this.reset.position(displayWidth-100,20);
    
        this.button.mousePressed(()=>{
        
          this.button.hide();
          playerCount+=1;
          player.index = playerCount;
        //   player.update();
          player.updateCount(playerCount);
        //this.greeting.html("Hello Player 1" )//+ playerCount
        //this.greeting.position(300, 200);
        });
    
        // this.reset.mousePressed(()=>{
        
        // });
    
      }
    
    
}