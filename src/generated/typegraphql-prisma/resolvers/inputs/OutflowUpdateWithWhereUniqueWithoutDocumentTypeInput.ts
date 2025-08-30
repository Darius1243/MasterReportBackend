import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedUpdateWithoutDocumentTypeInput } from "../inputs/OutflowUncheckedUpdateWithoutDocumentTypeInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUpdateWithWhereUniqueWithoutDocumentTypeInput", {})
export class OutflowUpdateWithWhereUniqueWithoutDocumentTypeInput {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateWithoutDocumentTypeInput, {
    nullable: false
  })
  data!: OutflowUncheckedUpdateWithoutDocumentTypeInput;
}
