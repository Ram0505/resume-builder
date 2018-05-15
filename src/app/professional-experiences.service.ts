import { InMemoryDbService } from 'angular-in-memory-web-api';


export class ProfessionalExperiencesService implements InMemoryDbService {

  createDb() {

    const profExperience = [
      {
        projectName: 'Pricing And Event Management',
        role: 'Developer',
        organization: 'Nisum technologies',
        technologies: [
          'java',
          'angular4',
          'springMVC',
          'junit'
        ],
        tools: [
          'Eclipse',
          'GIT',
          'gradle'
        ],
        description: 'resume builder aplication is developed for nisum  recruirement  portal',
        responsibilities: 'involved in developing web pages'
      }
    ];
    return profExperience
  }


}
