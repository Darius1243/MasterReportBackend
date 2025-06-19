import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PersonUncheckedUpdateWithoutInflowsInput } from "../inputs/PersonUncheckedUpdateWithoutInflowsInput";
import { PersonWhereInput } from "../inputs/PersonWhereInput";

@TypeGraphQL.InputType("PersonUpdateToOneWithWhereWithoutInflowsInput", {})
export class PersonUpdateToOneWithWhereWithoutInflowsInput {
  @TypeGraphQL.Field(_type => PersonWhereInput, {
    nullable: true
  })
  where?: PersonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PersonUncheckedUpdateWithoutInflowsInput, {
    nullable: false
  })
  data!: PersonUncheckedUpdateWithoutInflowsInput;
}
