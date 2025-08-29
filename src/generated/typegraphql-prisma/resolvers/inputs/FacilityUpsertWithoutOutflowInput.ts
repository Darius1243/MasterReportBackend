import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityUncheckedCreateWithoutOutflowInput } from "../inputs/FacilityUncheckedCreateWithoutOutflowInput";
import { FacilityUncheckedUpdateWithoutOutflowInput } from "../inputs/FacilityUncheckedUpdateWithoutOutflowInput";
import { FacilityWhereInput } from "../inputs/FacilityWhereInput";

@TypeGraphQL.InputType("FacilityUpsertWithoutOutflowInput", {})
export class FacilityUpsertWithoutOutflowInput {
  @TypeGraphQL.Field(_type => FacilityUncheckedUpdateWithoutOutflowInput, {
    nullable: false
  })
  update!: FacilityUncheckedUpdateWithoutOutflowInput;

  @TypeGraphQL.Field(_type => FacilityUncheckedCreateWithoutOutflowInput, {
    nullable: false
  })
  create!: FacilityUncheckedCreateWithoutOutflowInput;

  @TypeGraphQL.Field(_type => FacilityWhereInput, {
    nullable: true
  })
  where?: FacilityWhereInput | undefined;
}
