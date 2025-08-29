import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateNestedManyWithoutFacilityInput } from "../inputs/InflowCreateNestedManyWithoutFacilityInput";

@TypeGraphQL.InputType("FacilityCreateWithoutOutflowInput", {})
export class FacilityCreateWithoutOutflowInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => InflowCreateNestedManyWithoutFacilityInput, {
    nullable: true
  })
  inflows?: InflowCreateNestedManyWithoutFacilityInput | undefined;
}
