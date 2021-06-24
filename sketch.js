var gameState;
var score;

var database;

var player1, player2, player3, players;
var playerCount;
var game;
var index;
var player;
var form;

function preload(){
    database = firebase.database();
}

function setup(){
    game = new Game();
    game.getState();
    game.start(); 
}

function draw(){
    if (playerCount === 2){
        gameState = 1;
    }
}