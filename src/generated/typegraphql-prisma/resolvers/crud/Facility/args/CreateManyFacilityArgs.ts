import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FacilityCreateManyInput } from "../../../inputs/FacilityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFacilityArgs {
  @TypeGraphQL.Field(_type => [FacilityCreateManyInput], {
    nullable: false
  })
  data!: FacilityCreateManyInput[];
}
