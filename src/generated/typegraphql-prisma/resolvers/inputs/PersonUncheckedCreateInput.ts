import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowUncheckedCreateNestedManyWithoutPersonInput } from "../inputs/InflowUncheckedCreateNestedManyWithoutPersonInput";
import { OutflowUncheckedCreateNestedManyWithoutPersonInput } from "../inputs/OutflowUncheckedCreateNestedManyWithoutPersonInput";

@TypeGraphQL.InputType("PersonUncheckedCreateInput", {})
export class PersonUncheckedCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => InflowUncheckedCreateNestedManyWithoutPersonInput, {
    nullable: true
  })
  inflows?: InflowUncheckedCreateNestedManyWithoutPersonInput | undefined;

  @TypeGraphQL.Field(_type => OutflowUncheckedCreateNestedManyWithoutPersonInput, {
    nullable: true
  })
  outflows?: OutflowUncheckedCreateNestedManyWithoutPersonInput | undefined;
}
