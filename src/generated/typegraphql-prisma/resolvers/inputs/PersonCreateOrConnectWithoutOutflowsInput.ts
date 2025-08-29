import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PersonUncheckedCreateWithoutOutflowsInput } from "../inputs/PersonUncheckedCreateWithoutOutflowsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateOrConnectWithoutOutflowsInput", {})
export class PersonCreateOrConnectWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonUncheckedCreateWithoutOutflowsInput, {
    nullable: false
  })
  create!: PersonUncheckedCreateWithoutOutflowsInput;
}
