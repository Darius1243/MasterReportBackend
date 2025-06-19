import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedCreateWithoutFacilityInput } from "../inputs/InflowUncheckedCreateWithoutFacilityInput";
import { InflowUncheckedUpdateWithoutFacilityInput } from "../inputs/InflowUncheckedUpdateWithoutFacilityInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowUpsertWithWhereUniqueWithoutFacilityInput", {})
export class InflowUpsertWithWhereUniqueWithoutFacilityInput {
  @TypeGraphQL.Field(_type => InflowWhereUniqueInput, {
    nullable: false
  })
  where!: InflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => InflowUncheckedUpdateWithoutFacilityInput, {
    nullable: false
  })
  update!: InflowUncheckedUpdateWithoutFacilityInput;

  @TypeGraphQL.Field(_type => InflowUncheckedCreateWithoutFacilityInput, {
    nullable: false
  })
  create!: InflowUncheckedCreateWithoutFacilityInput;
}
