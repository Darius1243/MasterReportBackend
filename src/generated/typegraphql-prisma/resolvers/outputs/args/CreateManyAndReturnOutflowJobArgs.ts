import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobWhereInput } from "../../inputs/JobWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnOutflowJobArgs {
  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  where?: JobWhereInput | undefined;
}
