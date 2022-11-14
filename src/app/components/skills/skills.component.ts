import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  frontEnd: Skill[] = []
  backEnd: Skill[] = []
  softSkill: Skill[] = []

  ngOnInit(): void {
    this.frontEndSkills()
    this.backEndSkills()
    this.softSkills()
  }

  frontEndSkills(): void {
    this.frontEnd.push(new Skill(
      "HTML",
      80
    ))
    this.frontEnd.push(new Skill(
      "CSS",
      60
    ))
    this.frontEnd.push(new Skill(
      "Bootstrap",
      40
    ))
    this.frontEnd.push(new Skill(
      "JavaScript",
      20
    ))
  }

  backEndSkills(): void {
    this.backEnd.push(new Skill(
      "Java",
      0
    ))
    this.backEnd.push(new Skill(
      "PHP",
      10
    ))
    this.backEnd.push(new Skill(
      "Lorem",
      0
    ))
    this.backEnd.push(new Skill(
      "Lorem",
      0
    ))
  }

  softSkills(): void {
    this.softSkill.push(new Skill(
      "Lorem",
      0
    ))
    this.softSkill.push(new Skill(
      "Lorem",
      0
    ))
    this.softSkill.push(new Skill(
      "Lorem",
      0
    ))
    this.softSkill.push(new Skill(
      "Lorem",
      0
    ))
  }

}
