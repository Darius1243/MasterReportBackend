import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PersonUncheckedCreateWithoutInflowsInput } from "../inputs/PersonUncheckedCreateWithoutInflowsInput";
import { PersonUncheckedUpdateWithoutInflowsInput } from "../inputs/PersonUncheckedUpdateWithoutInflowsInput";
import { PersonWhereInput } from "../inputs/PersonWhereInput";

@TypeGraphQL.InputType("PersonUpsertWithoutInflowsInput", {})
export class PersonUpsertWithoutInflowsInput {
  @TypeGraphQL.Field(_type => PersonUncheckedUpdateWithoutInflowsInput, {
    nullable: false
  })
  update!: PersonUncheckedUpdateWithoutInflowsInput;

  @TypeGraphQL.Field(_type => PersonUncheckedCreateWithoutInflowsInput, {
    nullable: false
  })
  create!: PersonUncheckedCreateWithoutInflowsInput;

  @TypeGraphQL.Field(_type => PersonWhereInput, {
    nullable: true
  })
  where?: PersonWhereInput | undefined;
}
