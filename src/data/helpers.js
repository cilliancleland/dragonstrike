export const dragonCost = (dragon) => {
  let cost = dragon.baseCost + dragon.advancedTraits.length + dragon.extraTraits.length;
  let skillCost = dragon.advancedSkills.length + dragon.skills.length;
  if (skillCost > 0) skillCost = skillCost -1;
  return cost + skillCost;
}
