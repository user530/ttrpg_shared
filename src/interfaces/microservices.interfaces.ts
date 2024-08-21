import { CommandDataLogin, CommandDataRefresh, CommandDataRegister, CommandDataReset, CommandDataResetRequest, CommandDataVerify } from './auth.interfaces';
import { CommandDataCreateUser, CommandDataFindByEmail, CommandDataFindByUsername, CommandDataUpdatePassword, CommandDataVerifyUser } from './user.interfaces';

export interface AuthServiceCommands {
    REGISTER: (data: CommandDataRegister) => { cmd: 'register', data: typeof data };
    VERIFY_EMAIL: (data: CommandDataVerify) => { cmd: 'verifyEmail', data: typeof data };
    LOGIN: (data: CommandDataLogin) => { cmd: 'login', data: typeof data };
    LOGOUT: () => { cmd: 'logout' };
    PASSWORD_RESET_REQUEST: (data: CommandDataResetRequest) => { cmd: 'passwordResetRequest', data: typeof data };
    PASSWORD_RESET: (data: CommandDataReset) => { cmd: 'passwordReset', data: typeof data };
    REFRESH_TOKEN: (data: CommandDataRefresh) => { cmd: 'refreshToken', data: typeof data };
}

export interface UserServiceCommands {
    CREATE_USER: (data: CommandDataCreateUser) => { cmd: 'createUser', data: typeof data },
    VERIFY_USER: (data: CommandDataVerifyUser) => { cmd: 'verifyUserEmail', data: typeof data },
    FIND_BY_USERNAME: (data: CommandDataFindByUsername) => { cmd: 'findUserByUsername', data: typeof data },
    FIND_BY_EMAIL: (data: CommandDataFindByEmail) => { cmd: 'findUserByEmail', data: typeof data },
    UPDATE_PASSWORD: (data: CommandDataUpdatePassword) => { cmd: 'updateUserPassword', data: typeof data },
}