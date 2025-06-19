import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedCreateNestedManyWithoutJobInput } from "../inputs/InflowUncheckedCreateNestedManyWithoutJobInput";

@TypeGraphQL.InputType("JobUncheckedCreateInput", {})
export class JobUncheckedCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => InflowUncheckedCreateNestedManyWithoutJobInput, {
    nullable: true
  })
  inflows?: InflowUncheckedCreateNestedManyWithoutJobInput | undefined;
}
