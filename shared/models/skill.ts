export class Skill{
  constructor(){ }
  name: string;
  level: number;
}
export class SkillCategory {
  constructor(){}
  name: string;
  itemList: Skill[] = [];
}
