import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobWhereUniqueInput } from "../../../inputs/JobWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueJobOrThrowArgs {
  @TypeGraphQL.Field(_type => JobWhereUniqueInput, {
    nullable: false
  })
  where!: JobWhereUniqueInput;
}
