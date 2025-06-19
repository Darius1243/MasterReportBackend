import prisma from '@config/database'
import {
	Facility,
	Inflow,
	InflowUpdateInput,
	Job,
	Person,
} from '@generated/typegraphql-prisma'
import { handlePrismaError } from '@utils/errors'
import { UserInputError } from 'apollo-server-express'
import {
	Arg,
	FieldResolver,
	Int,
	Mutation,
	Query,
	Resolver,
	Root,
} from 'type-graphql'
import { inflowService } from './inflowService'
import { InflowApiCreateInput } from './inputs/InflowApiCreateInput' // Новый импорт

@Resolver(Inflow)
export class InflowResolver {
	@Query(() => [Inflow])
	async inflows(): Promise<Inflow[]> {
		return inflowService.getAllInflows()
	}

	@Query(() => Inflow, { nullable: true })
	async inflow(@Arg('id', () => Int) id: number): Promise<Inflow | null> {
		return inflowService.getInflowById(id)
	}

	@Query(() => [Inflow], { nullable: true })
	async inflowsByPersonId(
		@Arg('personId', () => Int) personId: number
	): Promise<Inflow[] | null> {
		return inflowService.getInflowsWithDetailsByPersonId(personId)
	}

	@Mutation(() => Inflow)
	async createInflow(
		@Arg('data', () => InflowApiCreateInput) data: InflowApiCreateInput
	): Promise<Inflow> {
		try {
			return await inflowService.createInflow(data)
		} catch (error: any) {
			if (error instanceof UserInputError) {
				throw error
			}
			handlePrismaError(error, 'Inflow', 'Create')
		}
	}

	@Mutation(() => Inflow, { nullable: true })
	async updateInflow(
		@Arg('id', () => Int) id: number,
		@Arg('data', () => InflowUpdateInput) data: InflowUpdateInput
	): Promise<Inflow | null> {
		const hasActualUpdates = Object.values(data).some(
			value => value !== undefined && value !== null
		)

		if (!hasActualUpdates) {
			const currentInflow = await inflowService.getInflowById(id)

			if (!currentInflow)
				throw new UserInputError(`Приход с ID ${id} не найден.`)

			return currentInflow
		}

		try {
			return await inflowService.updateInflow(id, data)
		} catch (error: any) {
			if (error instanceof UserInputError) {
				throw error
			}
			handlePrismaError(error, 'Inflow', 'Update', { entityId: id })
		}
	}

	@Mutation(() => Boolean)
	async deleteInflow(@Arg('id', () => Int) id: number): Promise<boolean> {
		try {
			await inflowService.deleteInflow(id)
			return true
		} catch (error) {
			handlePrismaError(error, 'Inflow', 'Delete', { entityId: id })
		}
	}

	@FieldResolver(() => Person)
	async person(@Root() inflow: Inflow): Promise<Person | null> {
		return prisma.person.findUnique({ where: { id: inflow.personId } })
	}

	@FieldResolver(() => Facility)
	async facility(@Root() inflow: Inflow): Promise<Facility | null> {
		return prisma.facility.findUnique({ where: { id: inflow.facilityId } })
	}

	@FieldResolver(() => Job)
	async job(@Root() inflow: Inflow): Promise<Job | null> {
		return prisma.job.findUnique({ where: { id: inflow.jobId } })
	}
}
