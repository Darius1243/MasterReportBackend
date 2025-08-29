import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityCreateOrConnectWithoutOutflowInput } from "../inputs/FacilityCreateOrConnectWithoutOutflowInput";
import { FacilityUncheckedCreateWithoutOutflowInput } from "../inputs/FacilityUncheckedCreateWithoutOutflowInput";
import { FacilityWhereUniqueInput } from "../inputs/FacilityWhereUniqueInput";

@TypeGraphQL.InputType("FacilityCreateNestedOneWithoutOutflowInput", {})
export class FacilityCreateNestedOneWithoutOutflowInput {
  @TypeGraphQL.Field(_type => FacilityUncheckedCreateWithoutOutflowInput, {
    nullable: true
  })
  create?: FacilityUncheckedCreateWithoutOutflowInput | undefined;

  @TypeGraphQL.Field(_type => FacilityCreateOrConnectWithoutOutflowInput, {
    nullable: true
  })
  connectOrCreate?: FacilityCreateOrConnectWithoutOutflowInput | undefined;

  @TypeGraphQL.Field(_type => FacilityWhereUniqueInput, {
    nullable: true
  })
  connect?: FacilityWhereUniqueInput | undefined;
}
