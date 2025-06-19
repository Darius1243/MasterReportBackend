import {
	Person,
	PersonCreateInput,
	PersonUpdateInput,
} from '@generated/typegraphql-prisma'
import { handlePrismaError } from '@utils/errors'
import { UserInputError } from 'apollo-server-express'
import {
	Arg,
	Float,
	Int,
	Mutation,
	ObjectType,
	Query,
	Resolver,
	Field as TypeGraphQLField,
} from 'type-graphql'
import { personService } from './personService'

@ObjectType()
class PersonWithStatistics extends Person {
	@TypeGraphQLField(() => Float)
	totalInflowAmount!: number

	@TypeGraphQLField(() => [Int]) // Добавляем поле для ID приходов
	inflowIds!: number[]
}

@Resolver(Person)
export class PersonResolver {
	@Query(() => [Person])
	async persons(): Promise<Person[]> {
		return personService.getAllPersons()
	}
	@Query(() => [PersonWithStatistics], { nullable: true })
	async personsWithStatistics(): Promise<PersonWithStatistics[] | null> {
		return personService.getPersonWithStatistics()
	}

	@Query(() => Person, { nullable: true })
	async person(@Arg('id', () => Int) id: number): Promise<Person | null> {
		return personService.getPersonById(id)
	}

	@Mutation(() => Person)
	async createPerson(
		@Arg('data', () => PersonCreateInput) data: PersonCreateInput
	): Promise<Person> {
		try {
			return await personService.createPerson(data)
		} catch (error) {
			handlePrismaError(error, 'Person', 'Create')
		}
	}

	@Mutation(() => Person, { nullable: true })
	async updatePerson(
		@Arg('id', () => Int) id: number,
		@Arg('data', () => PersonUpdateInput) data: PersonUpdateInput
	): Promise<Person | null> {
		const hasActualUpdates = Object.values(data).some(
			value => value !== undefined && value !== null
		)

		if (!hasActualUpdates) {
			const currentPerson = await personService.getPersonById(id)

			if (!currentPerson)
				throw new UserInputError(`Человек с ID ${id} не найден.`)

			return currentPerson
		}

		try {
			return await personService.updatePerson(id, data)
		} catch (error: any) {
			handlePrismaError(error, 'Person', 'Update', { entityId: id })
		}
	}

	@Mutation(() => Boolean)
	async deletePerson(@Arg('id', () => Int) id: number): Promise<boolean> {
		try {
			await personService.deletePerson(id)

			return true
		} catch (error) {
			handlePrismaError(error, 'Person', 'Delete', { entityId: id })
		}
	}
}
