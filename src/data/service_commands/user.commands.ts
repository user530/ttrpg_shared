import { CommandDataCreateUser, CommandDataFindByEmail, CommandDataFindByUsername, CommandDataUpdatePassword, CommandDataVerifyUser, UserServiceCommands } from '../../interfaces';

export const USER_COMMANDS: UserServiceCommands = {
    CREATE_USER: (data: CommandDataCreateUser) => ({ cmd: 'createUser', data }),
    VERIFY_USER: (data: CommandDataVerifyUser) => ({ cmd: 'verifyUserEmail', data }),
    FIND_BY_USERNAME: (data: CommandDataFindByUsername) => ({ cmd: 'findUserByUsername', data }),
    FIND_BY_EMAIL: (data: CommandDataFindByEmail) => ({ cmd: 'findUserByEmail', data }),
    UPDATE_PASSWORD: (data: CommandDataUpdatePassword) => ({ cmd: 'updateUserPassword', data }),
}