export class Education {
    id: number;
    title: string;
    institution: string;
    years: string;

    constructor(id: number, title: string, institution: string, years: string) {
        this.id = id;
        this.title = title;
        this.institution = institution;
        this.years = years;
    }
}
