import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobUncheckedUpdateManyInput } from "../../../inputs/JobUncheckedUpdateManyInput";
import { JobWhereInput } from "../../../inputs/JobWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyJobArgs {
  @TypeGraphQL.Field(_type => JobUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: JobUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  where?: JobWhereInput | undefined;
}
