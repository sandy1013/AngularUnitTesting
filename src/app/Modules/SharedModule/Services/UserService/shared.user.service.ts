import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class UserService {
    getToken() {
        let token = localStorage.getItem('token')
        return (token) ? token : undefined
    }

    setToken(token: string) {
        localStorage.setItem('token', token)
    }

    removeToken() {
        localStorage.removeItem('token')
    }
}