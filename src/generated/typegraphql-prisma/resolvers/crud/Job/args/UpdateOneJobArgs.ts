import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobUncheckedUpdateInput } from "../../../inputs/JobUncheckedUpdateInput";
import { JobWhereUniqueInput } from "../../../inputs/JobWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneJobArgs {
  @TypeGraphQL.Field(_type => JobUncheckedUpdateInput, {
    nullable: false
  })
  data!: JobUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => JobWhereUniqueInput, {
    nullable: false
  })
  where!: JobWhereUniqueInput;
}
