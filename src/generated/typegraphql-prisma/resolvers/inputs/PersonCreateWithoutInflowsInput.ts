import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateNestedManyWithoutPersonInput } from "../inputs/OutflowCreateNestedManyWithoutPersonInput";

@TypeGraphQL.InputType("PersonCreateWithoutInflowsInput", {})
export class PersonCreateWithoutInflowsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => OutflowCreateNestedManyWithoutPersonInput, {
    nullable: true
  })
  outflows?: OutflowCreateNestedManyWithoutPersonInput | undefined;
}
