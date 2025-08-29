import { Field, InputType } from 'type-graphql'

@InputType()
export class FacilityUpdateSimpleInput {
	@Field({ nullable: true })
	name?: string
}
