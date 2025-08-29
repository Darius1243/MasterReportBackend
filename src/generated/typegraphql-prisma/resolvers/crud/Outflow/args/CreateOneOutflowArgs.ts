import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OutflowUncheckedCreateInput } from "../../../inputs/OutflowUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOutflowArgs {
  @TypeGraphQL.Field(_type => OutflowUncheckedCreateInput, {
    nullable: false
  })
  data!: OutflowUncheckedCreateInput;
}
