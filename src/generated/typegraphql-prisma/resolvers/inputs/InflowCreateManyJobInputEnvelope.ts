import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateManyJobInput } from "../inputs/InflowCreateManyJobInput";

@TypeGraphQL.InputType("InflowCreateManyJobInputEnvelope", {})
export class InflowCreateManyJobInputEnvelope {
  @TypeGraphQL.Field(_type => [InflowCreateManyJobInput], {
    nullable: false
  })
  data!: InflowCreateManyJobInput[];
}
