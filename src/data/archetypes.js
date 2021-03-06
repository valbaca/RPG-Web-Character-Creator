export default {
    AverageHuman: {
        name: 'Average Human',
        book: 'CRB',
        page: '36',
        description: 'See CRB, page 36, for more details.',
        setting: 'All',
        woundThreshold: 10,
        strainThreshold: 10,
        experience: 110,
        skills: {choice: 2, any: 1},
        talents: ['readyforanything'],
        characteristics: {
            Brawn: 2,
            Agility: 2,
            Intellect: 2,
            Cunning: 2,
            Willpower: 2,
            Presence: 2
        }
    },

    Laborer: {
        name: 'The Laborer',
        book: 'CRB',
        page: '37',
        description: 'See CRB, page 37, for more details.',
        setting: 'All',
        woundThreshold: 12,
        strainThreshold: 8,
        experience: 100,
        skills: {Athletics: 1},
        talents: ['toughasnails'],
        characteristics: {
            Brawn: 3,
            Agility: 2,
            Intellect: 2,
            Cunning: 2,
            Willpower: 1,
            Presence: 2
        }
    },

    Intellectual: {
        name: 'The Intellectual',
        book: 'CRB',
        page: '38',
        description: 'See CRB, page 38, for more details.',
        setting: 'All',
        woundThreshold: 8,
        strainThreshold: 12,
        experience: 100,
        skills: {Knowledge: 1},
        talents: ['brilliant'],
        characteristics: {
            Brawn: 2,
            Agility: 1,
            Intellect: 3,
            Cunning: 2,
            Willpower: 2,
            Presence: 2
        }
    },

    Aristocrat: {
        name: 'The Aristocrat',
        book: 'CRB',
        page: '39',
        description: 'See CRB, page 39, for more details.',
        setting: 'All',
        woundThreshold: 10,
        strainThreshold: 10,
        experience: 100,
        skills: {Cool: 1},
        talents: ['forcefulPersonality'],
        characteristics: {
            Brawn: 1,
            Agility: 2,
            Intellect: 2,
            Cunning: 2,
            Willpower: 2,
            Presence: 3
        }
    },
    Elf: {
        name: 'Elf',
        book: 'CRB',
        page: '142',
        description: 'See CRB, page 142, for more details.',
        setting: 'Fantasy',
        woundThreshold: 9,
        strainThreshold: 10,
        experience: 90,
        skills: {Perception: 1},
        talents: ['nimble'],
        characteristics: {
            Brawn: 2,
            Agility: 3,
            Intellect: 2,
            Cunning: 2,
            Willpower: 1,
            Presence: 2
        }
    },

    Dwarf: {
        name: 'Dwarf',
        book: 'CRB',
        page: '142',
        description: 'See CRB, page 142, for more details.',
        setting: 'Fantasy',
        woundThreshold: 11,
        strainThreshold: 10,
        experience: 90,
        skills: {Resilience: 1},
        talents: ['darkvision', 'toughasnails'],
        characteristics: {
            Brawn: 2,
            Agility: 1,
            Intellect: 2,
            Cunning: 2,
            Willpower: 3,
            Presence: 2
        }
    },

    Orc: {
        name: 'Orc',
        book: 'CRB',
        page: '143',
        description: 'See CRB, page 143, for more details.',
        setting: 'Fantasy',
        woundThreshold: 12,
        strainThreshold: 8,
        experience: 100,
        skills: {Coercion: 1},
        talents: ['battlerage'],
        characteristics: {
            Brawn: 3,
            Agility: 2,
            Intellect: 2,
            Cunning: 2,
            Willpower: 2,
            Presence: 1
        }
    },

    Mongrel: {
        name: 'Mongrel',
        book: 'CRB',
        page: '152',
        description: 'See CRB, page 152, for more details.',
        setting: 'Steampunk',
        woundThreshold: 10,
        strainThreshold: 8,
        experience: 100,
        skills: {Discipline: 1},
        talents: ['thebeastwithin', 'thehumanspirit'],
        characteristics: {
            Brawn: 2,
            Agility: 2,
            Intellect: 2,
            Cunning: 2,
            Willpower: 2,
            Presence: 2
        }
    },

    Revenant: {
        name: 'Revenant',
        book: 'CRB',
        page: '152',
        description: 'See CRB, page 152, for more details.',
        setting: 'Steampunk',
        woundThreshold: 11,
        strainThreshold: 9,
        experience: 100,
        skills: {Coercion: 1},
        talents: ['reanimated', 'deadnerves'],
        characteristics: {
            Brawn: 3,
            Agility: 2,
            Intellect: 2,
            Cunning: 2,
            Willpower: 2,
            Presence: 1
        }
    },

    Bioroid: {
        name: 'Bioroid',
        book: 'CRB',
        page: '174',
        description: 'See CRB, page 174, for more details.',
        setting: 'Science Fiction',
        woundThreshold: 11,
        strainThreshold: 8,
        experience: 155,
        skills: {},
        talents: ['robot', 'inorganic'],
        characteristics: {
            Brawn: 3,
            Agility: 1,
            Intellect: 1,
            Cunning: 1,
            Willpower: 1,
            Presence: 1
        }
    },

    Clone: {
        name: 'Clone',
        book: 'CRB',
        page: '174',
        description: 'See CRB, page 174, for more details.',
        setting: 'Science Fiction',
        woundThreshold: 11,
        strainThreshold: 10,
        experience: 80,
        skills: {choice: 2, any: 2},
        talents: ['afaceinacrowd'],
        characteristics: {
            Brawn: 2,
            Agility: 2,
            Intellect: 2,
            Cunning: 2,
            Willpower: 2,
            Presence: 2
        }
    },

    AnimalisticAlien: {
        name: 'Animalistic Alien',
        book: 'CRB',
        page: '182',
        description: 'See CRB, page 182, for more details.',
        setting: 'Space Opera',
        woundThreshold: 10,
        strainThreshold: 8,
        experience: 70,
        skills: {
            choice: 1,
            Athletics: 1,
            Coordination: 1,
            Resilience: 1
        },
        talents: ['naturalweapons'],
        characteristics: {
            Brawn: 3,
            Agility: 3,
            Intellect: 2,
            Cunning: 2,
            Willpower: 1,
            Presence: 2
        }
    },

    Psionic: {
        name: 'Psionic',
        book: 'CRB',
        page: '182',
        description: 'See CRB, page 182, for more details.',
        setting: 'Space Opera',
        woundThreshold: 7,
        strainThreshold: 11,
        experience: 70,
        skills: {},
        talents: ['mindreader', 'mindshaper', 'mindbreaker'],
        characteristics: {
            Brawn: 2,
            Agility: 2,
            Intellect: 2,
            Cunning: 2,
            Willpower: 2,
            Presence: 2
        }
    },

    Robot: {
        name: 'Robot',
        book: 'CRB',
        page: '183',
        description: 'See CRB, page 183, for more details.',
        setting: 'Space Opera',
        woundThreshold: 10,
        strainThreshold: 10,
        experience: 175,
        skills: {careerSkills: 6},
        talents: ['robot', 'networkedintelligence', 'inorganic'],
        characteristics: {
            Brawn: 1,
            Agility: 1,
            Intellect: 1,
            Cunning: 1,
            Willpower: 1,
            Presence: 1
        }
    },

    Vanguard: {
        name: 'Vanguard',
        book: 'CRB',
        page: '183',
        description: 'See CRB, page 183, for more details.',
        setting: 'Space Opera',
        woundThreshold: 9,
        strainThreshold: 9,
        experience: 100,
        skills: {Knowledge: 1},
        talents: ['spaceisourbirthright', 'hightechbaubles'],
        characteristics: {
            Brawn: 2,
            Agility: 2,
            Intellect: 2,
            Cunning: 1,
            Willpower: 2,
            Presence: 3
        }
    },
}
