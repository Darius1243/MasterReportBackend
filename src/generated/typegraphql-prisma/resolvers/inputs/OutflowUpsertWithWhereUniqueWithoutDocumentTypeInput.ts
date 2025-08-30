import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedCreateWithoutDocumentTypeInput } from "../inputs/OutflowUncheckedCreateWithoutDocumentTypeInput";
import { OutflowUncheckedUpdateWithoutDocumentTypeInput } from "../inputs/OutflowUncheckedUpdateWithoutDocumentTypeInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUpsertWithWhereUniqueWithoutDocumentTypeInput", {})
export class OutflowUpsertWithWhereUniqueWithoutDocumentTypeInput {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateWithoutDocumentTypeInput, {
    nullable: false
  })
  update!: OutflowUncheckedUpdateWithoutDocumentTypeInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedCreateWithoutDocumentTypeInput, {
    nullable: false
  })
  create!: OutflowUncheckedCreateWithoutDocumentTypeInput;
}
