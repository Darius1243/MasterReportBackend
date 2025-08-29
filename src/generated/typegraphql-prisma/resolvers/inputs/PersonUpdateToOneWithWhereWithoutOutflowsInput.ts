import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PersonUncheckedUpdateWithoutOutflowsInput } from "../inputs/PersonUncheckedUpdateWithoutOutflowsInput";
import { PersonWhereInput } from "../inputs/PersonWhereInput";

@TypeGraphQL.InputType("PersonUpdateToOneWithWhereWithoutOutflowsInput", {})
export class PersonUpdateToOneWithWhereWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => PersonWhereInput, {
    nullable: true
  })
  where?: PersonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PersonUncheckedUpdateWithoutOutflowsInput, {
    nullable: false
  })
  data!: PersonUncheckedUpdateWithoutOutflowsInput;
}
