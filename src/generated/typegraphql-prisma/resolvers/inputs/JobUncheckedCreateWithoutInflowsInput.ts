import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedCreateNestedManyWithoutJobInput } from "../inputs/OutflowUncheckedCreateNestedManyWithoutJobInput";

@TypeGraphQL.InputType("JobUncheckedCreateWithoutInflowsInput", {})
export class JobUncheckedCreateWithoutInflowsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => OutflowUncheckedCreateNestedManyWithoutJobInput, {
    nullable: true
  })
  outflows?: OutflowUncheckedCreateNestedManyWithoutJobInput | undefined;
}
