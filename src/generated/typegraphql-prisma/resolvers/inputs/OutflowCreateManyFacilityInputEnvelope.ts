import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateManyFacilityInput } from "../inputs/OutflowCreateManyFacilityInput";

@TypeGraphQL.InputType("OutflowCreateManyFacilityInputEnvelope", {})
export class OutflowCreateManyFacilityInputEnvelope {
  @TypeGraphQL.Field(_type => [OutflowCreateManyFacilityInput], {
    nullable: false
  })
  data!: OutflowCreateManyFacilityInput[];
}
