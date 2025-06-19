import {
	Facility,
	FacilityCreateInput,
	FacilityUpdateInput,
} from '@generated/typegraphql-prisma'
import { handlePrismaError } from '@utils/errors'
import { UserInputError } from 'apollo-server-express'
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql'
import { facilityService } from './facilityService'

@Resolver(Facility)
export class FacilityResolver {
	@Query(() => [Facility])
	async facilities(): Promise<Facility[]> {
		return facilityService.getAllFacilities()
	}

	@Query(() => Facility, { nullable: true })
	async facility(@Arg('id', () => Int) id: number): Promise<Facility | null> {
		return facilityService.getFacilityById(id)
	}

	@Mutation(() => Facility)
	async createFacility(
		@Arg('data', () => FacilityCreateInput) data: FacilityCreateInput
	): Promise<Facility> {
		try {
			return await facilityService.createFacility(data)
		} catch (error) {
			handlePrismaError(error, 'Facility', 'Create')
		}
	}

	@Mutation(() => Facility, { nullable: true })
	async updateFacility(
		@Arg('id', () => Int) id: number,
		@Arg('data', () => FacilityUpdateInput) data: FacilityUpdateInput
	): Promise<Facility | null> {
		const hasActualUpdates = Object.values(data).some(
			value => value !== undefined && value !== null
		)

		if (!hasActualUpdates) {
			const currentFacility = await facilityService.getFacilityById(id)

			if (!currentFacility)
				throw new UserInputError(`Удобство с ID ${id} не найдено.`)

			return currentFacility
		}

		try {
			return await facilityService.updateFacility(id, data)
		} catch (error: any) {
			handlePrismaError(error, 'Facility', 'Update', { entityId: id })
		}
	}

	@Mutation(() => Boolean)
	async deleteFacility(@Arg('id', () => Int) id: number): Promise<boolean> {
		try {
			await facilityService.deleteFacility(id)

			return true
		} catch (error) {
			handlePrismaError(error, 'Facility', 'Delete', { entityId: id })
		}
	}
}
