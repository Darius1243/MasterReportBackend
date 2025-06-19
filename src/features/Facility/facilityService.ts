import prisma from '@config/database'
import { Facility, Prisma } from '@generated/prisma'
import {
	FacilityCreateInput,
	FacilityUpdateInput,
} from '@generated/typegraphql-prisma'

export const facilityService = {
	async getAllFacilities(): Promise<Facility[]> {
		return prisma.facility.findMany()
	},

	async getFacilityById(id: number): Promise<Facility | null> {
		return prisma.facility.findUnique({ where: { id } })
	},

	async createFacility(data: FacilityCreateInput): Promise<Facility> {
		return prisma.facility.create({ data: data as Prisma.FacilityCreateInput })
	},

	async updateFacility(
		id: number,
		data: FacilityUpdateInput
	): Promise<Facility | null> {
		return prisma.facility.update({
			where: { id },
			data: data as Prisma.FacilityUpdateInput,
		})
	},

	async deleteFacility(id: number): Promise<boolean> {
		await prisma.facility.delete({ where: { id } })
		return true // Если prisma.facility.delete не выбросил ошибку, значит удаление успешно
	},
}
