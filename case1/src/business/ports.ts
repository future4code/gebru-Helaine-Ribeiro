import { AuthenticationData } from '../model/types'

export interface IAuthenticator {
    generateToken(payload: AuthenticationData): string
    getTokenData(token: string): AuthenticationData
}

export interface IIdGenerator {
    generateId(): string
}