import WordPressMadara from './templates/WordPressMadara.mjs';

export default class FBSquadz extends WordPressMadara {

    constructor() {
        super();
        super.id = 'fbsquadz';
        super.label = 'FBSquadz';
        this.tags = ['portuguese', 'scanlation' ];
        this.url = 'https://fbsquadz.com';
    }
}
