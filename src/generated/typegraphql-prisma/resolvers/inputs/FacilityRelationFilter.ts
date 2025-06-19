import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityWhereInput } from "../inputs/FacilityWhereInput";

@TypeGraphQL.InputType("FacilityRelationFilter", {})
export class FacilityRelationFilter {
  @TypeGraphQL.Field(_type => FacilityWhereInput, {
    nullable: true
  })
  is?: FacilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => FacilityWhereInput, {
    nullable: true
  })
  isNot?: FacilityWhereInput | undefined;
}
