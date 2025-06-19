import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedCreateWithoutPersonInput } from "../inputs/InflowUncheckedCreateWithoutPersonInput";
import { InflowUncheckedUpdateWithoutPersonInput } from "../inputs/InflowUncheckedUpdateWithoutPersonInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowUpsertWithWhereUniqueWithoutPersonInput", {})
export class InflowUpsertWithWhereUniqueWithoutPersonInput {
  @TypeGraphQL.Field(_type => InflowWhereUniqueInput, {
    nullable: false
  })
  where!: InflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => InflowUncheckedUpdateWithoutPersonInput, {
    nullable: false
  })
  update!: InflowUncheckedUpdateWithoutPersonInput;

  @TypeGraphQL.Field(_type => InflowUncheckedCreateWithoutPersonInput, {
    nullable: false
  })
  create!: InflowUncheckedCreateWithoutPersonInput;
}
