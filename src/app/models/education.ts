export class Education {
    id: number;
    courseTitle: string;
    institutionName: string;
    yearsAttended: string;

    constructor(id: number, courseTitle: string, institutionName: string, yearsAttended: string) {
        this.id = id;
        this.courseTitle = courseTitle;
        this.institutionName = institutionName;
        this.yearsAttended = yearsAttended;
    }
}
