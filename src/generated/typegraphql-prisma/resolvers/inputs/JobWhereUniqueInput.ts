import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowListRelationFilter } from "../inputs/InflowListRelationFilter";
import { JobWhereInput } from "../inputs/JobWhereInput";
import { OutflowListRelationFilter } from "../inputs/OutflowListRelationFilter";

@TypeGraphQL.InputType("JobWhereUniqueInput", {})
export class JobWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

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

  @TypeGraphQL.Field(_type => InflowListRelationFilter, {
    nullable: true
  })
  inflows?: InflowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OutflowListRelationFilter, {
    nullable: true
  })
  outflows?: OutflowListRelationFilter | undefined;
}
