import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowListRelationFilter } from "../inputs/InflowListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("JobWhereInput", {})
export class JobWhereInput {
  @TypeGraphQL.Field(_type => [JobWhereInput], {
    nullable: true
  })
  AND?: JobWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobWhereInput], {
    nullable: true
  })
  OR?: JobWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobWhereInput], {
    nullable: true
  })
  NOT?: JobWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => InflowListRelationFilter, {
    nullable: true
  })
  inflows?: InflowListRelationFilter | undefined;
}
