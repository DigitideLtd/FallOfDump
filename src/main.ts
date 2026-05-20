import Phaser from 'phaser';
import { PlayScene } from './scenes/PlayScene';

const GAME_WIDTH = 480;
const GAME_HEIGHT = 270;

new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#0b0d12',
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
  },
  scene: [PlayScene],
});
