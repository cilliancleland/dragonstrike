export const dragonTypes = {
  Young: {
    age: 'Young',
    baseCost: 4,
    pot: 5,
    fli: 4,
    wnd: 3,
    traits: [
      'Resistance',
      'Zoomer',
    ],
    extraTraits: [],
    advancedTraits: [],
    skills: [],
    advancedSkills: [],
  },
  Adult: {
    age: 'Adult',
    baseCost: 6,
    pot: 4,
    fli: 4,
    wnd: 4,
    traits: [
      'Resistance',
      'Racial',
    ],
    extraTraits: [],
    advancedTraits: [],
    skills: [],
    advancedSkills: [],
  },
  Ancient: {
    age: 'Ancient',
    baseCost: 8,
    pot: 3,
    fli: 5,
    wnd: 5,
    traits: [
      'Resistance',
      'Racial',
      'Strong Scale',
    ],
    extraTraits: [],
    advancedTraits: [],
    skills: [],
    advancedSkills: [],
  },
};
export const dragonAges = [
  'Young',
  'Adult',
  'Ancient'
];
export const racialTraits = {
  gold: 'Trickster',
  silver: 'Quick Recovery',
  bronze: 'Deep Breath',
  copper: 'Breaker',
  brass: 'Zoomer',
  red: 'Deep Breath',
  blue: 'Quick Recovery',
  black: 'Hazard Expert',
  white: 'Breaker',
  green: 'Trickster',
};
export const racialElements = {
  gold: 'Fire',
  silver: 'Frost',
  bronze: 'Lightening',
  copper: 'Poison',
  brass: 'Fire',
  red: 'Fire',
  blue: 'Lightening',
  black: 'Poison',
  white: 'Frost',
  green: 'Posion',
};

export const traits = {
  Resistance: {
    basic: '-1 to DMG when HIT from BREATH and HAZARD of this source',
    advanced: '(basic resistance cannot be chosen, must come with the dragon',
  },
  'Strong Scale': {
    basic: '-1 to DMG from melee HITS',
    advanced: '-2 to DMG from melee HITS',
  },
  Zoomer: {
    basic: '+1 FLI when Zooming',
    advanced: 'Allow double zoom as an up to two manouvre (add to basic)',
  },
  Breaker: {
    basic: 'HARD BREAK does not increase manouvre difficulty',
    advanced: 'Ignore negative modifiers for doing 0 speed manouvres (add to basic)',
  },
  Trickster: {
    basic: 'Treat manouvre of basic difficulty BLACK as RED',
    advanced: '+1 flight when doing BLUE (effective) manouvres (add to basic)',
  },
  "Deep Breath": {
    basic: '+1 DR DMG when breathing at range 1 straight away',
    advanced: '+1 DR DMG when breathing at range 1 or 2 straight ahead',
  },
  "Quick Recovery": {
    basic: 'Recover an extra fatigue when doing a GREEN eff manouvre',
    advanced: 'Recover 1 fatigue when doing a WHITE eff manouvre (add to basic)',
  },
  "Hazard Expert": {
    basic: 'Can deploy hazard even if not ready',
    advanced: 'Hazards have +1 DMG',
  },
}
export const damageTypes = [
  'Fire',
  'Frost',
  'Poison',
  'Lightening',
];
export const skills = {
  Armoured: {
    basic: 'Ignore MINOR SPECIAL EFFECTS; -1 die to RIDER ACTIONS',
    advanced: 'ignore -1 die to RIDER ACTIONS',
  },
  Lancer: {
    basic: '"Swipe" +3 DMG; "Grapple +2 DMG & -1 DMG suffered',
    advanced: '+1 FLI to melee',
  },
  Archer: {
    basic: 'Action missle shot (4+)',
    advanced: '+1 die to missle shot',
  },
  'Spellcast: healing': {
    basic: 'Action cast healing difficulty 4+',
    advanced: '+1 die to action',
  },
  'Spellcast: Ice Bomb': {
    basic: 'Action ice bomb difficulty 4+',
    advanced: '+1 die to action',
  },
  'Spellcast: Invisibility': {
    basic: 'Action invisibility difficulty 4+',
    advanced: '+1 die to action',
  },
  'Strategist': {
    basic: 'Action to steal edge 4+',
    advanced: 'Attempts to dodge firendly BREATH always resul in FULL DODGE',
  },
  'Aware': {
    basic: '+1 FLI to dodge when attacked from behind',
    advanced: '+1 FLI to dodge when attacked from the front',
  },
  'Piolt': {
    basic: 'Can perform DODGE when not READY at -1 FLI',
    advanced: 'FULL DODGE does not incur FATIGUE',
  },
  'Tough': {
    basic: 'Can take actino while DAZED at -1 die',
    advanced: 'Recover from DAZEN in first turn',
  },
};