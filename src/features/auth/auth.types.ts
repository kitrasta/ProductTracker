export type Role = 'user' | 'admin' | 'guest' 

export interface User {
    id: string;
    email?: string;
    role: Role;
}