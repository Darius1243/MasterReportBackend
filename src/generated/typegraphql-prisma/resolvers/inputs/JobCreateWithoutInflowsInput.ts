import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateNestedManyWithoutJobInput } from "../inputs/OutflowCreateNestedManyWithoutJobInput";

@TypeGraphQL.InputType("JobCreateWithoutInflowsInput", {})
export class JobCreateWithoutInflowsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => OutflowCreateNestedManyWithoutJobInput, {
    nullable: true
  })
  outflows?: OutflowCreateNestedManyWithoutJobInput | undefined;
}
