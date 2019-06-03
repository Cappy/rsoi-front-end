import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    // getAll() {
        // return this.http.get<User[]>(`/api/auth/`);
    // }

    getById(id?: string) {
        return this.http.get(`https://gateway20190603104549.azurewebsites.net/api/users/` + id);
    }

    register(user: User) {
        return this.http.post(`https://gateway20190603104549.azurewebsites.net/api/auth/register`, user);
    }

    update(user: User) {
        return this.http.put(`https://gateway20190603104549.azurewebsites.net/api/auth/` + user.userid, user);
    }

    delete(id?: string) {
        return this.http.delete(`https://gateway20190603104549.azurewebsites.net/api/auth/` + id);
    }
}