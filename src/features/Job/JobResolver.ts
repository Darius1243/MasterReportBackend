import {
	Job,
	JobCreateInput,
	JobUpdateInput,
} from '@generated/typegraphql-prisma'
import { handlePrismaError } from '@utils/errors'
import { UserInputError } from 'apollo-server-express'
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql'
import { jobService } from './jobService'

@Resolver(Job)
export class JobResolver {
	@Query(() => [Job])
	async jobs(): Promise<Job[]> {
		return jobService.getAllJobs()
	}

	@Query(() => Job, { nullable: true })
	async job(@Arg('id', () => Int) id: number): Promise<Job | null> {
		return jobService.getJobById(id)
	}

	@Mutation(() => Job)
	async createJob(
		@Arg('data', () => JobCreateInput) data: JobCreateInput
	): Promise<Job> {
		try {
			return await jobService.createJob(data)
		} catch (error) {
			handlePrismaError(error, 'Job', 'Create')
		}
	}

	@Mutation(() => Job, { nullable: true })
	async updateJob(
		@Arg('id', () => Int) id: number,
		@Arg('data', () => JobUpdateInput) data: JobUpdateInput
	): Promise<Job | null> {
		const hasActualUpdates = Object.values(data).some(
			value => value !== undefined && value !== null
		)

		if (!hasActualUpdates) {
			const currentJob = await jobService.getJobById(id)

			if (!currentJob) throw new UserInputError(`Работа с ID ${id} не найдена.`)

			return currentJob
		}

		try {
			return await jobService.updateJob(id, data)
		} catch (error: any) {
			handlePrismaError(error, 'Job', 'Update', { entityId: id })
		}
	}

	@Mutation(() => Boolean)
	async deleteJob(@Arg('id', () => Int) id: number): Promise<boolean> {
		try {
			await jobService.deleteJob(id)
			return true
		} catch (error) {
			handlePrismaError(error, 'Job', 'Delete', { entityId: id })
		}
	}
}
