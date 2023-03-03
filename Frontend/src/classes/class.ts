export class User{
    username !: string;
    email !: string;
    password !: string;
    token ?: string;
    isLogedIn ?: boolean;
    message !: string;
    role ?: number;
    userId !: number;
}