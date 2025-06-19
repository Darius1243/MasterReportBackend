import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutInflowsInput } from "../inputs/PersonCreateOrConnectWithoutInflowsInput";
import { PersonUncheckedCreateWithoutInflowsInput } from "../inputs/PersonUncheckedCreateWithoutInflowsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateNestedOneWithoutInflowsInput", {})
export class PersonCreateNestedOneWithoutInflowsInput {
  @TypeGraphQL.Field(_type => PersonUncheckedCreateWithoutInflowsInput, {
    nullable: true
  })
  create?: PersonUncheckedCreateWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutInflowsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;
}
