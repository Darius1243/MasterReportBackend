import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateNestedManyWithoutJobInput } from "../inputs/InflowCreateNestedManyWithoutJobInput";
import { OutflowCreateNestedManyWithoutJobInput } from "../inputs/OutflowCreateNestedManyWithoutJobInput";

@TypeGraphQL.InputType("JobCreateInput", {})
export class JobCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => InflowCreateNestedManyWithoutJobInput, {
    nullable: true
  })
  inflows?: InflowCreateNestedManyWithoutJobInput | undefined;

  @TypeGraphQL.Field(_type => OutflowCreateNestedManyWithoutJobInput, {
    nullable: true
  })
  outflows?: OutflowCreateNestedManyWithoutJobInput | undefined;
}
