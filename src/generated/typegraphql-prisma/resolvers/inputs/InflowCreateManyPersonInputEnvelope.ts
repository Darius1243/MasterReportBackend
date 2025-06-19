import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateManyPersonInput } from "../inputs/InflowCreateManyPersonInput";

@TypeGraphQL.InputType("InflowCreateManyPersonInputEnvelope", {})
export class InflowCreateManyPersonInputEnvelope {
  @TypeGraphQL.Field(_type => [InflowCreateManyPersonInput], {
    nullable: false
  })
  data!: InflowCreateManyPersonInput[];
}
