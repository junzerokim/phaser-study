import { Player } from '../entities/Player';
import { SpriteWithDynamicBody } from '../type';

class PlayScene extends Phaser.Scene {
  player: Player;
  startTrigger: SpriteWithDynamicBody;

  get gameHeight() {
    return this.game.config.height as number;
  }

  constructor() {
    super('PlayScene');
  }

  create() {
    this.createEnviroment();
    this.createPlayer();

    this.startTrigger = this.physics.add
      .sprite(0, 10, null)
      .setAlpha(0)
      .setOrigin(0, 1);

    this.physics.add.overlap(this.startTrigger, this.player, () => {
      console.log('충돌');
    });
  }

  createPlayer() {
    this.player = new Player(this, 0, this.gameHeight);

    this.player
      .setGravityY(5000)
      .setCollideWorldBounds(true)
      .setBodySize(44, 92);
  }

  createEnviroment() {
    this.add.tileSprite(0, this.gameHeight, 88, 26, 'ground').setOrigin(0, 1);
  }
}

export default PlayScene;
