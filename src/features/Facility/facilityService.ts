import prisma from '@config/database'
import { Facility, Prisma } from '@generated/prisma'
import { FacilityCreateInput } from '@generated/typegraphql-prisma'

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

	async updateFacility(id: number, data: any): Promise<Facility | null> {
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

		return prisma.facility.update({
			where: { id },
			data: prismaData,
		})
	},

	async deleteFacility(id: number): Promise<boolean> {
		await prisma.facility.delete({ where: { id } })
		return true
	},
}
