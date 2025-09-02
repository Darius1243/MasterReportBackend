import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedUpdateWithoutJobInput } from "../inputs/OutflowUncheckedUpdateWithoutJobInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUpdateWithWhereUniqueWithoutJobInput", {})
export class OutflowUpdateWithWhereUniqueWithoutJobInput {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateWithoutJobInput, {
    nullable: false
  })
  data!: OutflowUncheckedUpdateWithoutJobInput;
}
