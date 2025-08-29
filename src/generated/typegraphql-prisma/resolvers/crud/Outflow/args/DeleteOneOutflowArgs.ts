import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OutflowWhereUniqueInput } from "../../../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOutflowArgs {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;
}
