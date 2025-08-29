import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OutflowCreateManyInput } from "../../../inputs/OutflowCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOutflowArgs {
  @TypeGraphQL.Field(_type => [OutflowCreateManyInput], {
    nullable: false
  })
  data!: OutflowCreateManyInput[];
}
