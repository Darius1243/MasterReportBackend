import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityUncheckedCreateWithoutInflowsInput } from "../inputs/FacilityUncheckedCreateWithoutInflowsInput";
import { FacilityUncheckedUpdateWithoutInflowsInput } from "../inputs/FacilityUncheckedUpdateWithoutInflowsInput";
import { FacilityWhereInput } from "../inputs/FacilityWhereInput";

@TypeGraphQL.InputType("FacilityUpsertWithoutInflowsInput", {})
export class FacilityUpsertWithoutInflowsInput {
  @TypeGraphQL.Field(_type => FacilityUncheckedUpdateWithoutInflowsInput, {
    nullable: false
  })
  update!: FacilityUncheckedUpdateWithoutInflowsInput;

  @TypeGraphQL.Field(_type => FacilityUncheckedCreateWithoutInflowsInput, {
    nullable: false
  })
  create!: FacilityUncheckedCreateWithoutInflowsInput;

  @TypeGraphQL.Field(_type => FacilityWhereInput, {
    nullable: true
  })
  where?: FacilityWhereInput | undefined;
}
