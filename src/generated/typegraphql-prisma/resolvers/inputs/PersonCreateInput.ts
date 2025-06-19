import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateNestedManyWithoutPersonInput } from "../inputs/InflowCreateNestedManyWithoutPersonInput";

@TypeGraphQL.InputType("PersonCreateInput", {})
export class PersonCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => InflowCreateNestedManyWithoutPersonInput, {
    nullable: true
  })
  inflows?: InflowCreateNestedManyWithoutPersonInput | undefined;
}
