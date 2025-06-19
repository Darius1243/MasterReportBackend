import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FacilityUncheckedUpdateManyInput } from "../../../inputs/FacilityUncheckedUpdateManyInput";
import { FacilityWhereInput } from "../../../inputs/FacilityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFacilityArgs {
  @TypeGraphQL.Field(_type => FacilityUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: FacilityUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => FacilityWhereInput, {
    nullable: true
  })
  where?: FacilityWhereInput | undefined;
}
