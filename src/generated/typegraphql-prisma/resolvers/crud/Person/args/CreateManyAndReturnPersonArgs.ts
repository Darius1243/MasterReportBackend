import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonCreateManyInput } from "../../../inputs/PersonCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPersonArgs {
  @TypeGraphQL.Field(_type => [PersonCreateManyInput], {
    nullable: false
  })
  data!: PersonCreateManyInput[];
}
