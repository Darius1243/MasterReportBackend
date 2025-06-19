import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FacilityUncheckedCreateInput } from "../../../inputs/FacilityUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFacilityArgs {
  @TypeGraphQL.Field(_type => FacilityUncheckedCreateInput, {
    nullable: false
  })
  data!: FacilityUncheckedCreateInput;
}
