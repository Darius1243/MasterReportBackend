import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedCreateWithoutJobInput } from "../inputs/InflowUncheckedCreateWithoutJobInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowCreateOrConnectWithoutJobInput", {})
export class InflowCreateOrConnectWithoutJobInput {
  @TypeGraphQL.Field(_type => InflowWhereUniqueInput, {
    nullable: false
  })
  where!: InflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => InflowUncheckedCreateWithoutJobInput, {
    nullable: false
  })
  create!: InflowUncheckedCreateWithoutJobInput;
}
