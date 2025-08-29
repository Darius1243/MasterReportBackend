import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutOutflowsInput } from "../inputs/PersonCreateOrConnectWithoutOutflowsInput";
import { PersonUncheckedCreateWithoutOutflowsInput } from "../inputs/PersonUncheckedCreateWithoutOutflowsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateNestedOneWithoutOutflowsInput", {})
export class PersonCreateNestedOneWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => PersonUncheckedCreateWithoutOutflowsInput, {
    nullable: true
  })
  create?: PersonUncheckedCreateWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutOutflowsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;
}
