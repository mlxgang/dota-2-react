import HeroInterface from './Interfaces/heroes/hero.interface';

class Hero {
    level: number = 1
    range: boolean
    mainAttribute: string
    baseStrange: number
    baseAgility: number
    baseIntelligence: number
    incrementStrategy: number
    incrementAgility: number
    incrementIntelligence: number
    baseMinDamage: number
    baseMaxDamage: number
    baseTimeAttack: number
    baseRangeAttack: number
    baseArmor: number
    baseMagicResist: number
    baseMoveSpeed: number
    baseSpinSpeed: number
    baseDayVision: number
    baseNightVision: number
}

export default Hero