export interface CommandDataRegister {
    username: string;
    email: string;
    password: string;
}

export interface CommandDataVerify {
    token: string;
}

export interface CommandDataLogin {
    username: string;
    password: string;
}

export interface CommandDataResetRequest {
    email: string;
}

export interface CommandDataReset {
    token: string;
    newPassword: string;
}

export interface CommandDataRefresh {
    refreshToken: string;
}