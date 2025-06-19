import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobUncheckedCreateInput } from "../../../inputs/JobUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneJobArgs {
  @TypeGraphQL.Field(_type => JobUncheckedCreateInput, {
    nullable: false
  })
  data!: JobUncheckedCreateInput;
}
