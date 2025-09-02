import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateManyJobInput } from "../inputs/OutflowCreateManyJobInput";

@TypeGraphQL.InputType("OutflowCreateManyJobInputEnvelope", {})
export class OutflowCreateManyJobInputEnvelope {
  @TypeGraphQL.Field(_type => [OutflowCreateManyJobInput], {
    nullable: false
  })
  data!: OutflowCreateManyJobInput[];
}
