import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FacilityWhereUniqueInput } from "../../../inputs/FacilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFacilityOrThrowArgs {
  @TypeGraphQL.Field(_type => FacilityWhereUniqueInput, {
    nullable: false
  })
  where!: FacilityWhereUniqueInput;
}
