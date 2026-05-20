import Phaser from 'phaser';

const PLAYER_SIZE = 16;
const PLAYER_SPEED = 120; // pixels per second

export class PlayScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Rectangle;
  private keys!: {
    up: Phaser.Input.Keyboard.Key;
    down: Phaser.Input.Keyboard.Key;
    left: Phaser.Input.Keyboard.Key;
    right: Phaser.Input.Keyboard.Key;
    w: Phaser.Input.Keyboard.Key;
    a: Phaser.Input.Keyboard.Key;
    s: Phaser.Input.Keyboard.Key;
    d: Phaser.Input.Keyboard.Key;
  };

  constructor() {
    super('PlayScene');
  }

  create() {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, 12, 'FAL M2 — WASD / arrows to move', {
        fontFamily: 'system-ui, sans-serif',
        fontSize: '10px',
        color: '#8b8f99',
      })
      .setOrigin(0.5, 0);

    this.player = this.add
      .rectangle(width / 2, height / 2, PLAYER_SIZE, PLAYER_SIZE, 0xf5d76e)
      .setStrokeStyle(1, 0xb38f2a);

    const kb = this.input.keyboard!;
    this.keys = {
      up: kb.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      down: kb.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
      left: kb.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: kb.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      w: kb.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      a: kb.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      s: kb.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      d: kb.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    };
  }

  update(_time: number, delta: number) {
    const dt = delta / 1000;
    let dx = 0;
    let dy = 0;

    if (this.keys.left.isDown || this.keys.a.isDown) dx -= 1;
    if (this.keys.right.isDown || this.keys.d.isDown) dx += 1;
    if (this.keys.up.isDown || this.keys.w.isDown) dy -= 1;
    if (this.keys.down.isDown || this.keys.s.isDown) dy += 1;

    if (dx !== 0 && dy !== 0) {
      const inv = 1 / Math.SQRT2;
      dx *= inv;
      dy *= inv;
    }

    this.player.x += dx * PLAYER_SPEED * dt;
    this.player.y += dy * PLAYER_SPEED * dt;

    const half = PLAYER_SIZE / 2;
    const { width, height } = this.scale;
    this.player.x = Phaser.Math.Clamp(this.player.x, half, width - half);
    this.player.y = Phaser.Math.Clamp(this.player.y, half, height - half);
  }
}
