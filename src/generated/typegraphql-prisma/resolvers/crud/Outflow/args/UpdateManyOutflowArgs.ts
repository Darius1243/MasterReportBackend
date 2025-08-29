import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OutflowUncheckedUpdateManyInput } from "../../../inputs/OutflowUncheckedUpdateManyInput";
import { OutflowWhereInput } from "../../../inputs/OutflowWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOutflowArgs {
  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: OutflowUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => OutflowWhereInput, {
    nullable: true
  })
  where?: OutflowWhereInput | undefined;
}
