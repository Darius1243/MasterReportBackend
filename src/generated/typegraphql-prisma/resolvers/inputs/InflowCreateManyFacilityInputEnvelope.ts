import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateManyFacilityInput } from "../inputs/InflowCreateManyFacilityInput";

@TypeGraphQL.InputType("InflowCreateManyFacilityInputEnvelope", {})
export class InflowCreateManyFacilityInputEnvelope {
  @TypeGraphQL.Field(_type => [InflowCreateManyFacilityInput], {
    nullable: false
  })
  data!: InflowCreateManyFacilityInput[];
}
