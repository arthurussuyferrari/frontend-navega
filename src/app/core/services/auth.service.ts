import { Injectable } from "@angular/core"

@Injectable({providedIn: 'root'})
export class AuthService {
    private logged: boolean = true

    isAuthenticated(): boolean {
        return this.logged
    }

    login() {
        this.logged = true
    }

    logout() {
        this.logged = false
    }
}