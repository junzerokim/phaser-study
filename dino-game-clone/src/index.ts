import Phaser from 'phaser';
import PreloadScene from './scenes/PreloadScene';
import PlayScene from './scenes/PlayScene';

export const PRELOAD_CONFIG = {
  cactusesCount: 6,
};

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1000,
  height: 340,
  pixelArt: true,
  transparent: true, // 배경색 없음
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  scene: [PreloadScene, PlayScene],
};

new Phaser.Game(config);

function preload() {
  this.load.image('sky', 'assets/sky.png');
}

function create() {
  this.add.image(400, 300, 'sky');
}
