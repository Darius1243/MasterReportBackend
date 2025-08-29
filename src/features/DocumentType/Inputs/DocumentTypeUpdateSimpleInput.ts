import { Field, InputType } from 'type-graphql'

@InputType()
export class DocumentTypeUpdateSimpleInput {
	@Field({ nullable: true })
	name?: string
}
