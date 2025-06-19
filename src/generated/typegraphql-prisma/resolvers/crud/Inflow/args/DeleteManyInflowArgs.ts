import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InflowWhereInput } from "../../../inputs/InflowWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyInflowArgs {
  @TypeGraphQL.Field(_type => InflowWhereInput, {
    nullable: true
  })
  where?: InflowWhereInput | undefined;
}
