import { Role } from 'src/constants';
type UserState = 'activate' | 'deactivate';
declare class Job {
    name: string;
    company: string;
}
export declare class User {
    username: string;
    password: string;
    state: UserState;
    job: Job;
    roles: Role[];
}
export {};
