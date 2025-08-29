import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OutflowUncheckedCreateInput } from "../../../inputs/OutflowUncheckedCreateInput";
import { OutflowUncheckedUpdateInput } from "../../../inputs/OutflowUncheckedUpdateInput";
import { OutflowWhereUniqueInput } from "../../../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOutflowArgs {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedCreateInput, {
    nullable: false
  })
  create!: OutflowUncheckedCreateInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateInput, {
    nullable: false
  })
  update!: OutflowUncheckedUpdateInput;
}
