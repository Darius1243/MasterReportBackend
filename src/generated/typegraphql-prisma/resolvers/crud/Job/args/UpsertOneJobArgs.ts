import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobUncheckedCreateInput } from "../../../inputs/JobUncheckedCreateInput";
import { JobUncheckedUpdateInput } from "../../../inputs/JobUncheckedUpdateInput";
import { JobWhereUniqueInput } from "../../../inputs/JobWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneJobArgs {
  @TypeGraphQL.Field(_type => JobWhereUniqueInput, {
    nullable: false
  })
  where!: JobWhereUniqueInput;

  @TypeGraphQL.Field(_type => JobUncheckedCreateInput, {
    nullable: false
  })
  create!: JobUncheckedCreateInput;

  @TypeGraphQL.Field(_type => JobUncheckedUpdateInput, {
    nullable: false
  })
  update!: JobUncheckedUpdateInput;
}
