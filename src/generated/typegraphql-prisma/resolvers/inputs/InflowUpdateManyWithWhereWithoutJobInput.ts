import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowScalarWhereInput } from "../inputs/InflowScalarWhereInput";
import { InflowUncheckedUpdateManyWithoutJobInput } from "../inputs/InflowUncheckedUpdateManyWithoutJobInput";

@TypeGraphQL.InputType("InflowUpdateManyWithWhereWithoutJobInput", {})
export class InflowUpdateManyWithWhereWithoutJobInput {
  @TypeGraphQL.Field(_type => InflowScalarWhereInput, {
    nullable: false
  })
  where!: InflowScalarWhereInput;

  @TypeGraphQL.Field(_type => InflowUncheckedUpdateManyWithoutJobInput, {
    nullable: false
  })
  data!: InflowUncheckedUpdateManyWithoutJobInput;
}
