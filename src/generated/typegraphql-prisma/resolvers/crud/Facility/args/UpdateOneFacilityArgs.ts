import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FacilityUncheckedUpdateInput } from "../../../inputs/FacilityUncheckedUpdateInput";
import { FacilityWhereUniqueInput } from "../../../inputs/FacilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFacilityArgs {
  @TypeGraphQL.Field(_type => FacilityUncheckedUpdateInput, {
    nullable: false
  })
  data!: FacilityUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => FacilityWhereUniqueInput, {
    nullable: false
  })
  where!: FacilityWhereUniqueInput;
}
