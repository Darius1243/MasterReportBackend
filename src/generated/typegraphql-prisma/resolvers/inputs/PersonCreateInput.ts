import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateNestedManyWithoutPersonInput } from "../inputs/InflowCreateNestedManyWithoutPersonInput";
import { OutflowCreateNestedManyWithoutPersonInput } from "../inputs/OutflowCreateNestedManyWithoutPersonInput";

@TypeGraphQL.InputType("PersonCreateInput", {})
export class PersonCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => InflowCreateNestedManyWithoutPersonInput, {
    nullable: true
  })
  inflows?: InflowCreateNestedManyWithoutPersonInput | undefined;

  @TypeGraphQL.Field(_type => OutflowCreateNestedManyWithoutPersonInput, {
    nullable: true
  })
  outflows?: OutflowCreateNestedManyWithoutPersonInput | undefined;
}
