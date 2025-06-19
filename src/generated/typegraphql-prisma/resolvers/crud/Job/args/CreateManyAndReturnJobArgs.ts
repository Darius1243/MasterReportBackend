import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobCreateManyInput } from "../../../inputs/JobCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnJobArgs {
  @TypeGraphQL.Field(_type => [JobCreateManyInput], {
    nullable: false
  })
  data!: JobCreateManyInput[];
}
