import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateNestedManyWithoutPersonInput } from "../inputs/InflowCreateNestedManyWithoutPersonInput";

@TypeGraphQL.InputType("PersonCreateWithoutOutflowsInput", {})
export class PersonCreateWithoutOutflowsInput {
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
}
