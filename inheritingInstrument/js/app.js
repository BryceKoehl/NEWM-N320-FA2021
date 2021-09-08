class Intsruments {
    constructor(family, verb, loud) {
        this.family = family;
        this.verb = verb;
        this.loud = loud;
        
    }

    play() {
        console.log( this.family + this.playVerb + "at" + this.loud);
    }
}
    
class woodwind extends Intsruments {
    constructor() {
        super("clarinet", "blows", "mezz-piano")
    }
}

class strings extends Intsruments {
    constructor() {
        super("viola", "picks", "mezz-forte")
    }
}

class percussion extends Intsruments {
    constructor() {
        super("xylophone", "rings", "fortissimo")
    }
}


let instrument = [];
instrument[0] = new woodwind();
instrument[1] = new strings();
instrument[2] = new percussion();

instrument.forEach((instrument) => {
    instrument.play();
})