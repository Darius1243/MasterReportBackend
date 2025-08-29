import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OutflowWhereInput } from "../../inputs/OutflowWhereInput";

@TypeGraphQL.ArgsType()
export class FacilityCountOutflowArgs {
  @TypeGraphQL.Field(_type => OutflowWhereInput, {
    nullable: true
  })
  where?: OutflowWhereInput | undefined;
}
