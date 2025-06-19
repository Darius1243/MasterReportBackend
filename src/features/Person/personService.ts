import prisma from '@config/database'
import { Inflow, Person, Prisma } from '@generated/prisma' // Added Inflow
import {
	PersonCreateInput,
	PersonUpdateInput,
} from '@generated/typegraphql-prisma'

// Define an interface for the data structure returned by getPersonWithStatistics
export interface PersonWithStatisticsData extends Person {
	totalInflowAmount: number
	inflows: Inflow[] // Оставляем для внутреннего использования, если нужно
	inflowIds: number[] // Добавляем поле для ID приходов
}

export const personService = {
	async getAllPersons(): Promise<Person[]> {
		return prisma.person.findMany()
	},

	async getPersonWithStatistics(): Promise<PersonWithStatisticsData[]> {
		const personsWithInflows = await prisma.person.findMany({
			include: {
				inflows: true,
				// outflows: true,
			},
		})

		return personsWithInflows.map(person => {
			const totalInflowAmount = (person.inflows || []).reduce(
				(sum, inflow) => sum + inflow.amount,
				0
			)
			const inflowIds = (person.inflows || []).map(inflow => inflow.id)

			return {
				...person,
				totalInflowAmount,
				inflows: person.inflows || [],
				inflowIds,
			}
		})
	},

	async getPersonById(id: number): Promise<Person | null> {
		return prisma.person.findUnique({ where: { id } })
	},

	async createPerson(data: PersonCreateInput): Promise<Person> {
		return prisma.person.create({ data: data as Prisma.PersonCreateInput })
	},

	async updatePerson(
		id: number,
		data: PersonUpdateInput
	): Promise<Person | null> {
		return prisma.person.update({
			where: { id },
			data: data as Prisma.PersonUpdateInput,
		})
	},

	async deletePerson(id: number): Promise<boolean> {
		await prisma.person.delete({ where: { id } })

		return true
	},
}
