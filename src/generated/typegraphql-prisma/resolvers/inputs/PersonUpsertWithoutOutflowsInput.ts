import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PersonUncheckedCreateWithoutOutflowsInput } from "../inputs/PersonUncheckedCreateWithoutOutflowsInput";
import { PersonUncheckedUpdateWithoutOutflowsInput } from "../inputs/PersonUncheckedUpdateWithoutOutflowsInput";
import { PersonWhereInput } from "../inputs/PersonWhereInput";

@TypeGraphQL.InputType("PersonUpsertWithoutOutflowsInput", {})
export class PersonUpsertWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => PersonUncheckedUpdateWithoutOutflowsInput, {
    nullable: false
  })
  update!: PersonUncheckedUpdateWithoutOutflowsInput;

  @TypeGraphQL.Field(_type => PersonUncheckedCreateWithoutOutflowsInput, {
    nullable: false
  })
  create!: PersonUncheckedCreateWithoutOutflowsInput;

  @TypeGraphQL.Field(_type => PersonWhereInput, {
    nullable: true
  })
  where?: PersonWhereInput | undefined;
}
