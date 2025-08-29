import prisma from '@config/database'
import { Prisma } from '@generated/prisma'
import { Outflow, OutflowUpdateInput } from '@generated/typegraphql-prisma'
import { UserInputError } from 'apollo-server-express'
import { OutflowApiCreateInput } from './inputs/OutflowApiCreateInput'

export const outflowService = {
	async getAllOutflows(): Promise<Outflow[]> {
		return prisma.outflow.findMany()
	},

	async getOutflowById(id: number): Promise<Outflow | null> {
		return prisma.outflow.findUnique({
			where: { id },
		})
	},

	async getOutflowsWithDetailsByPersonId(
		personId: number
	): Promise<Outflow[] | null> {
		return prisma.outflow.findMany({
			where: { personId },
			include: {
				person: true,
				facility: true,
			},
			orderBy: {
				date: 'desc',
			},
		})
	},

	async createOutflow(data: OutflowApiCreateInput): Promise<Outflow> {
		// Тип data изменен
		const {
			person: personId,
			facility: facilityId,
			amount,
			date,
			description,
		} = data

		if (!personId) {
			throw new UserInputError('Необходимо указать ID сотрудника (personId).')
		}
		if (!facilityId) {
			throw new UserInputError('Необходимо указать ID объекта (facilityId).')
		}

		const [personExists, facilityExists] = await Promise.all([
			prisma.person.findUnique({ where: { id: personId } }),
			prisma.facility.findUnique({ where: { id: facilityId } }),
		])

		if (!personExists) {
			throw new UserInputError(`Сотрудник с ID ${personId} не найден.`)
		}

		if (!facilityExists) {
			throw new UserInputError(`Объект с ID ${facilityId} не найден.`)
		}

		// Преобразуем данные для Prisma
		const prismaCreateData: Prisma.OutflowCreateInput = {
			amount,
			date,
			description,
			person: { connect: { id: personId } },
			facility: { connect: { id: facilityId } },
		}

		return prisma.outflow.create({
			data: prismaCreateData,
		})
	},

	async updateOutflow(
		id: number,
		data: OutflowUpdateInput
	): Promise<Outflow | null> {
		const { person, facility } = data

		if (person?.connect?.id) {
			const personExists = await prisma.person.findUnique({
				where: { id: person.connect.id },
			})

			if (!personExists) {
				throw new UserInputError(
					`Сотрудник с ID ${person.connect.id} не найден.`
				)
			}
		}

		if (facility?.connect?.id) {
			const facilityExists = await prisma.facility.findUnique({
				where: { id: facility.connect.id },
			})
			if (!facilityExists) {
				throw new UserInputError(
					`Объект с ID ${facility.connect.id} не найден.`
				)
			}
		}

		return prisma.outflow.update({
			where: { id },
			data: data as Prisma.OutflowUpdateInput,
		})
	},

	async deleteOutflow(id: number): Promise<Outflow | null> {
		// Здесь может быть дополнительная логика, например, проверка связанных сущностей
		return prisma.outflow.delete({
			where: { id },
		})
	},
}
