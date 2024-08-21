export interface CommandDataCreateUser {
    username: string;
    email: string;
    password: string;
}

export interface CommandDataVerifyUser {
    email: string;
}

export interface CommandDataFindByUsername {
    username: string;
}

export interface CommandDataFindByEmail {
    email: string;
}

export interface CommandDataUpdatePassword {
    email: string;
    password: string;
}