import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowListRelationFilter } from "../inputs/InflowListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("FacilityWhereInput", {})
export class FacilityWhereInput {
  @TypeGraphQL.Field(_type => [FacilityWhereInput], {
    nullable: true
  })
  AND?: FacilityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FacilityWhereInput], {
    nullable: true
  })
  OR?: FacilityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FacilityWhereInput], {
    nullable: true
  })
  NOT?: FacilityWhereInput[] | undefined;

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
