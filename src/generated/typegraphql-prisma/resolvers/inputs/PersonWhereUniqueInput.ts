import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowListRelationFilter } from "../inputs/InflowListRelationFilter";
import { OutflowListRelationFilter } from "../inputs/OutflowListRelationFilter";
import { PersonWhereInput } from "../inputs/PersonWhereInput";

@TypeGraphQL.InputType("PersonWhereUniqueInput", {})
export class PersonWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

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

  @TypeGraphQL.Field(_type => InflowListRelationFilter, {
    nullable: true
  })
  inflows?: InflowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OutflowListRelationFilter, {
    nullable: true
  })
  outflows?: OutflowListRelationFilter | undefined;
}
