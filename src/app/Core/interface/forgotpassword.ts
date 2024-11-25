export interface Forgotpassword {
    email: string
}

export interface verifyResetCode {
    resetCode: string
}


export interface resetPassword {
    email:string,
    newPassword: string
}
