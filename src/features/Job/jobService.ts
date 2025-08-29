import prisma from '@config/database'
import { Job, Prisma } from '@generated/prisma'
import { JobCreateInput } from '@generated/typegraphql-prisma'

export const jobService = {
	async getAllJobs(): Promise<Job[]> {
		return prisma.job.findMany()
	},

	async getJobById(id: number): Promise<Job | null> {
		return prisma.job.findUnique({ where: { id } })
	},

	async createJob(data: JobCreateInput): Promise<Job> {
		return prisma.job.create({ data: data as Prisma.JobCreateInput })
	},

	async updateJob(id: number, data: any): Promise<Job | null> {
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

		return prisma.job.update({
			where: { id },
			data: prismaData,
		})
	},

	async deleteJob(id: number): Promise<boolean> {
		await prisma.job.delete({ where: { id } })
		return true
	},
}
