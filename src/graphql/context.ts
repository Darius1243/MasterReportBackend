import prisma from '@config/database'
import { PrismaClient } from '@generated/prisma'

export interface Context {
	prisma: PrismaClient
	// Здесь можно добавить другие вещи, например, информацию о текущем пользователе из req
}

export function createContext(): Context {
	return { prisma }
}
