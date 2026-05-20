import Phaser from 'phaser';

export class HelloScene extends Phaser.Scene {
  constructor() {
    super('HelloScene');
  }

  create() {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 2 - 24, 'Fall Of Dump', {
        fontFamily: 'system-ui, sans-serif',
        fontSize: '64px',
        color: '#f5f5f5',
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height / 2 + 40, 'hello, world', {
        fontFamily: 'system-ui, sans-serif',
        fontSize: '24px',
        color: '#8b8f99',
      })
      .setOrigin(0.5);

    this.scale.on('resize', (size: Phaser.Structs.Size) => {
      this.cameras.main.setSize(size.width, size.height);
      this.children.list.forEach((child) => {
        if (child instanceof Phaser.GameObjects.Text) {
          child.setX(size.width / 2);
        }
      });
    });
  }
}
