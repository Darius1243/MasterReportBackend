import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedCreateWithoutPersonInput } from "../inputs/OutflowUncheckedCreateWithoutPersonInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowCreateOrConnectWithoutPersonInput", {})
export class OutflowCreateOrConnectWithoutPersonInput {
  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: false
  })
  where!: OutflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedCreateWithoutPersonInput, {
    nullable: false
  })
  create!: OutflowUncheckedCreateWithoutPersonInput;
}
