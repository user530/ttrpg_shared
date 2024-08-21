import { AuthServiceCommands, CommandDataLogin, CommandDataRefresh, CommandDataRegister, CommandDataReset, CommandDataResetRequest, CommandDataVerify } from '../../interfaces';

export const AUTH_COMMANDS: AuthServiceCommands = {
    REGISTER: (data: CommandDataRegister) => ({ cmd: 'register', data }),
    VERIFY_EMAIL: (data: CommandDataVerify) => ({ cmd: 'verifyEmail', data }),
    LOGIN: (data: CommandDataLogin) => ({ cmd: 'login', data }),
    LOGOUT: () => ({ cmd: 'logout' }),
    PASSWORD_RESET_REQUEST: (data: CommandDataResetRequest) => ({ cmd: 'passwordResetRequest', data }),
    PASSWORD_RESET: (data: CommandDataReset) => ({ cmd: 'passwordReset', data }),
    REFRESH_TOKEN: (data: CommandDataRefresh) => ({ cmd: 'refreshToken', data }),
}
