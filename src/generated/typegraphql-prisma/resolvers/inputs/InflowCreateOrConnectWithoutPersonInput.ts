import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedCreateWithoutPersonInput } from "../inputs/InflowUncheckedCreateWithoutPersonInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowCreateOrConnectWithoutPersonInput", {})
export class InflowCreateOrConnectWithoutPersonInput {
  @TypeGraphQL.Field(_type => InflowWhereUniqueInput, {
    nullable: false
  })
  where!: InflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => InflowUncheckedCreateWithoutPersonInput, {
    nullable: false
  })
  create!: InflowUncheckedCreateWithoutPersonInput;
}
