import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DocumentTypeNullableRelationFilter } from "../inputs/DocumentTypeNullableRelationFilter";
import { FacilityRelationFilter } from "../inputs/FacilityRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PersonRelationFilter } from "../inputs/PersonRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("OutflowWhereInput", {})
export class OutflowWhereInput {
  @TypeGraphQL.Field(_type => [OutflowWhereInput], {
    nullable: true
  })
  AND?: OutflowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowWhereInput], {
    nullable: true
  })
  OR?: OutflowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowWhereInput], {
    nullable: true
  })
  NOT?: OutflowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  documentTypeId?: IntNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => DocumentTypeNullableRelationFilter, {
    nullable: true
  })
  documentType?: DocumentTypeNullableRelationFilter | undefined;
}
