import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedUpdateWithoutFacilityInput } from "../inputs/InflowUncheckedUpdateWithoutFacilityInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowUpdateWithWhereUniqueWithoutFacilityInput", {})
export class InflowUpdateWithWhereUniqueWithoutFacilityInput {
  @TypeGraphQL.Field(_type => InflowWhereUniqueInput, {
    nullable: false
  })
  where!: InflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => InflowUncheckedUpdateWithoutFacilityInput, {
    nullable: false
  })
  data!: InflowUncheckedUpdateWithoutFacilityInput;
}
