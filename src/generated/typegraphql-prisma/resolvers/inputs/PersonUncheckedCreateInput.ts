import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedCreateNestedManyWithoutPersonInput } from "../inputs/InflowUncheckedCreateNestedManyWithoutPersonInput";

@TypeGraphQL.InputType("PersonUncheckedCreateInput", {})
export class PersonUncheckedCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => InflowUncheckedCreateNestedManyWithoutPersonInput, {
    nullable: true
  })
  inflows?: InflowUncheckedCreateNestedManyWithoutPersonInput | undefined;
}
