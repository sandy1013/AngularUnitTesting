import { Injectable } from "@angular/core";
import { MOCK_USER_DATA } from "./Models/home.mock.models";
import { Subject, observable } from "rxjs";

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

    private mock_user_data_obserable = new Subject<MOCK_USER_DATA[]>()

    getUserData(): Promise<MOCK_USER_DATA[]> {
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.mock_user_data);
            }, 1000);
       })
    }

    getUserDataObserable(): Subject<MOCK_USER_DATA[]> {
        setTimeout(() => {
            this.mock_user_data_obserable.next(this.mock_user_data)
        },1000)
        return this.mock_user_data_obserable;
    }
}