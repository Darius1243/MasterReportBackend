import prisma from '@config/database'
import { Inflow, Outflow, Person, Prisma } from '@generated/prisma'
import { PersonCreateInput } from '@generated/typegraphql-prisma'

export interface PersonWithStatisticsData extends Person {
	totalInflowAmount: number
	inflows: Inflow[]
	inflowIds: number[]

	totalOutflowAmount: number
	outflows: Outflow[]
	outflowIds: number[]
}

export const personService = {
	async getAllPersons(): Promise<Person[]> {
		return prisma.person.findMany()
	},

	async getPersonWithStatistics(): Promise<PersonWithStatisticsData[]> {
		const personsWithInflowsOutflow = await prisma.person.findMany({
			include: {
				inflows: true,
				outflows: true,
			},
		})

		return personsWithInflowsOutflow.map(person => {
			const totalInflowAmount = (person.inflows || []).reduce(
				(sum, inflow) => sum + inflow.amount,
				0
			)
			const inflowIds = (person.inflows || []).map(inflow => inflow.id)

			const totalOutflowAmount = (person.outflows || []).reduce(
				(sum, outflow) => sum + outflow.amount,
				0
			)
			const outflowIds = (person.outflows || []).map(outflow => outflow.id)

			return {
				...person,
				totalInflowAmount,
				inflows: person.inflows || [],
				inflowIds,
				totalOutflowAmount,
				outflows: person.outflows || [],
				outflowIds,
			}
		})
	},

	async getPersonById(id: number): Promise<Person | null> {
		return prisma.person.findUnique({ where: { id } })
	},

	async createPerson(data: PersonCreateInput): Promise<Person> {
		if (data.email === '') {
			data.email = undefined
		}

		return prisma.person.create({ data: data as Prisma.PersonCreateInput })
	},

	async updatePerson(id: number, data: any): Promise<Person | null> {
		if (data.email === '') {
			data.email = null
		}

		const prismaData: any = {}
		for (const key in data) {
			if (
				typeof data[key] !== 'object' ||
				data[key] === null ||
				Array.isArray(data[key])
			) {
				prismaData[key] = { set: data[key] }
			} else {
				prismaData[key] = data[key]
			}
		}

		return prisma.person.update({
			where: { id },
			data: prismaData,
		})
	},

	async deletePerson(id: number): Promise<boolean> {
		await prisma.person.delete({ where: { id } })

		return true
	},
}
