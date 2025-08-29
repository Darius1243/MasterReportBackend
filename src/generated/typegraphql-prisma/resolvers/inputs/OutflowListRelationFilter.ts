import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowWhereInput } from "../inputs/OutflowWhereInput";

@TypeGraphQL.InputType("OutflowListRelationFilter", {})
export class OutflowListRelationFilter {
  @TypeGraphQL.Field(_type => OutflowWhereInput, {
    nullable: true
  })
  every?: OutflowWhereInput | undefined;

  @TypeGraphQL.Field(_type => OutflowWhereInput, {
    nullable: true
  })
  some?: OutflowWhereInput | undefined;

  @TypeGraphQL.Field(_type => OutflowWhereInput, {
    nullable: true
  })
  none?: OutflowWhereInput | undefined;
}
