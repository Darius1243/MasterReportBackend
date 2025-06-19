import prisma from '@config/database'
import { Prisma } from '@generated/prisma' // Исправленный импорт
import {
	Job,
	JobCreateInput,
	JobUpdateInput,
} from '@generated/typegraphql-prisma'

export const jobService = {
	async getAllJobs(): Promise<Job[]> {
		return prisma.job.findMany()
	},

	async getJobById(id: number): Promise<Job | null> {
		return prisma.job.findUnique({
			where: { id },
		})
	},

	async createJob(data: JobCreateInput): Promise<Job> {
		// Здесь может быть дополнительная логика валидации или обработки данных
		return prisma.job.create({
			data: data as Prisma.JobCreateInput,
		})
	},

	async updateJob(id: number, data: JobUpdateInput): Promise<Job | null> {
		// Здесь может быть дополнительная логика валидации или обработки данных
		return prisma.job.update({
			where: { id },
			data: data as Prisma.JobUpdateInput,
		})
	},

	async deleteJob(id: number): Promise<Job | null> {
		// Здесь может быть дополнительная логика, например, проверка связанных сущностей
		return prisma.job.delete({
			where: { id },
		})
	},
}

// Можно добавить более сложные методы, специфичные для бизнес-логики "Job"
