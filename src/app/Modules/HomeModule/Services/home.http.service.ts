import { Injectable } from "@angular/core";
import { MOCK_USER_DATA } from "./Models/home.mock.models";

@Injectable()
export class HomeHttpService {
    private mock_user_data: MOCK_USER_DATA[] = [
        {
            userid: 1,
            username: 'test username 1'
        },
        {
            userid: 2,
            username: 'test username 2'
        },
        {
            userid: 3,
            username: 'test username 3'
        }
    ]

    getUserData(): Promise<any> {
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.mock_user_data);
            }, 1000);
       })
    }
}