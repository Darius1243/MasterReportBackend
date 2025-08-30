import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateManyDocumentTypeInput } from "../inputs/OutflowCreateManyDocumentTypeInput";

@TypeGraphQL.InputType("OutflowCreateManyDocumentTypeInputEnvelope", {})
export class OutflowCreateManyDocumentTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [OutflowCreateManyDocumentTypeInput], {
    nullable: false
  })
  data!: OutflowCreateManyDocumentTypeInput[];
}
