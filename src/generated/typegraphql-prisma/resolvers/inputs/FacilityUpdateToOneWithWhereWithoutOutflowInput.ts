import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityUncheckedUpdateWithoutOutflowInput } from "../inputs/FacilityUncheckedUpdateWithoutOutflowInput";
import { FacilityWhereInput } from "../inputs/FacilityWhereInput";

@TypeGraphQL.InputType("FacilityUpdateToOneWithWhereWithoutOutflowInput", {})
export class FacilityUpdateToOneWithWhereWithoutOutflowInput {
  @TypeGraphQL.Field(_type => FacilityWhereInput, {
    nullable: true
  })
  where?: FacilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => FacilityUncheckedUpdateWithoutOutflowInput, {
    nullable: false
  })
  data!: FacilityUncheckedUpdateWithoutOutflowInput;
}
