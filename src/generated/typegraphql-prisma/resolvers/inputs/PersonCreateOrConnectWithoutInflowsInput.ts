import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PersonUncheckedCreateWithoutInflowsInput } from "../inputs/PersonUncheckedCreateWithoutInflowsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateOrConnectWithoutInflowsInput", {})
export class PersonCreateOrConnectWithoutInflowsInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonUncheckedCreateWithoutInflowsInput, {
    nullable: false
  })
  create!: PersonUncheckedCreateWithoutInflowsInput;
}
