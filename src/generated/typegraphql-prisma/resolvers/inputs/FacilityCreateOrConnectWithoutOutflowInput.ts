import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityUncheckedCreateWithoutOutflowInput } from "../inputs/FacilityUncheckedCreateWithoutOutflowInput";
import { FacilityWhereUniqueInput } from "../inputs/FacilityWhereUniqueInput";

@TypeGraphQL.InputType("FacilityCreateOrConnectWithoutOutflowInput", {})
export class FacilityCreateOrConnectWithoutOutflowInput {
  @TypeGraphQL.Field(_type => FacilityWhereUniqueInput, {
    nullable: false
  })
  where!: FacilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => FacilityUncheckedCreateWithoutOutflowInput, {
    nullable: false
  })
  create!: FacilityUncheckedCreateWithoutOutflowInput;
}
