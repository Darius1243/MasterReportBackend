import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FacilityUncheckedCreateInput } from "../../../inputs/FacilityUncheckedCreateInput";
import { FacilityUncheckedUpdateInput } from "../../../inputs/FacilityUncheckedUpdateInput";
import { FacilityWhereUniqueInput } from "../../../inputs/FacilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFacilityArgs {
  @TypeGraphQL.Field(_type => FacilityWhereUniqueInput, {
    nullable: false
  })
  where!: FacilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => FacilityUncheckedCreateInput, {
    nullable: false
  })
  create!: FacilityUncheckedCreateInput;

  @TypeGraphQL.Field(_type => FacilityUncheckedUpdateInput, {
    nullable: false
  })
  update!: FacilityUncheckedUpdateInput;
}
