import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowWhereInput } from "../inputs/InflowWhereInput";

@TypeGraphQL.InputType("InflowListRelationFilter", {})
export class InflowListRelationFilter {
  @TypeGraphQL.Field(_type => InflowWhereInput, {
    nullable: true
  })
  every?: InflowWhereInput | undefined;

  @TypeGraphQL.Field(_type => InflowWhereInput, {
    nullable: true
  })
  some?: InflowWhereInput | undefined;

  @TypeGraphQL.Field(_type => InflowWhereInput, {
    nullable: true
  })
  none?: InflowWhereInput | undefined;
}
