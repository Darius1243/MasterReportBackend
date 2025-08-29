import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateManyPersonInput } from "../inputs/OutflowCreateManyPersonInput";

@TypeGraphQL.InputType("OutflowCreateManyPersonInputEnvelope", {})
export class OutflowCreateManyPersonInputEnvelope {
  @TypeGraphQL.Field(_type => [OutflowCreateManyPersonInput], {
    nullable: false
  })
  data!: OutflowCreateManyPersonInput[];
}
