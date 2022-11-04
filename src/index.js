import Phaser from 'phaser';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
    
    }
      
    create ()
    {
    
    }

    update(){

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity:{y:450},
            debud: true
        }
    },
    scene: MyGame
};

const game = new Phaser.Game(config);
