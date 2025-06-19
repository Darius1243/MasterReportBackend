import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InflowWhereUniqueInput } from "../../../inputs/InflowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneInflowArgs {
  @TypeGraphQL.Field(_type => InflowWhereUniqueInput, {
    nullable: false
  })
  where!: InflowWhereUniqueInput;
}
