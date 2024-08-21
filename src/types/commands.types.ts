export type AuthCommand =
    | 'register'
    | 'verifyEmail'
    | 'login'
    | 'logout'
    | 'passwordResetRequest'
    | 'passwordReset'
    | 'refreshToken'

export type UserCommand =
    | 'createUser'
    | 'verifyUserEmail'
    | 'findUserByUsername'
    | 'findUserByEmail'
    | 'updateUserPassword'