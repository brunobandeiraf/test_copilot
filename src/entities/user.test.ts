// Write tests for the User entity, method validateEmail
// Write tests for the User entity, method validatePassword

import { test, expect } from 'vitest'
import { User } from './user'

test('validateEmail', () => {
    expect(User.validateEmail(' ')).toBe(false)
    expect(User.validateEmail('email')).toBe(false)
    expect(User.validateEmail('email@')).toBe(false)
    expect(User.validateEmail('email@.')).toBe(false)
    expect(User.validateEmail('email@.com')).toBe(false)
    expect(User.validateEmail('email.com')).toBe(false)
    expect(User.validateEmail('email@com')).toBe(false)
    expect(User.validateEmail('email@.com')).toBe(false)
    expect(User.validateEmail('email@com.')).toBe(false)
})

test('validatePassword', () => {
    expect(User.validatePassword(' ')).toBe(false)
    expect(User.validatePassword('1234567')).toBe(false)
    expect(User.validatePassword('12345678')).toBe(false)
    expect(User.validatePassword('12345678A')).toBe(false)
    expect(User.validatePassword('12345678a')).toBe(false)
    expect(User.validatePassword('12345678Aa')).toBe(false)
    expect(User.validatePassword('12345678Aa@')).toBe(false)
    expect(User.validatePassword('12345678Aa@A')).toBe(false)
})