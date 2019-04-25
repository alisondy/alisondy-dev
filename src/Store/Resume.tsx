export interface Resume {
    basics: Basics;
    work?: (WorkEntity)[] | null;
    volunteer?: (VolunteerEntity)[] | null;
    education?: (EducationEntity)[] | null;
    awards?: (AwardsEntity)[] | null;
    publications?: (PublicationsEntity)[] | null;
    skills?: (SkillsEntity)[] | null;
    languages?: (LanguagesEntity)[] | null;
    interests?: (InterestsEntity)[] | null;
    references?: (ReferencesEntity)[] | null;
}
export interface Basics {
    name: string;
    label: string;
    picture: string;
    email: string;
    phone: string;
    website: string;
    summary: string;
    location: Location;
    profiles?: (ProfilesEntity)[] | null;
}
export interface Location {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
}
export interface ProfilesEntity {
    network: string;
    username: string;
    url: string;
}
export interface WorkEntity {
    company: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights?: (string)[] | null;
}
export interface VolunteerEntity {
    organization: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights?: (string)[] | null;
}
export interface EducationEntity {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    gpa: string;
    courses?: (string)[] | null;
}
export interface AwardsEntity {
    title: string;
    date: string;
    awarder: string;
    summary: string;
}
export interface PublicationsEntity {
    name: string;
    publisher: string;
    releaseDate: string;
    website: string;
    summary: string;
}
export interface SkillsEntity {
    name: string;
    level: string;
    keywords?: (string)[] | null;
}
export interface LanguagesEntity {
    language: string;
    fluency: string;
}
export interface InterestsEntity {
    name: string;
    keywords?: (string)[] | null;
}
export interface ReferencesEntity {
    name: string;
    reference: string;
}
