import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedCreateWithoutDocumentTypeInput } from "../inputs/OutflowUncheckedCreateWithoutDocumentTypeInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowCreateOrConnectWithoutDocumentTypeInput", {})
export class OutflowCreateOrConnectWithoutDocumentTypeInput {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedCreateWithoutDocumentTypeInput, {
    nullable: false
  })
  create!: OutflowUncheckedCreateWithoutDocumentTypeInput;
}
