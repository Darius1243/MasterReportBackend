import { Field, InputType } from 'type-graphql'

@InputType()
export class PersonUpdateSimpleInput {
	@Field({ nullable: true })
	email?: string

	@Field({ nullable: true })
	name?: string
}
