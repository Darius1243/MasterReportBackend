import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedCreateWithoutJobInput } from "../inputs/OutflowUncheckedCreateWithoutJobInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowCreateOrConnectWithoutJobInput", {})
export class OutflowCreateOrConnectWithoutJobInput {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedCreateWithoutJobInput, {
    nullable: false
  })
  create!: OutflowUncheckedCreateWithoutJobInput;
}
