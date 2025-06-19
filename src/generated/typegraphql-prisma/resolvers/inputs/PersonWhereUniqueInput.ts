import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowListRelationFilter } from "../inputs/InflowListRelationFilter";
import { PersonWhereInput } from "../inputs/PersonWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PersonWhereUniqueInput", {})
export class PersonWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => InflowListRelationFilter, {
    nullable: true
  })
  inflows?: InflowListRelationFilter | undefined;
}
