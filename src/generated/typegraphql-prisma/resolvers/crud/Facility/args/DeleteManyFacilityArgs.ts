import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FacilityWhereInput } from "../../../inputs/FacilityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFacilityArgs {
  @TypeGraphQL.Field(_type => FacilityWhereInput, {
    nullable: true
  })
  where?: FacilityWhereInput | undefined;
}
