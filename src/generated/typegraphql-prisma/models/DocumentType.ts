import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ObjectType('DocumentType', {})
export class DocumentType {
	@TypeGraphQL.Field(_type => TypeGraphQL.Int, {
		nullable: false,
	})
	id!: number

	@TypeGraphQL.Field(_type => String, {
		nullable: false,
	})
	name!: string
}
