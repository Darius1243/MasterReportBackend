import prisma from '@config/database'
import {
	Facility,
	Job,
	Outflow,
	OutflowUpdateInput,
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
import { OutflowApiCreateInput } from './inputs/OutflowApiCreateInput'
import { outflowService } from './outflowService'

@Resolver(Outflow)
export class OutflowResolver {
	@Query(() => [Outflow])
	async outflows(): Promise<Outflow[]> {
		return outflowService.getAllOutflows()
	}

	@Query(() => Outflow, { nullable: true })
	async outflow(@Arg('id', () => Int) id: number): Promise<Outflow | null> {
		return outflowService.getOutflowById(id)
	}

	@Query(() => [Outflow], { nullable: true })
	async outflowsByPersonId(
		@Arg('personId', () => Int) personId: number
	): Promise<Outflow[] | null> {
		return outflowService.getOutflowsWithDetailsByPersonId(personId)
	}

	@Mutation(() => Outflow)
	async createOutflow(
		@Arg('data', () => OutflowApiCreateInput) data: OutflowApiCreateInput
	): Promise<Outflow> {
		try {
			return await outflowService.createOutflow(data)
		} catch (error: any) {
			if (error instanceof UserInputError) {
				throw error
			}
			handlePrismaError(error, 'Outflow', 'Create')
		}
	}

	@Mutation(() => Outflow, { nullable: true })
	async updateOutflow(
		@Arg('id', () => Int) id: number,
		@Arg('data', () => OutflowUpdateInput) data: OutflowUpdateInput
	): Promise<Outflow | null> {
		const hasActualUpdates = Object.values(data).some(
			value => value !== undefined && value !== null
		)

		if (!hasActualUpdates) {
			const currentOutflow = await outflowService.getOutflowById(id)

			if (!currentOutflow)
				throw new UserInputError(`Расход с ID ${id} не найден.`)

			return currentOutflow
		}

		try {
			return await outflowService.updateOutflow(id, data)
		} catch (error: any) {
			if (error instanceof UserInputError) {
				throw error
			}
			handlePrismaError(error, 'Outflow', 'Update', { entityId: id })
		}
	}

	@Mutation(() => Boolean)
	async deleteOutflow(@Arg('id', () => Int) id: number): Promise<boolean> {
		try {
			await outflowService.deleteOutflow(id)
			return true
		} catch (error) {
			handlePrismaError(error, 'Outflow', 'Delete', { entityId: id })
		}
	}

	@FieldResolver(() => Person)
	async person(@Root() outflow: Outflow): Promise<Person | null> {
		return prisma.person.findUnique({ where: { id: outflow.personId } })
	}

	@FieldResolver(() => Facility)
	async facility(@Root() outflow: Outflow): Promise<Facility | null> {
		return prisma.facility.findUnique({ where: { id: outflow.facilityId } })
	}

	@FieldResolver(() => Job, { nullable: true })
	async job(@Root() outflow: Outflow): Promise<Job | null> {
		if (!outflow.jobId) {
			return null
		}
		return prisma.job.findUnique({
			where: { id: outflow.jobId },
		})
	}
}
