import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user.model';

export class MockDataService implements InMemoryDbService {
  createDb() {
    const date = new Date().toString()
    const users: User[] = [
      {
        id: '1', user_name: 'ABC', first_name: 'abc', last_name: 'xyz',
        created_date: date, type: 'admin'
      },
      {
        id: '2', user_name: 'DEF', first_name: 'def', last_name: 'jkl',
        created_date: date, type: 'admin'
      },
      {
        id: '3', user_name: 'GHI', first_name: 'ghi', last_name: 'mno',
        created_date: date, type: 'staff'
      },
      {
        id: '4', user_name: 'JKL', first_name: 'jkl', last_name: 'uvw',
        created_date: date, type: 'staff'
      },
      {
        id: '5', user_name: 'MNO', first_name: 'mno', last_name: 'pqr',
        created_date: date, type: 'staff'
      },
      {
        id: '6', user_name: 'OPQ', first_name: 'opq', last_name: 'stu',
        created_date: date, type: 'student'
      },
      {
        id: '7', user_name: 'RST', first_name: 'rst', last_name: 'def',
        created_date: new Date().toString(), type: 'student'
      },
      {
        id: '8', user_name: 'UVW', first_name: 'uvw', last_name: 'bcd',
        created_date: date, type: 'student'
      },
      {
        id: '9', user_name: 'XYZ', first_name: 'xyz', last_name: 'tuv',
        created_date: date, type: 'student'
      },
      {
        id: '10', user_name: 'QWE', first_name: 'qwe', last_name: 'qrs',
        created_date: date, type: 'student'
      },
    ];
    return { users };
  }
}
