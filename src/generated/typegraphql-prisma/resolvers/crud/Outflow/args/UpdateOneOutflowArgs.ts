import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OutflowUncheckedUpdateInput } from "../../../inputs/OutflowUncheckedUpdateInput";
import { OutflowWhereUniqueInput } from "../../../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOutflowArgs {
  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateInput, {
    nullable: false
  })
  data!: OutflowUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;
}
