import { DocumentTypeResolver } from '@features/DocumentType/DocumentTypeResolver'
import { FacilityResolver } from '@features/Facility/FacilityResolver'
import { InflowResolver } from '@features/Inflow/InflowResolver'
import { JobResolver } from '@features/Job/JobResolver'
import { OutflowResolver } from '@features/Outflow/OutflowResolver'
import { PersonResolver } from '@features/Person/PersonResolver'
import { GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'

export async function createGraphQLSchema(): Promise<GraphQLSchema> {
	return buildSchema({
		resolvers: [
			PersonResolver,
			FacilityResolver,
			JobResolver,
			InflowResolver,
			OutflowResolver,
			DocumentTypeResolver,
		],
		validate: { forbidUnknownValues: false },
	})
}
