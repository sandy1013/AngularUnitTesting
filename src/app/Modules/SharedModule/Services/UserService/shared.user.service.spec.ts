import { UserService } from "./shared.user.service";

describe('UserService', () => {
    let userService: UserService
    beforeEach(() => {
        userService = new UserService()
    })

    it('should not return token on load', () => {
        let token = userService.getToken();
        expect(token).not.toBeDefined()
    });

    it('should return token after it is set', () => {
        userService.setToken("dassgdakjsdaghksad");
        let token = userService.getToken();
        userService.removeToken()
        expect(token).toBeDefined()
    });
});