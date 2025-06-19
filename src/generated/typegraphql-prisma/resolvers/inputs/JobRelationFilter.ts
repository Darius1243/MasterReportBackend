import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobWhereInput } from "../inputs/JobWhereInput";

@TypeGraphQL.InputType("JobRelationFilter", {})
export class JobRelationFilter {
  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  is?: JobWhereInput | undefined;

  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  isNot?: JobWhereInput | undefined;
}
