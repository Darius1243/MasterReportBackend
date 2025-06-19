import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedUpdateWithoutPersonInput } from "../inputs/InflowUncheckedUpdateWithoutPersonInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowUpdateWithWhereUniqueWithoutPersonInput", {})
export class InflowUpdateWithWhereUniqueWithoutPersonInput {
  @TypeGraphQL.Field(_type => InflowWhereUniqueInput, {
    nullable: false
  })
  where!: InflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => InflowUncheckedUpdateWithoutPersonInput, {
    nullable: false
  })
  data!: InflowUncheckedUpdateWithoutPersonInput;
}
