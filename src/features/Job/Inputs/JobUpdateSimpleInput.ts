import { Field, InputType } from 'type-graphql'

@InputType()
export class JobUpdateSimpleInput {
	@Field({ nullable: true })
	name?: string
}
