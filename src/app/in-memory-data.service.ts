import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 0, fullName: 'Juan David Pulio Sanchez', image: '../../assets/images/man.png', averageGrade: 5, deliveredHomeworks: 4, missingHomeworks: 1, lastUpdate: '07/03/2017' },
      { id: 1, fullName: 'Carlos Alberto Rodriguez Rojas', image: '../../assets/images/man.png', averageGrade: 4.5, deliveredHomeworks: 5, missingHomeworks: 0, lastUpdate: '07/10/2017' },
      { id: 2, fullName: 'David Santiago Fuentes Casas', image: '../../assets/images/man.png', averageGrade: 3.5, deliveredHomeworks: 5, missingHomeworks: 0, lastUpdate: '07/07/2017' },
      { id: 3, fullName: 'Natalia Andrea Ramirez Gonzalez', image: '../../assets/images/woman.png', averageGrade: 4.5, deliveredHomeworks: 3, missingHomeworks: 2, lastUpdate: '07/08/2017' },
      { id: 4, fullName: 'Jose Fernando Pachon Perez', image: '../../assets/images/man.png', averageGrade: 5, deliveredHomeworks: 5, missingHomeworks: 0, lastUpdate: '07/07/2017' },
      { id: 5, fullName: 'Maria Camila Lopez Patiño', image: '../../assets/images/woman.png', averageGrade: 3.5, deliveredHomeworks: 5, missingHomeworks: 0, lastUpdate: '07/10/2017' },
      { id: 6, fullName: 'Cindy Johana Romero Medina', image: '../../assets/images/woman.png', averageGrade: 3.5, deliveredHomeworks: 5, missingHomeworks: 0, lastUpdate: '07/06/2017' },
      { id: 7, fullName: 'Juan Pablo Arbelaez Pelaez', image: '../../assets/images/man.png', averageGrade: 4.5, deliveredHomeworks: 3, missingHomeworks: 2, lastUpdate: '07/05/2017' },
      { id: 8, fullName: 'Jhon Alejandro Medina Hincapie', image: '../../assets/images/man.png', averageGrade: 4.5, deliveredHomeworks: 5, missingHomeworks: 0, lastUpdate: '07/07/2017' },
      { id: 9, fullName: 'Maria Fernanda Cuartas Mora', image: '../../assets/images/woman.png', averageGrade: 5, deliveredHomeworks: 5, missingHomeworks: 0, lastUpdate: '07/03/2017' },
    ];
    return { students };
  }
}