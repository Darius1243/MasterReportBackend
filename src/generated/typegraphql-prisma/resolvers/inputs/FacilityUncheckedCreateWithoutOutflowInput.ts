import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedCreateNestedManyWithoutFacilityInput } from "../inputs/InflowUncheckedCreateNestedManyWithoutFacilityInput";

@TypeGraphQL.InputType("FacilityUncheckedCreateWithoutOutflowInput", {})
export class FacilityUncheckedCreateWithoutOutflowInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => InflowUncheckedCreateNestedManyWithoutFacilityInput, {
    nullable: true
  })
  inflows?: InflowUncheckedCreateNestedManyWithoutFacilityInput | undefined;
}
