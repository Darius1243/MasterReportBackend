import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InflowCreateManyInput } from "../../../inputs/InflowCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnInflowArgs {
  @TypeGraphQL.Field(_type => [InflowCreateManyInput], {
    nullable: false
  })
  data!: InflowCreateManyInput[];
}
