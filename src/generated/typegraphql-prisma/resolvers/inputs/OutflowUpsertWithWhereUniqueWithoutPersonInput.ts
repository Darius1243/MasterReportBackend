import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedCreateWithoutPersonInput } from "../inputs/OutflowUncheckedCreateWithoutPersonInput";
import { OutflowUncheckedUpdateWithoutPersonInput } from "../inputs/OutflowUncheckedUpdateWithoutPersonInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowUpsertWithWhereUniqueWithoutPersonInput", {})
export class OutflowUpsertWithWhereUniqueWithoutPersonInput {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateWithoutPersonInput, {
    nullable: false
  })
  update!: OutflowUncheckedUpdateWithoutPersonInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedCreateWithoutPersonInput, {
    nullable: false
  })
  create!: OutflowUncheckedCreateWithoutPersonInput;
}
