import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { UserInputError } from 'apollo-server-express'

type OperationType = 'Create' | 'Update' | 'Delete' | 'Read'

interface ErrorContext {
	entityId?: number | string
}

export function handlePrismaError(
	error: any,
	entityName: string,
	operation: OperationType,
	context?: ErrorContext
): never {
	if (
		error &&
		typeof error.code === 'string' &&
		typeof error.clientVersion === 'string'
	) {
		const prismaError = error as PrismaClientKnownRequestError
		const entityId = context?.entityId

		switch (prismaError.code) {
			case 'P2002': {
				const target = prismaError.meta?.target as string[] | undefined
				const field =
					target && target.length > 0 ? target.join(', ') : 'указанное поле'
				const messageAction = operation === 'Create' ? 'создать' : 'обновить'
				throw new UserInputError(
					`Не удалось ${messageAction} запись ${entityName.toLowerCase()}. Значение в поле '${field}' уже используется другой записью.`
				)
			}
			case 'P2003': {
				// Foreign key constraint failed
				const fieldName = (prismaError.meta as any)?.field_name as
					| string
					| undefined
				let message = ''
				if (operation === 'Delete') {
					const constraintName = (prismaError.meta as any)?.constraint_name as
						| string
						| undefined
					message = `Не удалось удалить ${entityName.toLowerCase()}${
						entityId ? ` с ID ${entityId}` : ''
					}, так как он связан с другими записями.`
					if (constraintName) {
						message += ` (Ограничение: ${constraintName})`
					}
					message += ' Сначала удалите или обновите связанные записи.'
				} else {
					// Create or Update
					const messageAction = operation === 'Create' ? 'создать' : 'обновить'
					message = `Невозможно ${messageAction} запись ${entityName.toLowerCase()} из-за нарушения внешнего ключа.`
					if (fieldName) {
						message = `При ${
							operation === 'Create' ? 'создании' : 'обновлении'
						}, связанная запись для поля '${fieldName}' не найдена.`
					}
				}
				throw new UserInputError(message)
			}
			case 'P2025': {
				// Record to update/delete does not exist
				const messageAction = operation === 'Update' ? 'обновить' : 'удалить'
				throw new UserInputError(
					`Не удалось ${messageAction}: ${entityName} с ID ${entityId} не найден.`
				)
			}
			default:
				console.error(
					`Prisma Known Request Error (${operation} ${entityName}):`,
					prismaError
				)
				throw new UserInputError(
					`Произошла ошибка базы данных при операции '${operation}' над '${entityName}' (код: ${prismaError.code}). Пожалуйста, попробуйте позже.`
				)
		}
	} else if (error instanceof UserInputError) {
		// Если это уже UserInputError, просто пробрасываем его дальше
		throw error
	}

	// Для всех остальных типов ошибок
	console.error(`${operation} ${entityName} Error:`, error)
	throw new UserInputError(
		`Не удалось выполнить операцию '${operation}' для '${entityName}'. Произошла непредвиденная ошибка.`
	)
}
