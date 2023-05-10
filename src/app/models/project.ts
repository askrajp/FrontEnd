export class Project {
  id: number;
  name: string;
  description: string;
  link: string;
  constructor(id: number, name: string, description: string,link: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.link = link;
  }
}