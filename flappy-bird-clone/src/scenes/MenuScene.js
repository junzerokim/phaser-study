import BaseScene from './BaseScene';

class MenuScene extends BaseScene {
  constructor(config) {
    super('MenuScene', config);

    this.menu = [
      { scene: 'PlayScene', text: 'Play' },
      { scene: 'ScoreScene', text: 'Score' },
    ];
  }

  create() {
    super.create();

    this.createMenu(this.menu);
  }
}

export default MenuScene;
