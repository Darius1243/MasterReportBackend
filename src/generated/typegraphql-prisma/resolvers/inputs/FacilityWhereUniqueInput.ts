import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityWhereInput } from "../inputs/FacilityWhereInput";
import { InflowListRelationFilter } from "../inputs/InflowListRelationFilter";

@TypeGraphQL.InputType("FacilityWhereUniqueInput", {})
export class FacilityWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

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

  @TypeGraphQL.Field(_type => InflowListRelationFilter, {
    nullable: true
  })
  inflows?: InflowListRelationFilter | undefined;
}
