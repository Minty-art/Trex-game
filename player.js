class Player {
    constructor(){
       this.index = null;
      
    //   this.score = null;
    //   this.rank = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }

    // getEndPlace(){
    //    var playerAtEndRef = database.ref('playersAtEnd');
    //   playerAtEndRef.on("value", (data)=>{
    //     this.rank = data.val();
    //    })
  
    // }
    // // static updateEndPlace(rank){
    // //   database.ref('/').update({
    // //     carsAtEnd: rank
    // //   });
    // // }
    // update(){
    //   var playerIndex = "players/player" + this.index;
    //   database.ref(playerIndex).set({
    //     score: this.score
    //   });
    // }
  
    // static getPlayerInfo(){
    //   var playerInfoRef = database.ref('players');
    //   playerInfoRef.on("value",(data)=>{
    //     allPlayers = data.val();
    //   })
    // }
  }
  