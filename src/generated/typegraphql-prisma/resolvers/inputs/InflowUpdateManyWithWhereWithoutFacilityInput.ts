import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowScalarWhereInput } from "../inputs/InflowScalarWhereInput";
import { InflowUncheckedUpdateManyWithoutFacilityInput } from "../inputs/InflowUncheckedUpdateManyWithoutFacilityInput";

@TypeGraphQL.InputType("InflowUpdateManyWithWhereWithoutFacilityInput", {})
export class InflowUpdateManyWithWhereWithoutFacilityInput {
  @TypeGraphQL.Field(_type => InflowScalarWhereInput, {
    nullable: false
  })
  where!: InflowScalarWhereInput;

  @TypeGraphQL.Field(_type => InflowUncheckedUpdateManyWithoutFacilityInput, {
    nullable: false
  })
  data!: InflowUncheckedUpdateManyWithoutFacilityInput;
}
