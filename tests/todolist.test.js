import Tasks from "../app/task";
import user from "../app/users";
import { DateTime } from 'luxon';

describe('tests for tasks', () => {
    const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dezsssssssssss', '1998-05-15')
    expect(usr.lastName).toEqual('dibi');
});
