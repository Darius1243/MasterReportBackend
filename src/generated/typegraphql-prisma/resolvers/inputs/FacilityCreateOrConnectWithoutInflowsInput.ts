import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityUncheckedCreateWithoutInflowsInput } from "../inputs/FacilityUncheckedCreateWithoutInflowsInput";
import { FacilityWhereUniqueInput } from "../inputs/FacilityWhereUniqueInput";

@TypeGraphQL.InputType("FacilityCreateOrConnectWithoutInflowsInput", {})
export class FacilityCreateOrConnectWithoutInflowsInput {
  @TypeGraphQL.Field(_type => FacilityWhereUniqueInput, {
    nullable: false
  })
  where!: FacilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => FacilityUncheckedCreateWithoutInflowsInput, {
    nullable: false
  })
  create!: FacilityUncheckedCreateWithoutInflowsInput;
}
