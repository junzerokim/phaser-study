import BaseScene from './BaseScene';

class MenuScene extends BaseScene {
  constructor(config) {
    super('MenuScene', config);

    this.menu = [
      { scene: 'PlayScene', text: 'Play' },
      { scene: 'ScoreScene', text: 'Score' },
      { scsne: null, text: 'Exit' },
    ];
  }

  create() {
    super.create();

    this.createMenu(this.menu, this.setupMenuEvents.bind(this));
  }

  setupMenuEvents(menuItem) {
    const textGO = menuItem.textGO;
    textGO.setInteractive();
    console.log(this);
    textGO.on('pointerover', () => {
      textGO.setStyle({ fill: '#ff0' });
      textGO.setScale(1.1);
    });

    textGO.on('pointerout', () => {
      textGO.setStyle({ fill: '#fff' });
      textGO.setScale(1);
    });

    textGO.on('pointerup', () => {
      menuItem.scene && this.scene.start(menuItem.scene);

      if (menuItem.text === 'Exit') {
        this.game.destroy(true);
      }
    });
  }
}

export default MenuScene;
