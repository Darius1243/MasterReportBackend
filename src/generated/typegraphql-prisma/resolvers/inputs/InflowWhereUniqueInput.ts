import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FacilityRelationFilter } from "../inputs/FacilityRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { InflowWhereInput } from "../inputs/InflowWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { JobRelationFilter } from "../inputs/JobRelationFilter";
import { PersonRelationFilter } from "../inputs/PersonRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("InflowWhereUniqueInput", {})
export class InflowWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [InflowWhereInput], {
    nullable: true
  })
  AND?: InflowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowWhereInput], {
    nullable: true
  })
  OR?: InflowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowWhereInput], {
    nullable: true
  })
  NOT?: InflowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  amount?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  personId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  facilityId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  jobId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => PersonRelationFilter, {
    nullable: true
  })
  person?: PersonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FacilityRelationFilter, {
    nullable: true
  })
  facility?: FacilityRelationFilter | undefined;

  @TypeGraphQL.Field(_type => JobRelationFilter, {
    nullable: true
  })
  job?: JobRelationFilter | undefined;
}
