import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityCreateOrConnectWithoutInflowsInput } from "../inputs/FacilityCreateOrConnectWithoutInflowsInput";
import { FacilityUncheckedCreateWithoutInflowsInput } from "../inputs/FacilityUncheckedCreateWithoutInflowsInput";
import { FacilityWhereUniqueInput } from "../inputs/FacilityWhereUniqueInput";

@TypeGraphQL.InputType("FacilityCreateNestedOneWithoutInflowsInput", {})
export class FacilityCreateNestedOneWithoutInflowsInput {
  @TypeGraphQL.Field(_type => FacilityUncheckedCreateWithoutInflowsInput, {
    nullable: true
  })
  create?: FacilityUncheckedCreateWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => FacilityCreateOrConnectWithoutInflowsInput, {
    nullable: true
  })
  connectOrCreate?: FacilityCreateOrConnectWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => FacilityWhereUniqueInput, {
    nullable: true
  })
  connect?: FacilityWhereUniqueInput | undefined;
}
