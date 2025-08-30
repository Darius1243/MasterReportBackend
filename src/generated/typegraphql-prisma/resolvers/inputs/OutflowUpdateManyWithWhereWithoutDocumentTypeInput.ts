import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowScalarWhereInput } from "../inputs/OutflowScalarWhereInput";
import { OutflowUncheckedUpdateManyWithoutDocumentTypeInput } from "../inputs/OutflowUncheckedUpdateManyWithoutDocumentTypeInput";

@TypeGraphQL.InputType("OutflowUpdateManyWithWhereWithoutDocumentTypeInput", {})
export class OutflowUpdateManyWithWhereWithoutDocumentTypeInput {
  @TypeGraphQL.Field(_type => OutflowScalarWhereInput, {
    nullable: false
  })
  where!: OutflowScalarWhereInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateManyWithoutDocumentTypeInput, {
    nullable: false
  })
  data!: OutflowUncheckedUpdateManyWithoutDocumentTypeInput;
}
