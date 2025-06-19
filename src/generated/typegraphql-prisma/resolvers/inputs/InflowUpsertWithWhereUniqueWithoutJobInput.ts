import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedCreateWithoutJobInput } from "../inputs/InflowUncheckedCreateWithoutJobInput";
import { InflowUncheckedUpdateWithoutJobInput } from "../inputs/InflowUncheckedUpdateWithoutJobInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowUpsertWithWhereUniqueWithoutJobInput", {})
export class InflowUpsertWithWhereUniqueWithoutJobInput {
  @TypeGraphQL.Field(_type => InflowWhereUniqueInput, {
    nullable: false
  })
  where!: InflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => InflowUncheckedUpdateWithoutJobInput, {
    nullable: false
  })
  update!: InflowUncheckedUpdateWithoutJobInput;

  @TypeGraphQL.Field(_type => InflowUncheckedCreateWithoutJobInput, {
    nullable: false
  })
  create!: InflowUncheckedCreateWithoutJobInput;
}
