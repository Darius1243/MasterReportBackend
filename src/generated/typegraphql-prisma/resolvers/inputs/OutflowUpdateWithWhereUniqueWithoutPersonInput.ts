import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedUpdateWithoutPersonInput } from "../inputs/OutflowUncheckedUpdateWithoutPersonInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUpdateWithWhereUniqueWithoutPersonInput", {})
export class OutflowUpdateWithWhereUniqueWithoutPersonInput {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateWithoutPersonInput, {
    nullable: false
  })
  data!: OutflowUncheckedUpdateWithoutPersonInput;
}
