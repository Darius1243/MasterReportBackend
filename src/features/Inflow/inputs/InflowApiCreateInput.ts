import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.InputType('InflowApiCreateInput', {})
export class InflowApiCreateInput {
	@TypeGraphQL.Field(_type => TypeGraphQL.Float, {
		nullable: false,
	})
	amount!: number

	@TypeGraphQL.Field(_type => Date, {
		nullable: false,
	})
	date!: Date

	@TypeGraphQL.Field(_type => String, {
		nullable: true,
	})
	description?: string | undefined

	@TypeGraphQL.Field(_type => TypeGraphQL.Int, {
		nullable: false,
	})
	person!: number // ID сотрудника

	@TypeGraphQL.Field(_type => TypeGraphQL.Int, {
		nullable: false,
	})
	facility!: number // ID объекта

	@TypeGraphQL.Field(_type => TypeGraphQL.Int, {
		nullable: false,
	})
	job!: number // ID работы
}
