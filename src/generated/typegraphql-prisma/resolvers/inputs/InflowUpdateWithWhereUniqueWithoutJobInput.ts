import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedUpdateWithoutJobInput } from "../inputs/InflowUncheckedUpdateWithoutJobInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowUpdateWithWhereUniqueWithoutJobInput", {})
export class InflowUpdateWithWhereUniqueWithoutJobInput {
  @TypeGraphQL.Field(_type => InflowWhereUniqueInput, {
    nullable: false
  })
  where!: InflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => InflowUncheckedUpdateWithoutJobInput, {
    nullable: false
  })
  data!: InflowUncheckedUpdateWithoutJobInput;
}
