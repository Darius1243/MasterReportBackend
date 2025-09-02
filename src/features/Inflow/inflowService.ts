import prisma from '@config/database'
import { Prisma } from '@generated/prisma'
import { Inflow, InflowUpdateInput } from '@generated/typegraphql-prisma'
import { UserInputError } from 'apollo-server-express'
import { InflowApiCreateInput } from './inputs/InflowApiCreateInput'

export const inflowService = {
	async getAllInflows(): Promise<Inflow[]> {
		return prisma.inflow.findMany()
	},

	async getInflowById(id: number): Promise<Inflow | null> {
		return prisma.inflow.findUnique({
			where: { id },
		})
	},

	async getInflowsWithDetailsByPersonId(
		personId: number
	): Promise<Inflow[] | null> {
		return prisma.inflow.findMany({
			where: { personId },
			include: {
				person: true,
				facility: true,
				job: true,
			},
			orderBy: {
				date: 'desc',
			},
		})
	},

	async createInflow(data: InflowApiCreateInput): Promise<Inflow> {
		const {
			person: personId,
			facility: facilityId,
			job: jobId,
			amount,
			date,
			description,
		} = data

		if (!personId)
			throw new UserInputError('Необходимо указать ID сотрудника (personId).')
		if (!facilityId)
			throw new UserInputError('Необходимо указать ID объекта (facilityId).')

		const personExists = await prisma.person.findUnique({
			where: { id: personId },
		})
		if (!personExists)
			throw new UserInputError(`Сотрудник с ID ${personId} не найден.`)

		const facilityExists = await prisma.facility.findUnique({
			where: { id: facilityId },
		})
		if (!facilityExists)
			throw new UserInputError(`Объект с ID ${facilityId} не найден.`)

		const prismaCreateData: Prisma.InflowCreateInput = {
			amount,
			date,
			description,
			person: { connect: { id: personId } },
			facility: { connect: { id: facilityId } },
		}

		if (jobId) {
			const jobExists = await prisma.job.findUnique({ where: { id: jobId } })
			if (!jobExists)
				throw new UserInputError(`Работа с ID ${jobId} не найдена.`)
			prismaCreateData.job = { connect: { id: jobId } }
		}

		return prisma.inflow.create({
			data: prismaCreateData,
		})
	},

	async updateInflow(
		id: number,
		data: InflowUpdateInput
	): Promise<Inflow | null> {
		const { person, facility, job } = data

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

		if (job?.connect?.id) {
			const jobExists = await prisma.job.findUnique({
				where: { id: job.connect.id },
			})
			if (!jobExists) {
				throw new UserInputError(`Работа с ID ${job.connect.id} не найдена.`)
			}
		}

		return prisma.inflow.update({
			where: { id },
			data: data as Prisma.InflowUpdateInput,
		})
	},

	async deleteInflow(id: number): Promise<Inflow | null> {
		// Здесь может быть дополнительная логика, например, проверка связанных сущностей
		return prisma.inflow.delete({
			where: { id },
		})
	},
}

// Можно добавить более сложные методы, специфичные для бизнес-логики "Inflow"
