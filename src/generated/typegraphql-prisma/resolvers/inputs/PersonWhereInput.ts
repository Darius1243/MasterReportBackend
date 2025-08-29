import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowListRelationFilter } from "../inputs/InflowListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OutflowListRelationFilter } from "../inputs/OutflowListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PersonWhereInput", {})
export class PersonWhereInput {
  @TypeGraphQL.Field(_type => [PersonWhereInput], {
    nullable: true
  })
  AND?: PersonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereInput], {
    nullable: true
  })
  OR?: PersonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereInput], {
    nullable: true
  })
  NOT?: PersonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => InflowListRelationFilter, {
    nullable: true
  })
  inflows?: InflowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OutflowListRelationFilter, {
    nullable: true
  })
  outflows?: OutflowListRelationFilter | undefined;
}
